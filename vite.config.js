import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { renderBetweenUsGirls } from "./src/renderBetweenUsGirls.js";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

// Match the static host's directory URL behavior in local development and preview.
function epkDirectoryRedirect(server) {
  server.middlewares.use((request, response, next) => {
    const [pathname, query] = (request.url || "").split(/\?(.*)/s);
    if (pathname !== "/epk") return next();
    response.writeHead(308, { Location: `/epk/${query !== undefined ? `?${query}` : ""}` });
    response.end();
  });
}

export default defineConfig({
  plugins: [react(), {
    name: "epk-directory-url",
    configureServer: epkDirectoryRedirect,
    configurePreviewServer: epkDirectoryRedirect
  }, {
    name: "render-release-landing",
    transformIndexHtml(html) {
      return html.includes("<!-- between-us-girls-content -->")
        ? html.replace("<!-- between-us-girls-content -->", renderBetweenUsGirls())
        : html;
    }
  }],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("index.html", import.meta.url)),
        release: fileURLToPath(new URL("scratching-at-the-walls/index.html", import.meta.url)),
        betweenUsGirls: fileURLToPath(new URL("between-us-girls/index.html", import.meta.url)),
        privacy: fileURLToPath(new URL("privacy/index.html", import.meta.url)),
        press: fileURLToPath(new URL("press/index.html", import.meta.url)),
        epk: fileURLToPath(new URL("epk/index.html", import.meta.url))
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
