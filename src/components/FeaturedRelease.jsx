export function FeaturedRelease({ release, headingId = "featured-release-title" }) {
  return (
    <section className="section section-player section-featured-release" aria-labelledby={headingId}>
      <div className="release-card">
        <figure className="release-art">
          <img src={release.artwork.src} alt={release.artwork.alt} />
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
          <iframe
            style={{ borderRadius: "12px" }}
            src={release.spotifyEmbedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${release.title} by Etiquette on Spotify`}
          />
        </div>
      </div>
    </section>
  );
}
