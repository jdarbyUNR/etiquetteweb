# Updating site content

## Changing the featured release

Release records live in `src/content/releases.js`. To feature the next single:

1. Add a complete release object with a unique `id` and `slug`, verified dates, artwork, listening URLs, Spotify embed URL, platform URLs, and tracking platform.
2. Set the new record's `featured` field to `true` and set every other record to `false`. The site fails loudly during rendering if zero or multiple releases are featured.
3. Update the static title, description, Open Graph title, description, image, and image alt text in the root `index.html`. These tags remain static so social crawlers receive them without running React.
4. Generate 480px, 800px, and high-resolution AVIF, WebP, and JPEG variants in `public/web-images/responsive`, then add their widths through `responsiveSources()` in the release record. Keep the original image as the social-preview and compatibility fallback.
5. If the dedicated advertising landing page changes, add or update its HTML entry, Vite input, and page component rather than redirecting the existing `/scratching-at-the-walls/` URL.
6. Run `pnpm build` and verify `/`, the dedicated release URL, and `/press/` before deployment.

The homepage and press page both read the explicitly featured record. The Scratching at the Walls advertising page reads that release by slug so it remains stable after a future single becomes featured.

## Connecting Correspondence

The homepage form requires a browser-safe mailing-list endpoint in `VITE_MAILING_LIST_ENDPOINT`. The endpoint must accept a cross-origin `POST` with `FormData` fields named `email`, `city`, `website`, and `source`, and return a successful HTTP status only after it persists the subscription. A JSON response may use `success: false` or `ok: false` plus a `message` when the provider rejects a signup.

For local development, place the value in an ignored `.env.local` file. For GitHub Pages, add a repository Actions variable named `VITE_MAILING_LIST_ENDPOINT` under **Settings → Secrets and variables → Actions → Variables**. The existing deployment workflow passes that public endpoint into the production build.

Do not place provider API keys in a `VITE_` variable; Vite exposes these values to visitors. If the provider requires a secret or different field names, adapt `src/services/mailingList.js` to its approved browser form endpoint or add a small server-side relay on infrastructure chosen by the site owner.

`MailingListSignup` is sent to the existing Meta Pixel only after the endpoint confirms success. The event contains the source name only; email and city are never sent to Meta.
