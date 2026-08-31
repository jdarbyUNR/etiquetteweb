# Updating site content

## Changing the featured release

Release records live in `src/content/releases.js`. To feature the next single:

1. Add a complete release object with a unique `id` and `slug`, verified dates, artwork, listening URLs, Spotify embed URL, platform URLs, and tracking platform.
2. Set the new record's `featured` field to `true` and set every other record to `false`. The site fails loudly during rendering if zero or multiple releases are featured.
3. Update the static title, description, Open Graph title, description, image, and image alt text in the root `index.html`. These tags remain static so social crawlers receive them without running React.
4. If the dedicated advertising landing page changes, add or update its HTML entry, Vite input, and page component rather than redirecting the existing `/scratching-at-the-walls/` URL.
5. Run `pnpm build` and verify `/`, the dedicated release URL, and `/press/` before deployment.

The homepage and press page both read the explicitly featured record. The Scratching at the Walls advertising page reads that release by slug so it remains stable after a future single becomes featured.

## Connecting Correspondence

The homepage form is connected to EmailOctopus through the public form configuration in `src/content/mailingList.js`. The form currently uses EmailOctopus form ID `a6f12ace-a4f9-11f1-b15b-c716a93f1566` and collects a required email address plus an optional city. Its generated honeypot and invisible reCAPTCHA remain enabled.

If the form is recreated in EmailOctopus, update both `formId` and `scriptUrl` in that file, then confirm the provider still emits `emailoctopus:form.success`. The component adds the site's labels, styling, loading behavior, focus handling, and privacy copy after EmailOctopus renders its generated form.

`MailingListSignup` is sent to the existing Meta Pixel only after EmailOctopus emits its provider-confirmed success event. The handler checks only the public form ID and sends the source name; it never reads or forwards the event's contact details, email address, city, list ID, or other personal information.
