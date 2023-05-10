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
        manifestFilename: "manifest.json",
        manifest: {
          name: 'Schusshilfe',
          short_name: 'Schusshilfe',
          description: 'Die Hilfsapp für Schweizer Schützen',
          theme_color: '#f4d8a8',
          display: "standalone",
          lang: "de-CH",
          dir: "rtl",
          orientation: "portrait",
          display_override: [
            "standalone",
            "browser",
          ],
          prefer_related_applications: false,
          categories: [
            "education", "entertainment", "reference", "sports", "utilities",
          ],
          icons: [
            {
              src: 'Logo-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: "any",
            },
            {
              src: 'Logo-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: "maskable",
            }
          ],
          screenshots: [
            {
              src: "/Screenshots/sc_main1.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
            {
              src: "/Screenshots/sc_main2.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
            {
              src: "/Screenshots/sc_targets.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
            {
              src: "/Screenshots/sc_weapons.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
            {
              src: "/Screenshots/sc_factors.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
            {
              src: "/Screenshots/sc_help_sight.jpg",
              sizes: "1080x2000",
              type: "image/jpg",
            },
          ]
        }
      }
    )
  ],
})
