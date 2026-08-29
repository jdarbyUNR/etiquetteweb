import { SiteFooter } from "../components/SiteFooter";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { getReleaseBySlug } from "../content/releases";

const release = getReleaseBySlug("scratching-at-the-walls");

export function ReleasePage() {
  return (
    <main className="release-landing">
      <p className="release-artist">Etiquette</p>

      <figure className="release-cover">
        <ResponsiveImage
          image={release.artwork}
          sizes="(max-width: 520px) min(70vw, 300px), min(496px, calc(100vw - 24px))"
          fetchPriority="high"
          loading="eager"
        />
      </figure>

      <header className="release-header">
        <h1>{release.title}</h1>
      </header>

      <div className="release-actions" aria-label={`Listen to ${release.title}`}>
        <a
          className="stream-link stream-link-primary"
          href={release.platforms.spotify}
          target="_blank"
          rel="noreferrer"
          data-platform="spotify"
          data-song={release.title}
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="currentColor" />
            <path d="M5.8 9.1c4.1-1.2 8.5-.9 12.3 1.1M6.9 12.3c3.3-.9 6.7-.5 9.5.9M8.1 15.2c2.2-.5 4.4-.3 6.3.6" fill="none" stroke="#f5f5ef" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
          Listen on Spotify
        </a>

        <a
          className="stream-link"
          href={release.platforms.appleMusic}
          target="_blank"
          rel="noreferrer"
          data-platform="apple-music"
          data-song={release.title}
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 8.95 7.29c1.32-.07 2.3.72 3.1.72.75 0 2.16-.97 3.64-.83 1.62.13 2.84.77 3.65 1.93-3.34 2-2.55 6.39.52 7.63-.61 1.6-1.42 3.18-2.81 3.54ZM12.03 7.25c-.15-2.37 1.77-4.32 3.99-4.5.31 2.74-2.48 4.78-3.99 4.5Z" fill="currentColor" />
          </svg>
          Listen on Apple Music
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
