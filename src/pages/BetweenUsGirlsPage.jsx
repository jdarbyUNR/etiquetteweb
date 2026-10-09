import { PlatformIcon } from "../components/PlatformIcon";
import { SiteFooter } from "../components/SiteFooter";
import { getReleaseBySlug } from "../content/releases";

const release = getReleaseBySlug("between-us-girls");
const services = [
  { platform: "spotify", label: "Spotify", url: release.platforms.spotify },
  { platform: "apple-music", label: "Apple Music", url: release.platforms.appleMusic },
  { platform: "youtube-music", label: "YouTube Music", url: release.platforms.youtubeMusic }
];

export function BetweenUsGirlsPage() {
  return (
    <main className="single-shell">
      <header className="single-masthead">
        <p className="single-wordmark">ETIQUETTE</p>
        <p className="single-origin">Reno, Nevada<span>Art rock / Post-punk</span></p>
      </header>

      <div className="single-feature">
        <figure className="single-artwork">
          <img
            src={release.artwork.src}
            srcSet="/web-images/between-us-girls-600.webp 600w, /web-images/between-us-girls.jpg 1200w"
            sizes="(max-width: 699px) min(42vw, 160px, 24svh), (max-width: 1175px) 46vw, 530px"
            alt={release.artwork.alt}
            width="1200"
            height="1200"
            fetchPriority="high"
          />
        </figure>

        <section className="single-details" aria-labelledby="single-title">
          <p className="single-status"><span aria-hidden="true" />{release.displayCopy}</p>
          <h1 id="single-title">{release.title}</h1>

          <nav className="single-services" aria-label={`Listen to ${release.title}`}>
            {services.map(({ platform, label, url }) => (
              <a
                key={platform}
                className={`stream-link single-service single-service-${platform}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to ${release.title} on ${label} (opens in a new tab)`}
                data-platform={platform}
                data-song={release.title}
              >
                <PlatformIcon platform={platform} />
                <span className="single-service-name">{label}</span>
                <span className="single-service-action" aria-hidden="true">Listen <span>↗</span></span>
              </a>
            ))}
          </nav>

        </section>
      </div>

      <div className="single-footer">
        <SiteFooter />
      </div>
    </main>
  );
}
