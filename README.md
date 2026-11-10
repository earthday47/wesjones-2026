# WesJones.net

Source for [wesjones.net](https://www.wesjones.net/), the personal site of Wes Jones, a Senior Software Engineer specializing in Drupal, AWS cloud integration, and AI-accelerated development.

The site was rebuilt in 2026 from a previous vanilla PHP and Bootstrap version.

## Stack

- [Astro](https://astro.build/) static site generator
- React for build-time components (no client-side React)
- Plain CSS with design tokens, no framework
- Hosted on GitHub Pages, deployed by GitHub Actions

## Local development

Requires Node.js 22.23 or later.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static files to dist/
npm run preview   # serves the built site
```

## Project structure

```
src/
  components/   Astro and React components
  data/         site.json: all page copy, work history, and skills
  layouts/      Shared page layout
  pages/        One file per route (index, work, contact)
  styles/       global.css
public/files/   Downloadable resume PDF
resume/         Editable resume source (DOCX)
```

Most text changes happen in `src/data/site.json`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

## License

Code is available for reference. Photos, resume, and written content are © Wes Jones and may not be reused without permission.
