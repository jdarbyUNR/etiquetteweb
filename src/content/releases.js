import { responsiveSources } from "./media";

export const releases = [
  {
    id: "scratching-at-the-walls",
    slug: "scratching-at-the-walls",
    title: "Scratching at the Walls",
    releaseDate: "2026-08-21",
    displayCopy: "New single — out now",
    artwork: {
      src: "/web-images/scratching-at-the-walls.jpg",
      alt: "Scratching at the Walls single artwork by Etiquette",
      width: 1600,
      height: 1600,
      sources: responsiveSources("scratching-at-the-walls", [480, 800, 1200])
    },
    primaryListeningUrl: "https://distrokid.com/hyperfollow/etiquette2/scratching-at-the-walls?ref=release",
    primaryCtaLabel: "Listen to “Scratching at the Walls”",
    primaryTrackingPlatform: "hyperfollow",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2jTTsXaaqBG3bPp6gXh2ul?utm_source=generator",
    platforms: {
      spotify: "https://open.spotify.com/track/2jTTsXaaqBG3bPp6gXh2ul?si=77a223ac19b440ea",
      appleMusic: "https://music.apple.com/us/song/scratching-at-the-walls/6796590083"
    },
    featured: true
  }
];

export function getFeaturedRelease() {
  const featuredReleases = releases.filter((release) => release.featured);

  if (featuredReleases.length !== 1) {
    throw new Error(`Expected exactly one featured release, found ${featuredReleases.length}.`);
  }

  return featuredReleases[0];
}

export function getReleaseBySlug(slug) {
  const release = releases.find((candidate) => candidate.slug === slug);

  if (!release) {
    throw new Error(`Release not found: ${slug}`);
  }

  return release;
}
