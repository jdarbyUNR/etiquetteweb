const platformIcons = {
  spotify: "/brand-icons/spotify.svg",
  "apple-music": "/brand-icons/apple-music.svg",
  bandcamp: "/brand-icons/bandcamp.png",
  soundcloud: "/brand-icons/soundcloud.png",
  youtube: "/brand-icons/youtube.png",
  instagram: "/brand-icons/instagram.webp"
};

export function PlatformIcon({ platform }) {
  const src = platformIcons[platform];

  if (!src) {
    return null;
  }

  return <img className="platform-icon" src={src} alt="" aria-hidden="true" />;
}
