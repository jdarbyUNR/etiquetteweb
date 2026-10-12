import { getReleaseBySlug } from "./content/releases.js";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

// Render at build time so ad visitors can use the links before JavaScript loads.
export function renderBetweenUsGirls() {
  const release = getReleaseBySlug("between-us-girls");
  const services = [
    { platform: "spotify", name: "Spotify", icon: "spotify.svg", url: release.platforms.spotify },
    { platform: "apple-music", name: "Apple Music", icon: "apple-music.svg", url: release.platforms.appleMusic },
    { platform: "youtube-music", name: "YouTube Music", icon: "youtube-music.png", url: release.platforms.youtubeMusic }
  ];

  return `
    <main class="single-shell">
      <article class="single-card" aria-labelledby="single-title">
        <header class="single-summary">
          <img class="single-artwork" src="${escapeHtml(release.artwork.src)}"
            srcset="/web-images/between-us-girls-600.webp 600w, ${escapeHtml(release.artwork.src)} 1200w"
            sizes="(max-width: 359px) 88px, 112px"
            alt="${escapeHtml(release.artwork.alt)}" width="1200" height="1200" fetchpriority="high">
          <div class="single-identity">
            <p class="single-artist">Etiquette</p>
            <h1 id="single-title">${escapeHtml(release.title)}</h1>
            <p class="single-format">Single <span aria-hidden="true">·</span> Out now</p>
          </div>
        </header>
        <section class="single-listening" aria-labelledby="listen-title">
          <h2 id="listen-title">Listen now</h2>
          <p class="single-instruction">Choose your music service.</p>
          <nav class="single-services" aria-label="Listen to ${escapeHtml(release.title)}">
            ${services.map(({ platform, name, icon, url }) => `
              <a class="stream-link single-service single-service-${platform}" href="${escapeHtml(url)}"
                aria-label="Listen to ${escapeHtml(release.title)} on ${name}"
                target="_blank" rel="noreferrer"
                data-platform="${platform}" data-song="${escapeHtml(release.title)}">
                <span class="single-icon-wrap"><img class="platform-icon" src="/brand-icons/${icon}" alt="" width="32" height="32"></span>
                <span class="single-service-name">${name}</span>
                <span class="single-service-action" aria-hidden="true">Play <svg viewBox="0 0 12 12" width="10" height="10"><path d="M3 1.5 10 6 3 10.5Z" fill="currentColor"/></svg></span>
              </a>`).join("")}
          </nav>
        </section>
      </article>
      <footer class="single-footer"><a href="/privacy/">Privacy &amp; ad choices</a></footer>
    </main>`;
}
