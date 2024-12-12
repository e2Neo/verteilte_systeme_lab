import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      port: 3001,
    },
    watch: {
      usePolling: true,
      interval: 600,
      binaryInterval: 600,
    },
  },
  proxy: {
    "/api": {
      target: "http://localhost:8080/",
    },
  },
})
