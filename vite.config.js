import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:0077',
  //       changeOrigin: true,
        
  //     },
  //   },
  // },

preview: {
    host: "0.0.0.0",                        // required for Render
    port: process.env.PORT || 5173,         // use Render's port
    allowedHosts: ["payrollfrontend.onrender.com"] // whitelist your domain
  }
})

