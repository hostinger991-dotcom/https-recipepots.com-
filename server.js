import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Serve ads.txt and app-ads.txt directly from root for AdSense/crawlers
app.get('/ads.txt', (req, res) => {
  const adsPath = path.join(__dirname, 'ads.txt');
  if (fs.existsSync(adsPath)) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.sendFile(adsPath);
  }
  res.status(404).send('Not Found');
});

app.get('/app-ads.txt', (req, res) => {
  const appAdsPath = path.join(__dirname, 'app-ads.txt');
  if (fs.existsSync(appAdsPath)) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.sendFile(appAdsPath);
  }
  res.status(404).send('Not Found');
});

// Serve static production build files
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1y', etag: true }));
}

// SPA fallback: Route all other requests to dist/index.html
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  const rootIndex = path.join(__dirname, 'index.html');
  if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  }
  res.status(500).send('Application build not found. Please run "npm run build".');
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[recipepots] Production server listening on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`[recipepots] Port ${PORT} in use, skipping standalone listener.`);
  } else {
    console.error('[recipepots] Server error:', err);
  }
});

export default app;
