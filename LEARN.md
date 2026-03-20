# Learn Notes

This file tracks architecture and implementation decisions for this portfolio.

## Current Architecture

- Next.js App Router (`app/`)
- Reusable sections under `app/_components/`
- UI primitives under `components/ui/`
- Utility helpers under `lib/`

## Quality Baseline

- ESLint 9 flat config (`eslint.config.mjs`)
- TypeScript strict mode + `forceConsistentCasingInFileNames`
- Security headers and CSP configured in `next.config.mjs`
- Sitemap generation via `next-sitemap`

## SEO Baseline

- Rich metadata in `app/layout.tsx`
- JSON-LD Person schema
- `robots.txt` and generated sitemap

## Product Direction

- Keep the homepage focused on outcomes, not only technologies.
- Prefer concise project cards with clear value and links.
- Maintain accessible interactions and reduced-motion compatibility.

## Recommended Next Iterations

- Add dedicated case-study pages for top projects.
- Add lightweight analytics dashboards for CTA clicks.
- Add tests for critical UI sections and links.
