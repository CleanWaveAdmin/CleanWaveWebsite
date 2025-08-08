import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 👇 IMPORTANT for GitHub Pages at your root domain
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  // Optional but tidy: where the static site gets built
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
