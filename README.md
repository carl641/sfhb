# Southern Family Home Builders — Homepage Rebuild

Rebuilt homepage for [southernfamilyhomebuilders.com](https://www.southernfamilyhomebuilders.com/): a family-owned custom home builder serving Athens, Huntsville, and North Alabama.

Static site, no build step, no runtime dependencies. Open `index.html` or serve the folder from any static host.

```
index.html            The page
assets/css/styles.css All styling (design tokens, light + dark themes)
assets/js/main.js     Nav, scroll reveals, gallery controls, form validation
assets/fonts/         Self-hosted variable fonts (Bricolage Grotesque + Figtree, via Fontsource, OFL)
assets/img/           Favicon
```

## Design notes

- **Palette:** deep pine green + bone neutrals + a single amber accent. Defined as CSS custom properties at the top of `styles.css`; dark mode follows `prefers-color-scheme` automatically.
- **Type:** Bricolage Grotesque (display) and Figtree (body), self-hosted woff2, ~60KB total.
- **Motion:** subtle scroll reveals via IntersectionObserver and a one-time hero settle. Everything honors `prefers-reduced-motion`.
- **Icons:** inline SVG sprite from Phosphor Icons (MIT).

## Before launch

1. **Photography is placeholder stock.** All photos hot-link Unsplash (with a picsum.photos fallback baked into each `<img onerror>`). Replace with real project photography: hero, 3 service images, 4 gallery images, 1 about image. Sizes are noted in each tag's `width`/`height` attributes.
2. **Wire the estimate form.** It validates client-side and shows a success panel, but does not send anywhere yet. Point the `<form>` at Netlify Forms, Formspree, or the site's CMS (see the note in `index.html` and `main.js`).
3. **Confirm the details.** Phone number (256) 397-3204, service-area towns, and the "20+ years / veteran discount / free estimates" claims were pulled from the current live site. Verify before publishing. The testimonial is placeholder copy awaiting a real customer quote.
