# Suisei-Style Meme Landing
A fast, single-page landing site with a sticky neon header, centered nav, social icons, and a big hero image.

## Quick Start
1) Put your images:
   - `assets/images/logo.png` (transparent PNG recommended, ~256x256)
   - `assets/images/hero.jpg` (large banner image, 1920x1080+)

2) Open `index.html` in your browser to preview locally.

3) Replace links:
   - Header "BUY NOW!" → your swap link
   - Social icons → your Telegram / X links
   - Chart iframe `0xYOURPAIR` → your real pair address

4) Deploy (optional):
   - Drag the folder into Netlify (manual deploy) or Vercel.

## Customize Brand Text
The left logo text is hard-coded as:
- HOSHIMACHI (top, white)
- SUISEI (bottom, blue)

Change in `index.html` inside `.brand-text`, or replace with a single logo image by removing the text block.

## Notes
- Mobile menu appears automatically below 960px width.
- Colors and spacing are in `:root` CSS variables in `assets/css/style.css`.
