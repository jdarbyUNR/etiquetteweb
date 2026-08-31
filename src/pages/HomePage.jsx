import { CorrespondenceForm } from "../components/CorrespondenceForm";
import { FeaturedRelease } from "../components/FeaturedRelease";
import { PlatformIcon } from "../components/PlatformIcon";
import { PhotoGallery } from "../components/PhotoGallery";
import { SiteFooter } from "../components/SiteFooter";
import { getFeaturedRelease } from "../content/releases";
import { livePhotos, liveVideo, platformLinks } from "../content/site";

const featuredRelease = getFeaturedRelease();

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

        <section className="section section-links" aria-label="Music and social links">
          <div className="icon-links" aria-label="Music and social links">
            {platformLinks.map(({ platform, label, url }) => (
              <a
                className={`icon-link icon-link-${platform}`}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                key={platform}
              >
                <PlatformIcon platform={platform} />
              </a>
            ))}
          </div>
        </section>

        <FeaturedRelease release={featuredRelease} />

        <CorrespondenceForm />

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
          <PhotoGallery photos={livePhotos} label="Etiquette live photographs" />
        </section>

        <SiteFooter includePress />
      </main>
    </div>
  );
}
