import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-exploradores.svg', 'logo-exploradores-180.png'],
      manifest: {
        name: 'Exploradores de las sierras',
        short_name: 'Exploradores',
        description: "Guía para exploradores de las sierras · Form 1 · Saint Brendan's School",
        lang: 'es',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#0d1612',
        background_color: '#0d1612',
        icons: [
          { src: '/logo-exploradores-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/logo-exploradores-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/logo-exploradores-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Todo precacheado para que funcione sin señal en la sierra.
        globPatterns: ['**/*.{html,js,css,woff2,png,jpg,jpeg,webp,svg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: '/index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
});
