/**
 * Utility functions for image optimization and loading
 */

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  try {
    await Promise.all(sources.map(src => preloadImage(src)));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

/**
 * Get optimized image src with fallback
 */
export const getOptimizedImageSrc = (src: string, fallback?: string): string => {
  // Check if the image exists by creating a temporary image element
  if (!src) return fallback || '/images/placeholder.jpg';
  
  // For production, images should be absolute paths from public directory
  if (src.startsWith('/images/')) {
    return src;
  }
  
  // Fallback for any other paths
  return src.startsWith('/') ? src : `/images/${src}`;
};

/**
 * Intersection Observer for lazy loading images
 */
export const createImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  const options = {
    rootMargin: '50px 0px', // Start loading 50px before image enters viewport
    threshold: 0.1
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);
};

/**
 * Get responsive image sizes attribute
 */
export const getResponsiveImageSizes = (breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string => {
  const defaults = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    ...breakpoints
  };

  return `(max-width: 640px) ${defaults.mobile}, (max-width: 1024px) ${defaults.tablet}, ${defaults.desktop}`;
};
