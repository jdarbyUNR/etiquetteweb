export function PrivacyPage() {
  return (
    <main className="privacy-shell">
      <article className="privacy-card">
        <p className="privacy-kicker">Etiquette</p>
        <h1>Privacy &amp; Ad Choices</h1>

        <section>
          <h2>Meta Pixel</h2>
          <p>
            This site uses the Meta Pixel, a technology provided by Meta, to measure page visits and streaming-link interactions, understand advertising performance, and help deliver relevant ads. Meta may use cookies or similar technologies and may combine this activity with information associated with Meta accounts.
          </p>
        </section>

        <section>
          <h2>Events We Measure</h2>
          <p>
            We send a PageView event when a tracked page loads. Clicking a featured streaming link sends a StreamingClick event containing the service name and song title. After a mailing-list provider confirms a signup, the site sends a MailingListSignup event containing only the signup source. Email addresses and cities are not included in Meta events.
          </p>
        </section>

        <section>
          <h2>Correspondence</h2>
          <p>
            If you join the mailing list, your email address and optional city are sent to the connected mailing-list provider so Etiquette can deliver release and show updates. The provider connection must be configured before the form accepts subscriptions.
          </p>
        </section>

        <section>
          <h2>Your Choices</h2>
          <p>
            You can learn how Meta handles information in the <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Meta Privacy Policy</a> and adjust personalized advertising in <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noreferrer">Meta Ad Preferences</a>. You can also use the <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer">Digital Advertising Alliance opt-out</a> or <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noreferrer">Your Online Choices</a>, and manage cookies through your browser settings.
          </p>
        </section>

        <a className="privacy-back" href="/">Back to Etiquette</a>
      </article>
    </main>
  );
}
