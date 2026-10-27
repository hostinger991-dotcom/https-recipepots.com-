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

// Serve sitemap.xml directly with correct XML content type
app.get('/sitemap.xml', (req, res) => {
  const sitemapDist = path.join(distPath, 'sitemap.xml');
  const sitemapPub = path.join(__dirname, 'public', 'sitemap.xml');
  const sitemapRoot = path.join(__dirname, 'sitemap.xml');
  const target = fs.existsSync(sitemapDist) ? sitemapDist : (fs.existsSync(sitemapPub) ? sitemapPub : sitemapRoot);
  if (fs.existsSync(target)) {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    return res.sendFile(target);
  }
  res.status(404).send('Sitemap Not Found');
});

// Serve robots.txt directly
app.get('/robots.txt', (req, res) => {
  const robotsDist = path.join(distPath, 'robots.txt');
  const robotsPub = path.join(__dirname, 'public', 'robots.txt');
  const robotsRoot = path.join(__dirname, 'robots.txt');
  const target = fs.existsSync(robotsDist) ? robotsDist : (fs.existsSync(robotsPub) ? robotsPub : robotsRoot);
  if (fs.existsSync(target)) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.sendFile(target);
  }
  res.status(404).send('Robots.txt Not Found');
});

// Serve Google Search Console HTML verification files
app.get('/google:hash.html', (req, res) => {
  const fileName = `google${req.params.hash}.html`;
  const fileDist = path.join(distPath, fileName);
  const filePub = path.join(__dirname, 'public', fileName);
  const fileRoot = path.join(__dirname, fileName);
  const target = fs.existsSync(fileDist) ? fileDist : (fs.existsSync(filePub) ? filePub : fileRoot);
  if (fs.existsSync(target)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.sendFile(target);
  }
  res.status(404).send('Verification File Not Found');
});

// Resilient static asset serving
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1y', etag: true }));
}
app.use('/images', express.static(path.join(distPath, 'images')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/src/assets/images', express.static(path.join(distPath, 'images')));
app.use('/src/assets/images', express.static(path.join(__dirname, 'images')));
app.use('/src/assets/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/assets/images', express.static(path.join(distPath, 'images')));
app.use('/assets/images', express.static(path.join(__dirname, 'images')));
app.use('/assets/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));

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
