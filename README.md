# Srushti Kulkarni — Portfolio

A personal portfolio built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Design concept
Since the content is a backend/automation engineer's work, the hero is built as a
live-looking monitoring dashboard (in the style of the Grafana dashboards built at
Dell) instead of a generic hero banner. Section labels use monospace status tags
(`[status: ...]`) to match the automation/CI-CD vocabulary that's authentic to the
role, rather than generic numbered markers.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Editing your content
All real content lives in these files — edit directly, no need to touch styling:

- `src/components/Hero.tsx` — headline + intro line
- `src/components/DashboardPanel.tsx` — the 3 hero metrics
- `src/components/About.tsx` — about paragraph
- `src/components/Experience.tsx` — jobs array (add/edit roles + bullets)
- `src/components/Projects.tsx` — projects array (add/edit project cards)
- `src/components/Skills.tsx` — skill groups
- `src/components/Credentials.tsx` — education, certifications, achievements
- `src/components/Contact.tsx` — email, phone, LinkedIn, GitHub links

## Deploying
The fastest path is [Vercel](https://vercel.com) (made by the Next.js team, free tier):

1. Push this project to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Deploy — no configuration needed, Vercel auto-detects Next.js

Alternatively: `npm run build && npm run start` to run a production build locally,
or deploy the `.next` output to any Node-compatible host.

## Notes
- Fonts (Space Grotesk, IBM Plex Sans, JetBrains Mono) load from Google Fonts at
  build time via `next/font/google` — this requires internet access during `npm run build`,
  which any normal dev machine or deploy platform (Vercel, Netlify, etc.) will have.
- Update the placeholder GitHub link in `Contact.tsx` to your real GitHub URL once
  you've finished the GitHub profile cleanup.
- Colors, type, and spacing tokens are centralized in `src/app/globals.css` under `@theme inline`
  if you want to adjust the palette.
