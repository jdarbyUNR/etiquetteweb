import { DeferredEmbed } from "./DeferredEmbed";
import { ResponsiveImage } from "./ResponsiveImage";

export function FeaturedRelease({ release, headingId = "featured-release-title" }) {
  return (
    <section className="section section-player section-featured-release" aria-labelledby={headingId}>
      <div className="release-card">
        <figure className="release-art">
          <ResponsiveImage
            image={release.artwork}
            sizes="(min-width: 700px) 220px, (min-width: 521px) 150px, calc(100vw - 42px)"
            loading="eager"
          />
        </figure>
        <div className="release-copy">
          <p className="eyebrow release-status">{release.displayCopy}</p>
          <h2 id={headingId}>{release.title}</h2>
          <a
            className="cta-button cta-button-primary stream-link"
            href={release.primaryListeningUrl}
            target="_blank"
            rel="noreferrer"
            data-platform={release.primaryTrackingPlatform}
            data-song={release.title}
          >
            {release.primaryCtaLabel}
          </a>
        </div>
      </div>
      <div className="player-stack">
        <div className="player-copy">
          <p className="eyebrow">Listen on Spotify</p>
          <p>“{release.title}”</p>
        </div>
        <div className="track-player">
          <DeferredEmbed
            src={release.spotifyEmbedUrl}
            title={`${release.title} by Etiquette on Spotify`}
            service="Spotify"
            actionLabel="Load Spotify player"
            description="Loads Spotify’s player on request."
            variant="audio"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
