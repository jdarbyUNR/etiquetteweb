# Updating site content

## Electronic press kit

`/epk/` is a separate React/Vite entry, linked from the homepage footer. Vite also redirects `/epk` to `/epk/` locally, preserving query parameters, to match the static host's directory handling. Existing `/press/` and release pages remain available. Layout and styles live in `src/pages/EpkPage.jsx` and `src/styles/epk.css`; editable contact, biography, video, photo downloads, and optional resources live in `src/content/epk.js`.

- Booking email `jacobdarby96@gmail.com` and the choice of **What a Day! (Live)** (`AyHA30AxHL8`) were confirmed by the band for this EPK on October 13, 2026. YouTube oEmbed confirms the video title and official Etiquette channel. The EPK uses the existing live-video embed URL. If replacing this video, keep its embed, watch URL, title, and poster together in sync.
- The two selected studio tracks reuse `src/content/releases.js`, including dates where verified, the original tracking attributes, and URL parameters. The featured selection sorts first. The current records feature **between us girls**; this is newer than the release context in AGENTS.md. The song descriptions were removed at the band's request. Review the selected slugs, biography, and static metadata in `epk/index.html` when releases change.
- The three-paragraph bio was supplied by the band on October 23, 2026, including the lineup, performance history, and **Boléro**, due spring 2027. Its plain-text download is derived directly from `epkBio`, so it stays in sync. Paragraphs are separated by blank lines in that string.
- `epkDebut` embeds all five tracks of **What a Day!** below the singles. The album ID `2848918171` and player layout were verified through Share / Embed on the [official Bandcamp album](https://etiquettereno.bandcamp.com/album/what-a-day); that page confirms January 2, 2026. Its iframe loads lazily and never requests autoplay. The direct Bandcamp link uses the existing streaming-click helper.
- `pressQuotes` holds brief verbatim excerpts, author/publication attribution, context, and source links. Mark Earnest's [Reno News & Review review](https://renonr.com/2026/01/23/music-notes-heavy-parties-in-the-desert-new-tracks-from-local-acts-and-more/) describes the debut EP; Tommylee Spurger's [Biggest Little Bands interview/profile](https://www.biggestlittlebands.org/post/the-art-of-integrity-reno-s-etiquette-strips-away-labels-to-find-their-voice) describes its title track. Both excerpts are the writers' narration, not band self-quotes. Sources verified October 19, 2026. Preserve the exact wording and context when editing.
- YouTube and Spotify players load only after their keyboard-accessible buttons are activated and never request autoplay. The YouTube poster loads lazily. Direct Spotify and Apple Music links remain available and retain existing click tracking.
- The six downloadable originals in `public/press-assets/` are unchanged copies of `DSC08723.jpg`, `DSC08412.jpg`, `DSC08751.jpg`, `DSC03136.jpg`, `DSC08891.jpg`, and `DSC09001.jpg` from `etiquette - Trevor Castillo Photography/`, in that order. Their previews are `hero.jpg`, `live-1.jpg`, `live-3.jpg`, `epk-guitars.jpg`, `epk-live-kick.jpg`, and `live-4.jpg`. The two new previews are uncropped 1600px-long-edge JPEGs (about 643 KB combined); original files are only fetched when downloaded. Keep full dimensions and Trevor Castillo credits with every file. The compact gallery crops previews only, with the complete originals retained for downloads. Trevor Castillo is credited above the gallery and in each image link’s accessible label.
- No approved logo, stage plot, or input list was present. `pressLogo: null` and an empty `technicalResources` array keep those optional downloads hidden. Add verified files under `public/press-assets/`, then supply their URL, label, and format in the content module.
- The shared Meta Pixel and streaming-click scripts are included once, following existing page conventions. Booking uses a native `mailto:` link; it does not send a message on the visitor’s behalf.

The editorial pass uses plain section names, early contact/navigation, and reusable material. Organization references: [Blush](https://www.whereisblush.com/epk) for a compact intro/contact area, [Slow Caves](https://www.slowcaves.com/epk-x0yq9) for clear material labels and bio downloads, and [INDAL](https://www.indalband.com/en/epk) for early band facts/contact and live footage. Their wording, credentials, and release schedules are not sources for Etiquette’s content. Keep visual identity in the typography, palette, and photographs rather than self-authored promotional quotes.

The opening is an edge-to-edge performance photograph with the Arial Black wordmark set over its dark upper area. The responsive `<picture>` uses the existing `hero.jpg` on desktop and the low-angle `live-2.jpg` portrait below 700px; both are Trevor Castillo photographs already used by the site. Keep performers’ faces clear of the wordmark when adjusting crops. The solid strip immediately beneath the photograph identifies the genre and location and contains live-video and booking links. This uses optimized images only, with no added hero assets or autoplay.

The EPK has two authored typefaces: Arial Black for uppercase display text, and self-hosted EB Garamond for all supporting text and controls. EB Garamond follows the Garamond direction of the requested Advercase reference; provenance and its open license are in `public/fonts/README.md`. Provider-owned embedded players keep their own typography. Keep display text uppercase via CSS without changing release titles in data or tracking events. Live footage and press quotes share a desktop column beside the singles and EP. Mobile reading and keyboard order is live, music, press, biography, and photos. Sections use 20px desktop / 16px mobile padding. The full bio uses three columns on desktop and stacked paragraphs on mobile. Keep headings above content rather than reserving empty label columns.

Preview with `pnpm dev --host 127.0.0.1` and open the printed URL at `/epk/`. Run `pnpm build`, then `pnpm preview --host 127.0.0.1` for a production preview. Node must meet `package.json` requirements (the deployment uses Node 24.19.0). Check desktop and 390px layouts, keyboard navigation, video loading, streaming tracking, and original JPEG downloads before publishing.

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

The page uses `src/renderBetweenUsGirls.js`, `src/styles/between-us-girls.css`, and the static social metadata in `between-us-girls/index.html`. Vite renders the content marker into complete HTML from the release record in both development and production. All listening links work without JavaScript; there is no React bundle or web font on this page. Listening links open the platform's HTTPS URL in a new tab, matching the Scratching at the Walls landing page. Its 1200px cover is the single's artwork from the supplied Apple Music page, hosted locally as `public/web-images/between-us-girls.jpg`, with a 600px WebP for smaller screens. Keep the visible title, links, artwork, and static social metadata in sync.

The YouTube Music destination was verified against the supplied video's ID (`v4zC-gYDa9M`); its title and artist match. The supplied share parameters are retained. Each listening button uses the existing `.stream-link` helper and `StreamingClick` event with the song title and platform (`spotify`, `apple-music`, or `youtube-music`). The existing Meta Pixel script runs once per page. Incoming ad query parameters remain on the landing URL for Meta attribution; there is no redirect that strips them.

Both release pages use native new-tab links with `target="_blank"` and `rel="noreferrer"`. The shared tracking helper sends the same `StreamingClick` event without delaying navigation. The original page remains open while the event sends; browser privacy settings can still block tracking.

Run `pnpm build`, then `pnpm preview` and open `/between-us-girls/`. Check 390px mobile and desktop layouts and the three service links before publishing. Publishing remains a separate step.

## Connecting Correspondence

The homepage form is connected to EmailOctopus through the public form configuration in `src/content/mailingList.js`. The form currently uses EmailOctopus form ID `a6f12ace-a4f9-11f1-b15b-c716a93f1566` and collects a required email address plus an optional city. Its generated honeypot and invisible reCAPTCHA remain enabled.

If the form is recreated in EmailOctopus, update both `formId` and `scriptUrl` in that file, then confirm the provider still emits `emailoctopus:form.success`. The component adds the site's labels, styling, loading behavior, focus handling, and privacy copy after EmailOctopus renders its generated form.

`MailingListSignup` is sent to the existing Meta Pixel only after EmailOctopus emits its provider-confirmed success event. The handler checks only the public form ID and sends the source name; it never reads or forwards the event's contact details, email address, city, list ID, or other personal information.
