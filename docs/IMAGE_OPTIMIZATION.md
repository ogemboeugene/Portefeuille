# Image Optimization Guide

This portfolio uses several image optimization techniques to ensure fast loading and good performance when hosted.

## Image Structure

All images are stored in the `public/images/` directory and referenced using absolute paths starting with `/images/`. This approach ensures:

- Images are properly accessible when the site is deployed to any hosting platform
- Browser caching is more effective
- Images load reliably regardless of the deployment path

## Optimizations Applied

### 1. Absolute Paths
- All images use absolute paths: `/images/filename.ext`
- This prevents issues with relative paths when deployed

### 2. Image Preloading
- Critical images (profile.jpg, logo.jpg) are preloaded in the HTML head
- JavaScript preloading utility for additional images

### 3. Lazy Loading
- Non-critical images use `loading="lazy"` attribute
- Images load only when they're about to enter the viewport

### 4. Async Decoding
- Images use `decoding="async"` for non-blocking rendering

### 5. Responsive Images
- Utility functions for responsive image sizes
- Proper sizing attributes for different screen sizes

### 6. Error Handling
- OptimizedImage component with fallback support
- Graceful degradation when images fail to load

## Build Configuration

The Vite configuration includes:

```typescript
build: {
  assetsInlineLimit: 0, // Don't inline images
  rollupOptions: {
    output: {
      assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
    }
  }
}
```

## File Formats Used

- `.webp` - Modern format for best compression (projects)
- `.jpg` - High-quality photos (profile, DSC_2400)
- `.png` - Images requiring transparency (shopokoa)
- `.svg` - Vector graphics (react icon)

## Performance Tips

1. Use WebP format when possible for better compression
2. Compress images before adding to the project
3. Use appropriate image dimensions (avoid oversized images)
4. Consider using a CDN for production deployments

## Hosting Considerations

- All images are in the `public/` directory and will be copied to the build output
- Images are accessible at the root level: `yoursite.com/images/filename.ext`
- Works with any hosting platform (Vercel, Netlify, traditional hosting)
