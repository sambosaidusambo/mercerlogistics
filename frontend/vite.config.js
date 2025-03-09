import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://congenial-carnival-45xqp57x9v5fjqv-5000.app.github.dev",
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS with a valid certificate
      },
    },
  },
});