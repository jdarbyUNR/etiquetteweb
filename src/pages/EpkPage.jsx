import { useState } from "react";
import { PlatformIcon } from "../components/PlatformIcon";
import { SiteFooter } from "../components/SiteFooter";
import { bookingEmail, bookingUrl, epkBio, epkDebut, epkTracks, epkVideo, pressPhotos, pressQuotes, pressLogo, technicalResources } from "../content/epk";

function BookingLink({ children = bookingEmail, className = "epk-booking-email" }) {
  return <a className={className} href={bookingUrl}>{children}<span aria-hidden="true">↗</span></a>;
}

function LivePerformance() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="epk-video-frame">
      {loaded ? (
        <iframe
          src={epkVideo.embedUrl}
          title={epkVideo.embedTitle}
          ref={(frame) => frame?.focus()}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="epk-video-load" onClick={() => setLoaded(true)} aria-label={`Load ${epkVideo.embedTitle} video player`}>
          <img src={epkVideo.poster} alt="" width="480" height="360" loading="lazy" />
          <span className="epk-video-control"><span className="epk-play" aria-hidden="true">▶</span><span>Load live video <small>“{epkVideo.title}” · YouTube</small></span></span>
        </button>
      )}
    </div>
  );
}

function TrackPlayer({ track }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="epk-track-player">
      {loaded ? (
        <iframe
          src={track.spotifyEmbedUrl}
          title={`${track.title} by Etiquette on Spotify`}
          width="100%"
          height="152"
          ref={(frame) => frame?.focus()}
          allow="encrypted-media; fullscreen; picture-in-picture"
        />
      ) : (
        <button className="epk-player-load" onClick={() => setLoaded(true)} aria-label={`Load Spotify player for ${track.title}`}>
          <span aria-hidden="true">▶</span> Listen here <span className="epk-player-provider">Spotify player</span>
        </button>
      )}
    </div>
  );
}

export function EpkPage() {
  return (
    <>
      <a className="epk-skip" href="#epk-main">Skip to press kit</a>
      <div className="epk-shell">
        <main id="epk-main" tabIndex={-1}>
          <section className="epk-intro" aria-labelledby="epk-title">
            <div className="epk-hero-visual">
              <picture>
                <source media="(max-width: 699px)" srcSet="/web-images/live-2.jpg" />
                <img className="epk-hero-image" src="/web-images/hero.jpg" alt="Etiquette performing live, photographed from the front of the stage" width="1600" height="1067" fetchPriority="high" />
              </picture>
              <div className="epk-hero-overlay">
                <header className="epk-topbar">
                  <a href="/" aria-label="Etiquette home">Main site <span aria-hidden="true">↗</span></a>
                  <p>Electronic press kit</p>
                  <nav className="epk-nav" aria-label="Press kit sections">
                    <a href="#live">Live</a><a href="#music">Music</a><a href="#bio">Bio</a><a href="#press">Press</a><a href="#photos">Photos</a>
                    {technicalResources.length > 0 && <a href="#technical">Technical</a>}
                    <a href="#booking">Booking</a>
                  </nav>
                </header>
                <h1 id="epk-title">Etiquette</h1>
              </div>
              <p className="epk-hero-credit">Photography: Trevor Castillo</p>
            </div>
            <div className="epk-identity-rail">
              <div><p className="epk-kicker">Reno, Nevada</p><p className="epk-identity">Indie / art rock</p></div>
              <p className="epk-sound">Dynamic guitars and expressive baritone vocals, with funk-influenced bass and punk energy.</p>
              <div className="epk-hero-actions">
                <a className="epk-watch" href="#live"><span aria-hidden="true">▶</span>Watch “What a Day!” live<span aria-hidden="true">↓</span></a>
                <BookingLink className="epk-hero-booking"><span className="epk-booking-label">Booking</span><span>{bookingEmail}</span></BookingLink>
              </div>
            </div>
          </section>

          <div className="epk-content">
          <section className="epk-live epk-section" id="live" aria-labelledby="epk-live-title">
            <div className="epk-live-copy">
              <h2 id="epk-live-title">Live performance</h2>
              <p className="epk-live-song">“{epkVideo.title}”</p>
              <p>Full-song live performance.</p>
              <a className="epk-text-link" href={epkVideo.watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
            </div>
            <LivePerformance />
          </section>

          <section className="epk-section" id="music" aria-labelledby="epk-music-title">
            <div className="epk-section-heading"><h2 id="epk-music-title">Selected music</h2></div>
            <div className="epk-tracks">
              {epkTracks.map((track) => (
                <article className="epk-track" key={track.id}>
                  <div className="epk-track-summary">
                    <img src={track.artwork.src} alt={track.artwork.alt} width="1600" height="1600" loading="lazy" />
                    <div>
                      <p className="epk-kicker">{track.featured ? "Current single" : "Single"}{track.releaseDate && ` · ${new Date(`${track.releaseDate}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}`}</p>
                      <h3>{track.title}</h3>
                    </div>
                  </div>
                  <TrackPlayer track={track} />
                  <div className="epk-track-links" aria-label={`Listen to ${track.title}`}>
                      <a className="epk-text-link stream-link" href={track.platforms.spotify} target="_blank" rel="noopener noreferrer" data-platform="spotify" data-song={track.title} aria-label={`Listen to ${track.title} on Spotify`}><PlatformIcon platform="spotify" />Spotify <span aria-hidden="true">↗</span></a>
                      <a className="epk-text-link stream-link" href={track.platforms.appleMusic} target="_blank" rel="noopener noreferrer" data-platform="apple-music" data-song={track.title} aria-label={`Listen to ${track.title} on Apple Music`}><PlatformIcon platform="apple-music" />Apple Music <span aria-hidden="true">↗</span></a>
                  </div>
                </article>
              ))}
            </div>
            <article className="epk-debut" aria-labelledby="epk-debut-title">
              <div>
                <p className="epk-kicker">Debut EP · <time dateTime={epkDebut.releaseDate}>January 2, 2026</time></p>
                <h3 id="epk-debut-title">{epkDebut.title}</h3>
                <a className="epk-text-link stream-link" href={epkDebut.url} target="_blank" rel="noopener noreferrer" data-platform="bandcamp" data-song={epkDebut.title}>Listen on Bandcamp <span aria-hidden="true">↗</span></a>
              </div>
              <iframe className="epk-album-player" src={epkDebut.embedUrl} title={`${epkDebut.title} — Etiquette’s five-track debut EP on Bandcamp`} width="100%" height="307" loading="lazy" />
            </article>
          </section>

          <section className="epk-section epk-bio" id="bio" aria-labelledby="epk-bio-title">
            <div className="epk-section-heading"><h2 id="epk-bio-title">Biography</h2><a className="epk-text-link" href={`data:text/plain;charset=utf-8,${encodeURIComponent(epkBio + "\n")}`} download="Etiquette-bio.txt">Download bio (.txt) <span aria-hidden="true">↓</span></a></div>
            <div className="epk-bio-copy">
              <p>{epkBio}</p>
            </div>
          </section>

          <section className="epk-section" id="press" aria-labelledby="epk-press-title">
            <div className="epk-section-heading"><h2 id="epk-press-title">In the press</h2></div>
            <div className="epk-quotes">
              {pressQuotes.map((item) => (
                <figure className="epk-quote" key={item.url}>
                  <blockquote cite={item.url}><p>“{item.quote}”</p></blockquote>
                  <figcaption>
                    <a className="epk-text-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.publication} <span aria-hidden="true">↗</span></a>
                    <span>{item.author} · {item.context}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="epk-section" id="photos" aria-labelledby="epk-photos-title">
            <div className="epk-section-heading"><h2 id="epk-photos-title">Press photos</h2></div>
            <p className="epk-photo-note">Full-resolution JPEGs. Please credit Trevor Castillo.</p>
            <div className="epk-photo-grid">
              {pressPhotos.map((photo, index) => (
                <figure className="epk-photo" key={photo.download}>
                  <a href={photo.download} download aria-label={`Download press photo ${index + 1}: ${photo.title}, by ${photo.photographer}`}><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" /></a>
                  <figcaption>
                    <a className="epk-text-link" href={photo.download} download>Download photo {index + 1} <span aria-hidden="true">↓</span></a>
                    <span className="epk-file-detail">{photo.width} × {photo.height} · JPG · {photo.size}</span>
                    <span className="epk-file-detail">Photo: {photo.photographer}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            {pressLogo && <a className="epk-text-link" href={pressLogo.url} download>{pressLogo.label} ({pressLogo.format}) <span aria-hidden="true">↓</span></a>}
          </section>

          {technicalResources.length > 0 && (
            <section className="epk-section" id="technical" aria-labelledby="epk-technical-title">
              <h2 id="epk-technical-title">Technical resources</h2>
              {technicalResources.map((resource) => <a className="epk-text-link" href={resource.url} download key={resource.url}>{resource.label} ({resource.format}) <span aria-hidden="true">↓</span></a>)}
            </section>
          )}

          <section className="epk-section epk-booking" id="booking" aria-labelledby="epk-booking-title">
            <div><h2 id="epk-booking-title">Booking &amp; press</h2></div>
            <div><BookingLink className="epk-booking-email">{bookingEmail}</BookingLink></div>
          </section>
          </div>
        </main>
        <div className="epk-footer epk-content"><a href="/">← Back to Etiquette</a><p>Reno, Nevada</p><SiteFooter /></div>
      </div>
    </>
  );
}
