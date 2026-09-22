import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'CADENCE - CADIS Emergency ERP',
        short_name: 'Cadence',
        description: 'Sistema de Gestión Operativa, Inventario y Despacho Sanitario',
        theme_color: '#1e293b',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'landscape-primary',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/1048/1048313.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/1048/1048313.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});