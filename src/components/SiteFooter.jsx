export function SiteFooter({ includePress = false }) {
  return (
    <footer className="privacy-note">
      {includePress && <a className="privacy-link" href="/press/">Press</a>}
      {includePress && <a className="privacy-link" href="/epk/">Electronic press kit</a>}
      <a className="privacy-link" href="/privacy/">Privacy &amp; ad choices</a>
    </footer>
  );
}
