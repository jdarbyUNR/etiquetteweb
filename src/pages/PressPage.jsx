import { DeferredEmbed } from "../components/DeferredEmbed";
import { FeaturedRelease } from "../components/FeaturedRelease";
import { PhotoGallery } from "../components/PhotoGallery";
import { SiteFooter } from "../components/SiteFooter";
import { getFeaturedRelease } from "../content/releases";
import { livePhotos, liveVideo, platformLinks } from "../content/site";

const featuredRelease = getFeaturedRelease();
const instagramUrl = platformLinks.find(({ platform }) => platform === "instagram")?.url;

export function PressPage() {
  return (
    <div className="press-shell">
      <main className="press-landing">
        <header className="section press-header">
          <p className="eyebrow">Press</p>
          <h1>Etiquette</h1>
          <p className="press-identity">Reno art rock / post-punk</p>
          <p className="press-bio">Etiquette is a Reno art rock and post-punk band.</p>
        </header>

        <FeaturedRelease release={featuredRelease} headingId="press-featured-release-title" />

        <section className="section section-video" aria-labelledby="press-live-title">
          <div className="video-heading">
            <h2 id="press-live-title">Live</h2>
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

        <section className="section press-photos" aria-labelledby="press-photos-title">
          <h2 id="press-photos-title">Press photos</h2>
          <PhotoGallery photos={livePhotos} label="Etiquette press-photo gallery" variant="press" />
        </section>

        <section className="section press-contact" aria-labelledby="press-contact-title">
          <p className="eyebrow">Booking / contact</p>
          <h2 id="press-contact-title">Instagram</h2>
          <a className="cta-button" href={instagramUrl} target="_blank" rel="noreferrer">
            Contact Etiquette
          </a>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
