// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// If your project includes this, keep it; otherwise delete this import **and** the plugin line below.
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Required for GitHub Pages at a custom/root domain
  base: "/",

  // Dev/preview servers (harmless for build, useful locally)
  server: { host: "::", port: 8080 },
  preview: { host: "::", port: 4173 },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },

  plugins: [
    react(),
    // Only run in dev; safe if you remove lovable-tagger
    mode === "development" && componentTagger?.(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
