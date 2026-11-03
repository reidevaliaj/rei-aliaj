# Rei Aliaj — AI Engineer & Automation Developer

German and English portfolio focused on AI engineering and Python automation.

## Development

- Install dependencies: `npm ci`
- Run locally: `npm run dev`
- Type-check: `npx tsc --noEmit`
- Production build: `npm run build`
- Serve the build: `npm start`

Built with Next.js App Router, React, TypeScript, and CSS. German lives at `/`; English lives at `/en`. Both languages have individual case-study routes.

## Content

- `src/lib/site-data.ts`: homepage copy, engineering capabilities, toolkit, and experience
- `src/lib/ai-case-studies.ts`: voice AI and recruiting automation case studies
- `src/lib/additional-case-studies.ts`: knowledge AI, catalog publishing, and API workflow case studies
- `src/components/project-visual.tsx`: architecture illustrations
- `src/app/globals.css`: responsive design system

Contact details are centralized in `site-data.ts`. The existing contact route uses Resend and requires `RESEND_API_KEY` in the deployment environment. Never commit environment files. Local browser checks use mocked email responses.

## Hosting

- Domain: https://www.rei-aliaj.com
- Vercel project: `rei-aliaj`
- Team: `futurewealthgroup`
- Git repository: https://github.com/reidevaliaj/rei-aliaj
- Production branch: `main`

Metadata, a generated sharing image, sitemap, robots file, and redirects from retired case-study URLs are included. Browser verification artifacts are ignored by Git.
