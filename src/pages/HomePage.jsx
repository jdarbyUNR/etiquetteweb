import { PlatformIcon } from "../components/PlatformIcon";
import { SiteFooter } from "../components/SiteFooter";
import { currentRelease, livePhotos, liveVideo, platformLinks } from "../content/site";

export function HomePage() {
  return (
    <div className="page-shell">
      <main className="landing">
        <section className="section section-hero">
          <figure className="hero-image">
            <img src="/web-images/hero.jpg" alt="Etiquette performing live for a crowd" fetchPriority="high" />
          </figure>

          <div className="top-intro">
            <h1>Etiquette</h1>
            <p className="lede">RENO<br />ART ROCK<br />POST-PUNK</p>
          </div>
        </section>

        <section className="section section-player section-featured-release" aria-labelledby="featured-release-title">
          <div className="release-card">
            <figure className="release-art">
              <img src={currentRelease.artwork} alt={currentRelease.artworkAlt} />
            </figure>
            <div className="release-copy">
              <p className="eyebrow release-status">{currentRelease.status}</p>
              <h2 id="featured-release-title">{currentRelease.title}</h2>
              <a
                className="cta-button cta-button-primary stream-link"
                href={currentRelease.hyperfollowUrl}
                target="_blank"
                rel="noreferrer"
                data-platform="hyperfollow"
                data-song={currentRelease.title}
              >Listen to “{currentRelease.title}”</a>
            </div>
          </div>
          <div className="player-stack">
            <div className="player-copy">
              <p className="eyebrow">Listen on Spotify</p>
              <p>“{currentRelease.title}”</p>
            </div>
            <div className="track-player">
              <iframe
                style={{ borderRadius: "12px" }}
                src={currentRelease.spotifyEmbedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${currentRelease.title} by Etiquette on Spotify`}
              />
            </div>
          </div>
        </section>

        <section className="section section-links" aria-labelledby="music-social-heading">
          <p className="eyebrow section-label" id="music-social-heading">More music &amp; social</p>
          <div className="icon-links" aria-label="Music and social links">
            {platformLinks.map(({ platform, label, url }) => (
              <a className="icon-link" href={url} target="_blank" rel="noreferrer" aria-label={label} key={platform}>
                <PlatformIcon platform={platform} />
              </a>
            ))}
          </div>
        </section>

        <section className="section section-video">
          <div className="video-heading">
            <p className="eyebrow">Live</p>
          </div>
          <div className="video-frame">
            <iframe
              src={liveVideo.embedUrl}
              title={liveVideo.title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="section section-photo-row">
          <div className="filmstrip-grid">
            {livePhotos.map(({ src, alt }) => (
              <figure className="filmstrip-card" key={src}>
                <img src={src} alt={alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
