# Session Log

## [2026-06-12] Commit/push, rebase, and streaming-policy alignment
Committed and pushed the audit work. Push initially 403'd (mariocosme lacks org write); after the user re-authed the cosmikstudios gh account, rebased onto a remote streaming-policy commit (resolved footer + SESSION_LOG conflicts, keeping both). Then brought streaming-policy.html in line with site conventions (shared head, page-studio theme, Steam icons, Press link, js/site.js) and added the Streaming footer link to press.html and 404.html.
Artifact: streaming-policy.html, press.html, 404.html, CLAUDE.md, all page footers

## [2026-06-12] Website audit, perf/SEO pass, Donor Zero asset + social updates
Audited the site and applied fixes: lightbox now serves WebP, fonts moved from @import to per-page <link>, shared js/site.js with a11y + reduced-motion, no-JS fallback, aligned canonical/.html URLs, 1200x630 OG cards, lighter favicon, added 404.html + press.html (placeholder) + llms.txt. Removed "bureaucratic" everywhere and the "working title" qualifier (Donor Zero title is final). Swapped Donor Zero AI art for Marian's basement/lab/pale assets. Added Mastodon + Bluesky as Donor Zero-only Follow buttons on the DZ page. Docs cleanup: CLAUDE.md repo path + sections, memory pruned.
Artifact: index.html, donor-zero.html, css/style.css, js/site.js, llms.txt, 404.html, press.html, images/donor-zero/*, images/og/*

## [2026-04-29] Donor Zero — Streaming permission policy page (TASK-61)
Created streaming-policy.html: Devolver-loose creator terms, themed fax-transmission header, original-audio DMCA-safe declaration, Supergiant-style anti-Content-ID dispute clause. Linked from all site footers and added to sitemap. Updated TASK-60 (press kit) to reference the policy URL. TASK-61 marked Done.
Artifact: streaming-policy.html, sitemap.xml, all 6 existing .html footers updated
