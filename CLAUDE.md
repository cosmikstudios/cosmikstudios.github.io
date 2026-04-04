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
support.html                Support & FAQ
privacy-policy.html         Privacy policy
terms-of-service.html       Terms of service
css/style.css               Single stylesheet (shared base + per-game themes)
images/                     Darkest Exiles assets (screenshots, icons, logo)
images/donor-zero/          Donor Zero assets (PNG + WebP pairs)
sitemap.xml                 SEO sitemap
robots.txt                  Crawl rules
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
- **Game repo:** C:\Users\Administrator\Projects\alien-corpse-seller
- **Platform:** PC (in development, Godot 4.6)
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
- **YouTube:** https://www.youtube.com/@UnkimTV

Social icons in the nav use branded colors: Discord blurple (#5865F2), X white (#F0F0F0). Applied via `.social-discord` and `.social-x` classes.

## Analytics

Cloudflare Web Analytics on every page:
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "5ee825d37378440a88eb9ae3743e1fb7"}'></script>
```

## Writing style

- No emdashes. Use periods, commas, or rewrite the sentence.
- Keep copy concise and direct. Avoid filler or marketing fluff.
- The studio is described as a part-time hobby operation, not a company.

## Navigation pattern

All pages share the same header nav: `Darkest Exiles | Donor Zero | Support | [Discord icon] [X icon]`

Legal pages (Privacy, Terms) are footer-only links.

## Image optimization

All images have WebP versions alongside PNGs. Use `<picture>` elements with WebP source and PNG fallback. Lazy load with `loading="lazy"` on below-fold images.
