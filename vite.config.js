import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: "8080",
    strictPort: true,
    clearScreen: false,
    logLevel: "info",
    warmup: {
      clientFiles: ["src/**/*.(js|jsx|ts|tsx|html|css)", "index.html"]
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: ""
}));