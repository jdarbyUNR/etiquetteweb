export function PlatformIcon({ platform }) {
  switch (platform) {
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <circle cx="12" cy="12" r="12" fill="currentColor" />
          <path d="M6 9.2c4-1.2 8.3-.9 12 1" fill="none" stroke="#050505" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M7.1 12.2c3.1-.8 6.3-.5 9 .8" fill="none" stroke="#050505" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.2 15c2.2-.5 4.2-.3 6 .5" fill="none" stroke="#050505" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "apple-music":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M16.6 12.6V5.7l-6.2 1.2v9.1a2.6 2.6 0 1 1-1.4-2.3V7.9l9-1.7v7.6a2.6 2.6 0 1 1-1.4-1.2z" fill="currentColor" />
        </svg>
      );
    case "bandcamp":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M6 18 11 6h7l-5 12z" fill="currentColor" />
        </svg>
      );
    case "soundcloud":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M8.2 17.5h9.3a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6-1.6A2.9 2.9 0 0 0 8.2 17.5Z" fill="currentColor" />
          <rect x="4.2" y="10.5" width="1.2" height="7" fill="currentColor" />
          <rect x="6" y="9.5" width="1.2" height="8" fill="currentColor" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M21 12c0 3.5-.4 5.4-1 6.1-.6.6-1.8.9-8 .9s-7.4-.3-8-.9C3.4 17.4 3 15.5 3 12s.4-5.4 1-6.1C4.6 5.3 5.8 5 12 5s7.4.3 8 .9c.6.7 1 2.6 1 6.1Z" fill="currentColor" />
          <path d="m10 8.7 5.2 3.3L10 15.3Z" fill="#050505" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16.8" cy="7.3" r="1.1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
