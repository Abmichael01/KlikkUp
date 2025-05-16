import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0', // Bind to all IPs to accept klikkup.local and admin.klikkup.local
    port: 5173,
    open: false,
    allowedHosts: ["klikkupp.local", "admin.klikkupp.local"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, 
  }
})
