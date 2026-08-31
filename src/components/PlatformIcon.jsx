export function PlatformIcon({ platform }) {
  switch (platform) {
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="#1ed760" />
          <path d="M5.8 8.7c4.2-1.25 8.7-.92 12.5.98" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.9 12c3.35-.9 6.75-.58 9.55.83" fill="none" stroke="#121212" strokeWidth="1.85" strokeLinecap="round" />
          <path d="M8 15.1c2.35-.58 4.55-.35 6.5.62" fill="none" stroke="#121212" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "apple-music":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="apple-music-gradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fa57c1" />
              <stop offset="0.5" stopColor="#f6385b" />
              <stop offset="1" stopColor="#f72f4e" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="5.25" fill="url(#apple-music-gradient)" />
          <path d="M16.7 12.7V6.2l-6.4 1.25v8.4a2.45 2.45 0 1 1-1.35-2.18V8.4l9.1-1.78v7.22a2.45 2.45 0 1 1-1.35-1.14z" fill="#fff" />
        </svg>
      );
    case "bandcamp":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M4.4 17.6 9.65 6.4H19.6l-5.2 11.2z" fill="#1da0c3" />
        </svg>
      );
    case "soundcloud":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <rect width="24" height="24" rx="5.25" fill="#ff5500" />
          <path d="M3.2 12.2v2.1M4.45 11.35v3.8M5.7 10.6v5.25M6.95 9.65v6.45M8.2 9.05v7.05M9.45 8.7v7.4M10.7 8.25v7.85" fill="none" stroke="#121212" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M11.45 16.1h6.55a2.75 2.75 0 0 0 .2-5.48 4 4 0 0 0-6.75-1.78z" fill="#121212" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M22 12c0 3.7-.4 5.7-1.1 6.4-.65.65-1.95.95-8.9.95s-8.25-.3-8.9-.95C2.4 17.7 2 15.7 2 12s.4-5.7 1.1-6.4c.65-.65 1.95-.95 8.9-.95s8.25.3 8.9.95c.7.7 1.1 2.7 1.1 6.4Z" fill="#ff0033" />
          <path d="m10 8.4 5.65 3.6L10 15.6Z" fill="#fff" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <defs>
            <radialGradient id="instagram-gradient" cx="0" cy="0" r="1" gradientTransform="translate(5 22) rotate(-49) scale(27)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffd600" />
              <stop offset="0.38" stopColor="#ff7a00" />
              <stop offset="0.68" stopColor="#ff0169" />
              <stop offset="1" stopColor="#d300c5" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="5.25" fill="url(#instagram-gradient)" />
          <rect x="5.25" y="5.25" width="13.5" height="13.5" rx="3.8" fill="none" stroke="#fff" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="3.25" fill="none" stroke="#fff" strokeWidth="1.75" />
          <circle cx="16.65" cy="7.45" r="1.05" fill="#fff" />
        </svg>
      );
    default:
      return null;
  }
}
