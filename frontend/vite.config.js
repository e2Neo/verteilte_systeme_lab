import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, ssrBuild, isSsrBuild }) => ({
  plugins: [vue()],
  
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
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
}));
