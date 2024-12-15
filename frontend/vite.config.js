import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // Ensure these entry points are explicitly set
      input: {
        client: "/src/entry-client.js", // Client entry point
        server: "/src/entry-server.js", // Server entry point
      },
    },
    ssr: {
      // Define the SSR entry explicitly
      input: "/src/entry-server.js",
    },
  },
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
    proxy: {
      "/api": {
        target: "http://backendspringboot:8080/",
        changeOrigin: true,
        loglevel: "debug",
      },
      "/backend": {
        target: "http://backendspringboot:8080/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ""),
      },
    },
  },
});
