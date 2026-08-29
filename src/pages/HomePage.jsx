import { DeferredEmbed } from "../components/DeferredEmbed";
import { CorrespondenceForm } from "../components/CorrespondenceForm";
import { FeaturedRelease } from "../components/FeaturedRelease";
import { PlatformIcon } from "../components/PlatformIcon";
import { PhotoGallery } from "../components/PhotoGallery";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { SiteFooter } from "../components/SiteFooter";
import { getFeaturedRelease } from "../content/releases";
import { heroImage, livePhotos, liveVideo, platformLinks } from "../content/site";

const featuredRelease = getFeaturedRelease();

export function HomePage() {
  return (
    <div className="page-shell">
      <main className="landing">
        <section className="section section-hero">
          <figure className="hero-image">
            <ResponsiveImage
              image={heroImage}
              sizes="(min-width: 700px) 732px, calc(100vw - 42px)"
              fetchPriority="high"
              loading="eager"
            />
          </figure>

          <div className="top-intro">
            <h1>Etiquette</h1>
            <p className="lede">RENO<br />ART ROCK<br />POST-PUNK</p>
          </div>
        </section>

        <FeaturedRelease release={featuredRelease} />

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

        <CorrespondenceForm />

        <section className="section section-video">
          <div className="video-heading">
            <p className="eyebrow">Live</p>
          </div>
          <div className="video-frame">
            <DeferredEmbed
              src={liveVideo.embedUrl}
              title={liveVideo.title}
              service="YouTube"
              actionLabel="Load live video"
              description="Loads YouTube’s player on request."
              variant="video"
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
