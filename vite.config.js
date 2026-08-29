import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("index.html", import.meta.url)),
        release: fileURLToPath(new URL("scratching-at-the-walls/index.html", import.meta.url)),
        privacy: fileURLToPath(new URL("privacy/index.html", import.meta.url)),
        press: fileURLToPath(new URL("press/index.html", import.meta.url))
      }
    }
  },
  server: {
    fs: {
      strict: true,
      allow: [projectRoot]
    }
  }
});
