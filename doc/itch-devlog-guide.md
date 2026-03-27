# itch.io Devlog Guide -- The Exhumation Protocol

## Strategy

We use itch.io exclusively as a devlog/community platform. Steam will be the storefront. Every devlog post should funnel readers toward Discord (for real-time community) and eventually the Steam wishlist page once it exists.

---

## How to Create a Devlog Post

### Step-by-step on itch.io

1. Go to: https://cosmikstudios.itch.io/the-exhumation-protocol/devlog/new
2. Fill in the form fields:
   - **Title:** Descriptive, curiosity-driven. Never just "Devlog #1". See title guidelines below.
   - **Post type:** Pick the most accurate category. Use "General Update or Announcement" for regular posts. Use "Major Update or Launch" only for significant milestones (demo release, trailer drop). Use long-form types (Game Design, Tech Discussion) for deeper posts.
   - **Attachments:** Optional. Attach downloadable files if relevant.
   - **Content:** Rich text editor. Paste your text, then apply formatting using the toolbar (headings, bold, italic, links, images, embedded video).
   - **Tags:** Add 2-4 relevant tags per post (e.g., devlog, body-horror, management-sim, indie).
   - **Languages:** English.
   - **Cover Image:** Always upload one. 16:9 aspect ratio, minimum 500px wide. Use a screenshot, GIF, or custom graphic that represents the post content. This appears in browse pages and feeds.
   - **Comments:** Keep enabled.
   - **Visibility:** Check "Published" when ready to go live.
3. Click **Save**.

---

## Workflow for Writing Devlog Posts with Claude

When referencing this document in a conversation with Claude, use this workflow:

1. Tell Claude what the devlog topic is (e.g., "new mechanic", "art reveal", "progress update").
2. Provide any screenshots, GIFs, or images you want included.
3. Claude will produce a `.txt` file in `doc/devlogs/` with:
   - The filename format: `devlog-YYYY-MM-DD-short-title.txt`
   - A metadata header listing: Title, Post Type, Tags, Cover Image suggestion, and any images to upload.
   - The body text with formatting annotations in parentheses before each block, e.g., `(H2)`, `(Bold)`, `(Image: filename.png)`, `(Link: url)`.
4. To publish:
   - Open the itch.io devlog editor.
   - Copy the title from the metadata header into the Title field.
   - Select the Post Type indicated.
   - Paste the body text into the Content editor.
   - Apply formatting as indicated by the parenthetical annotations.
   - Upload images where indicated by `(Image: ...)` annotations. Use the image button in the toolbar.
   - Add the tags listed in the metadata header.
   - Upload the cover image.
   - Check "Published" and Save.

### Formatting annotation key

These annotations appear in parentheses before each text block in `.txt` files:

| Annotation | itch.io action |
|---|---|
| `(H2)` | Heading 2 (use heading dropdown in toolbar) |
| `(H3)` | Heading 3 |
| `(Bold)` | Select text and press B in toolbar |
| `(Italic)` | Select text and press I in toolbar |
| `(Bold+Italic)` | Apply both |
| `(Link: URL)` | Select text, click link button, paste URL |
| `(Image: filename)` | Click image button in toolbar, upload the file |
| `(Blockquote)` | Use blockquote button in toolbar |
| `(Bullet list)` | Use unordered list button |
| `(Numbered list)` | Use ordered list button |
| `(Embed video: URL)` | Click video embed button, paste YouTube/Vimeo URL |
| `(Separator)` | Use horizontal rule / separator |
| *(no annotation)* | Plain text -- regular paragraphs have no annotation, just the text itself |

---

## Writing Guidelines

### Tone and voice
- Conversational, honest, personal. Write like a person, not a press release.
- Candid about struggles and limitations. Solo dev authenticity resonates.
- Frame updates around what the player will experience, not just what you built.
- Concise. Respect reader time.
- No emdashes. Use periods, commas, or rewrite the sentence.

### Post structure
1. **Hook:** Lead with the most interesting thing (a GIF, a striking image, or a bold statement).
2. **Context:** Brief summary of what this post covers (1-2 sentences).
3. **Body:** 2-4 sections with headings. Mix text and visuals. Short paragraphs (2-4 sentences).
4. **Closing:** A question or call-to-action to invite engagement.
5. **Links:** Discord, X/Twitter, website. Always include these at the end.

### Ideal length
- 300-500 words of text.
- 3-5 images or GIFs per post.
- Longer posts (800+ words) only for deep-dives, postmortems, or design essays.

### Title conventions
- Descriptive and specific. Not "Devlog #3" but "Alien Organs, Black Markets, and a Basement in Gary, Indiana."
- Curiosity hooks work well. Hint at content without giving everything away.
- Casual energy is fine. Exclamation points are okay in moderation.

### Cover image
- Always set one. Posts without cover images get skipped in browse pages.
- 16:9 aspect ratio, minimum 500px wide.
- Should represent the post's content or the game's aesthetic.
- GIF covers grab more attention but must look good on the first frame.

### Visuals in the post
- GIFs are the highest-engagement visual format. Show mechanics, atmosphere, effects in motion.
- 2-5 images/GIFs per post. Enough to break up text, not so many it slows loading.
- Lead with your strongest visual.
- Screenshots communicate emotion better than words.

### Engagement
- End every post with one small, specific question. Invites feedback even from lurkers.
- Respond to every comment. Unanswered questions kill community growth.
- Cross-post on X/Twitter, Discord, and relevant Reddit communities (r/IndieDev, r/indiegames).

### Posting frequency
- Target: every 2-4 weeks. Consistency beats frequency.
- Minimum: once a month. A dormant devlog signals an abandoned project.
- Batch content: set aside 30-90 minutes separate from dev work to write.
- Plan topics alongside development milestones so you always know what to write next.

---

## Post Type Selection Guide

| Situation | Post type |
|---|---|
| First announcement / introduction | General Update or Announcement |
| Regular progress update | General Update or Announcement |
| Demo or build release | Major Update or Launch |
| Trailer or major milestone | Major Update or Launch |
| "Why I designed X this way" | Game Design |
| Technical deep-dive (shaders, AI, tools) | Tech Discussion |
| Lessons learned after a milestone | Postmortem |
| Marketing strategy reflection | Marketing |

---

## Tag Suggestions

Reusable tags for The Exhumation Protocol devlog posts:
- `devlog`
- `body-horror`
- `management-sim`
- `indie`
- `horror`
- `solo-dev`
- `godot`
- `retro`
- `game-design`

Pick 2-4 per post based on content.

---

## Links to Include in Every Post

- Discord: https://discord.gg/4AS2ZUM2hf
- X/Twitter: https://x.com/CosmikStudios
- Website: https://www.cosmikstudios.dev/exhumation-protocol
- itch.io page: https://cosmikstudios.itch.io/the-exhumation-protocol
