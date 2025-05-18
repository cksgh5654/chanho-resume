import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@cinemahubPage": path.resolve(
        __dirname,
        "./src/assets/images/cinemahubPage"
      ),
      "@blahblahPage": path.resolve(
        __dirname,
        "./src/assets/images/blahblahPage"
      ),
      "@consts": path.resolve(__dirname, "./src/consts"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
