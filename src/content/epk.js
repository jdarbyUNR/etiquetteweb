import { getReleaseBySlug } from "./releases";
import { liveVideo } from "./site";

// Verified contact and video choice supplied by the band. See CONTENT.md for updates.
export const bookingEmail = "jacobdarby96@gmail.com";
export const bookingUrl = `mailto:${bookingEmail}?subject=Etiquette%20booking%20inquiry`;

export const epkVideo = {
  ...liveVideo,
  title: "What a Day!",
  embedTitle: "Etiquette — What a Day! (Live)",
  watchUrl: "https://www.youtube.com/watch?v=AyHA30AxHL8",
  poster: "https://i.ytimg.com/vi/AyHA30AxHL8/hqdefault.jpg"
};

export const epkTracks = ["between-us-girls", "scratching-at-the-walls"]
  .map((slug) => getReleaseBySlug(slug))
  .sort((a, b) => Number(b.featured) - Number(a.featured));

// Album and player verified through the official Bandcamp page's Share / Embed dialog.
export const epkDebut = {
  title: "What a Day!",
  releaseDate: "2026-01-02",
  url: "https://etiquettereno.bandcamp.com/album/what-a-day",
  embedUrl: "https://bandcamp.com/EmbeddedPlayer/album=2848918171/size=large/bgcol=eeece4/linkcol=ab291d/artwork=small/transparent=true/"
};

export const epkBio = "Etiquette is an independent art-rock band from Reno, Nevada, combining dynamic guitars, baritone vocals, funk-influenced bass, and punk energy. Their debut EP, What a Day!, arrived in January 2026.";

export const pressQuotes = [
  {
    quote: "a stellar example of tuneful but edgy modern rock",
    author: "Mark Earnest",
    publication: "Reno News & Review",
    context: "On the What a Day! EP",
    url: "https://renonr.com/2026/01/23/music-notes-heavy-parties-in-the-desert-new-tracks-from-local-acts-and-more/"
  },
  {
    quote: "Soaring guitar riffs follow Jacob’s words and syncopated drums carry the song's raw emotion.",
    author: "Tommylee Spurger",
    publication: "Biggest Little Bands",
    context: "On the title track, “What a Day!”",
    url: "https://www.biggestlittlebands.org/post/the-art-of-integrity-reno-s-etiquette-strips-away-labels-to-find-their-voice"
  }
];

// Originals are served only as downloads; the page reuses optimized site photographs.
export const pressPhotos = [
  {
    src: "/web-images/hero.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-01.jpg",
    title: "Band and audience — landscape",
    alt: "Audience members reach toward Etiquette’s vocalist, with the guitarist at stage right",
    width: 7008, height: 4672, size: "14.7 MB",
    photographer: "Trevor Castillo"
  },
  {
    src: "/web-images/live-1.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-02.jpg",
    title: "View from the stage — landscape",
    alt: "Etiquette’s vocalist and guitarist onstage facing a packed room",
    width: 4608, height: 3072, size: "7.6 MB",
    photographer: "Trevor Castillo"
  },
  {
    src: "/web-images/live-3.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-03.jpg",
    title: "Guitarist — portrait",
    alt: "Etiquette’s guitarist in a white shirt playing against a dark stage",
    width: 3393, height: 5090, size: "1.8 MB",
    photographer: "Trevor Castillo"
  },
  {
    src: "/web-images/epk-guitars.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-04.jpg",
    title: "Guitarists onstage — landscape",
    alt: "Two Etiquette guitarists face one another while playing in a low-ceilinged room",
    width: 7008, height: 4672, size: "17.4 MB",
    photographer: "Trevor Castillo"
  },
  {
    src: "/web-images/epk-live-kick.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-05.jpg",
    title: "Full band in motion — portrait",
    alt: "Etiquette’s guitarist kicks toward the camera as the band plays behind him",
    width: 4672, height: 7008, size: "15.3 MB",
    photographer: "Trevor Castillo"
  },
  {
    src: "/web-images/live-4.jpg",
    download: "/press-assets/etiquette-live-trevor-castillo-06.jpg",
    title: "Stage portrait — portrait",
    alt: "An Etiquette performer crouches at the edge of the stage with his hands in his hair",
    width: 4672, height: 7008, size: "16.1 MB",
    photographer: "Trevor Castillo"
  }
];

// Add only band-approved files. Empty optional sections do not render.
export const pressLogo = null; // { url, label, format }
export const technicalResources = []; // { url, label, format }
