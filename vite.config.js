import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@contexts": resolve(__dirname, "./src/contexts"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
