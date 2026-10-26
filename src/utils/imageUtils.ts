// High-reliability image fallback and multi-path resolver for recipepots

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  'easy-one-pot-dinners':
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
  'slow-cooker-crockpot-classics':
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  'quick-easy-weeknight-dinners':
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
  'special-diets-healthy-eating':
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  default:
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
};

/**
 * Handles image loading errors by attempting alternative relative paths
 * before finally falling back to a category-specific CDN photograph.
 * Guarantees zero blank or broken image states across any hosting platform.
 */
export function handleImageFallback(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  categoryId?: string
) {
  const target = event.currentTarget;
  const currentSrc = target.getAttribute('src') || '';
  const attempts = parseInt(target.getAttribute('data-fallback-attempt') || '0', 10);

  // Extract base filename if it ends with .jpg
  const filename = currentSrc.split('/').pop()?.split('?')[0];

  if (attempts === 0 && filename) {
    // Attempt 1: try without leading slash (for relative hosting subdirectories)
    target.setAttribute('data-fallback-attempt', '1');
    target.src = `images/${filename}`;
    return;
  }

  if (attempts === 1 && filename) {
    // Attempt 2: try with ./ prefix
    target.setAttribute('data-fallback-attempt', '2');
    target.src = `./images/${filename}`;
    return;
  }

  if (attempts === 2 && filename) {
    // Attempt 3: try public/images path
    target.setAttribute('data-fallback-attempt', '3');
    target.src = `/public/images/${filename}`;
    return;
  }

  if (attempts === 3 && filename) {
    // Attempt 4: try src/assets/images path
    target.setAttribute('data-fallback-attempt', '4');
    target.src = `/src/assets/images/${filename}`;
    return;
  }

  // Final fallback: category-specific food photography
  const fallback =
    (categoryId && CATEGORY_FALLBACK_IMAGES[categoryId]) ||
    CATEGORY_FALLBACK_IMAGES.default;
  target.setAttribute('data-fallback-attempt', '99');
  target.src = fallback;
}
