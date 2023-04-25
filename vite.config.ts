import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr(),  
    VitePWA(
      { 
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        injectRegister: 'auto',
        includeAssets: ['src/assets/favicon.ico', '/Logo-192'],
        manifest: {
          name: 'Schusshilfe',
          short_name: 'Schusshilfe',
          description: 'Die Hilfsapp für Schweizer Schützen',
          theme_color: '#f4d8a8',
          icons: [
            {
              src: 'Logo-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'Logo-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }
    )
  ],
})
