# Cosmik Studios Website

## What this is

Static website for Cosmik Studios (cosmikstudios.dev), hosted on GitHub Pages. Pure HTML/CSS/JS, no frameworks or build tools.

**Owner:** Mário Cosme (solo dev, part-time/hobby alongside a full-time job)
**Domain:** www.cosmikstudios.dev
**Repo:** cosmikstudios/cosmikstudios.github.io

## Site structure

```
index.html                  Studio homepage (game showcase, about, community)
darkest-exiles.html         Darkest Exiles dedicated page
donor-zero.html             Donor Zero dedicated page
support.html                Support & FAQ (Darkest Exiles focused; linked from the App Store listing)
press.html                  Press kit (placeholder, noindex until content is ready)
404.html                    Custom 404 page (uses absolute paths so it works at any URL)
privacy-policy.html         Privacy policy
terms-of-service.html       Terms of service
css/style.css               Single stylesheet (shared base + per-game themes)
js/site.js                  Shared JS: mobile nav, scroll reveal, lightbox (all pages)
images/                     Darkest Exiles assets (screenshots, icons, logo)
images/donor-zero/          Donor Zero art by Marian (PNG + WebP pairs, sourced from the game repo)
images/og/                  1200x630 social share cards (og-studio, og-darkest-exiles, og-donor-zero)
sitemap.xml                 SEO sitemap
robots.txt                  Crawl rules
llms.txt                    Site summary for AI agents
CNAME                       Custom domain config
```

## Games

### Darkest Exiles
- **Game repo:** C:\Users\Administrator\Projects\darkest-exiles
- **Platform:** iOS (released)
- **App Store:** https://apps.apple.com/us/app/darkest-exiles/id6758465585
- **Aesthetic:** Dark fantasy, gold/brass palette, Cinzel serif font
- **CSS theme class:** `body.page-darkest-exiles`
- **Tagline:** "You don't fight. You prepare them to."

### Donor Zero
- **Game repo:** C:\Users\Administrator\Projects\exhumation-protocol
- **Platform:** PC (in development, Godot 4.6)
- **Title is final** (no "working title" qualifiers anywhere)
- **Aesthetic:** 90s paranoia, desaturated greens/greys/rust, Special Elite + IBM Plex Mono fonts, CRT scanline effects
- **CSS theme class:** `body.page-donor-zero`
- **Tagline:** "Steal. Extract. Sell. Disappear."

## CSS architecture

Single `css/style.css` file with CSS variable overrides per game theme:
- `:root` defines the studio-neutral palette (muted gold, OLED dark)
- `body.page-darkest-exiles` overrides vars with gold/brass palette
- `body.page-donor-zero` overrides vars with desaturated green/grey palette
- Shared components (header, footer, buttons, cards, lightbox) work across all themes

## Social links

- **Discord:** https://discord.gg/4AS2ZUM2hf
- **X/Twitter (studio):** https://x.com/CosmikStudios
- **X/Twitter (Donor Zero):** https://x.com/DonorZero
- **Mastodon (Donor Zero):** https://mastodon.gamedev.place/@donorzero
- **Bluesky (Donor Zero):** https://bsky.app/profile/donorzero.bsky.social

Social icons in the nav use branded colors: Discord blurple (#5865F2), X white (#F0F0F0). Applied via `.social-discord` and `.social-x` classes.

Top nav social icons are reserved for Discord, X, itch.io, and Steam. Mastodon and Bluesky are Donor Zero accounts only (not studio-wide), so they appear only as Follow buttons in the Donor Zero page CTA, never in the nav or on the homepage.

## Analytics

Cloudflare Web Analytics on every page:
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "5ee825d37378440a88eb9ae3743e1fb7"}'></script>
```

## Writing style

- No emdashes. Use periods, commas, or rewrite the sentence.
- Never use the word "bureaucratic" (any form). Donor Zero is described as "a body-horror management sim".
- Keep copy concise and direct. Avoid filler or marketing fluff.
- The studio is described as a part-time hobby operation, not a company.

## Navigation pattern

All pages share the same header nav: `Darkest Exiles | Donor Zero | Support | [Discord icon] [X icon] [itch.io icon] [Steam icon]`

Press, Privacy, and Terms are footer-only links. Pages use canonical URLs with the `.html` extension; keep canonical, og:url, sitemap, and internal links consistent.

## Fonts and scripts

- Google Fonts load via `<link rel="preconnect">` + `<link rel="stylesheet">` in each page head (NOT `@import` in CSS). Base set on all pages: Cormorant Garamond, DM Sans, IBM Plex Mono. Darkest Exiles adds Cinzel; Donor Zero adds Special Elite.
- All interactive behavior lives in `js/site.js` (deferred). Each head also has a tiny inline `document.documentElement.classList.add('js')` snippet; reveal animations only hide content when `.js` is present, so the site works without JavaScript.

## Image optimization

All images have WebP versions alongside PNGs. Use `<picture>` elements with WebP source and PNG fallback. Lazy load with `loading="lazy"` on below-fold images.
