# Updating site content

## Changing the featured release

Release records live in `src/content/releases.js`. To feature the next single:

1. Add a complete release object with a unique `id` and `slug`, verified dates, artwork, listening URLs, Spotify embed URL, platform URLs, and tracking platform.
2. Set the new record's `featured` field to `true` and set every other record to `false`. The site fails loudly during rendering if zero or multiple releases are featured.
3. Update the static title, description, Open Graph title, description, image, and image alt text in the root `index.html`. These tags remain static so social crawlers receive them without running React.
4. If the dedicated advertising landing page changes, add or update its HTML entry, Vite input, and page component rather than redirecting the existing `/scratching-at-the-walls/` URL.
5. Run `pnpm build` and verify `/`, the dedicated release URL, and `/press/` before deployment.

The homepage and press page both read the explicitly featured record. The Scratching at the Walls advertising page reads that release by slug so it remains stable after a future single becomes featured.

## between us girls advertising page

The dedicated `/between-us-girls/` page reads its own record from `src/content/releases.js`. This record is also featured on the homepage and press page, with its current artwork, direct Spotify CTA, Spotify embed, and an “All listening options” link to the dedicated page. The root HTML social metadata matches this release. No unverified release date is displayed. Internal navigation to the listening page does not fire `StreamingClick`; that event is reserved for streaming destinations.

The page uses `src/renderBetweenUsGirls.js`, `src/styles/between-us-girls.css`, and the static social metadata in `between-us-girls/index.html`. Vite renders the content marker into complete HTML from the release record in both development and production. All listening links work without JavaScript; there is no React bundle or web font on this page. Links navigate in the same browsing context using the platform's HTTPS URL rather than opening a new tab. Its 1200px cover is the single's artwork from the supplied Apple Music page, hosted locally as `public/web-images/between-us-girls.jpg`, with a 600px WebP for smaller screens. Keep the visible title, links, artwork, and static social metadata in sync.

The YouTube Music destination was verified against the supplied video's ID (`v4zC-gYDa9M`); its title and artist match. The supplied share parameters are retained. Each listening button uses the existing `.stream-link` helper and `StreamingClick` event with the song title and platform (`spotify`, `apple-music`, or `youtube-music`). The existing Meta Pixel script runs once per page. Incoming ad query parameters remain on the landing URL for Meta attribution; there is no redirect that strips them.

The landing buttons opt into a 200ms same-tab handoff with `data-track-navigation="same-tab"` when Meta's library is loaded, to give its event request time to leave before navigation. It is best effort, not a delivery guarantee. With JavaScript or Meta blocked, navigation stays immediate; modified clicks keep native browser behavior. Other pages' new-tab links are unaffected.

Run `pnpm build`, then `pnpm preview` and open `/between-us-girls/`. Check 390px mobile and desktop layouts and the three service links before publishing. Publishing remains a separate step.

## Connecting Correspondence

The homepage form is connected to EmailOctopus through the public form configuration in `src/content/mailingList.js`. The form currently uses EmailOctopus form ID `a6f12ace-a4f9-11f1-b15b-c716a93f1566` and collects a required email address plus an optional city. Its generated honeypot and invisible reCAPTCHA remain enabled.

If the form is recreated in EmailOctopus, update both `formId` and `scriptUrl` in that file, then confirm the provider still emits `emailoctopus:form.success`. The component adds the site's labels, styling, loading behavior, focus handling, and privacy copy after EmailOctopus renders its generated form.

`MailingListSignup` is sent to the existing Meta Pixel only after EmailOctopus emits its provider-confirmed success event. The handler checks only the public form ID and sends the source name; it never reads or forwards the event's contact details, email address, city, list ID, or other personal information.
