# Ekansh Chawla — portfolio

React 18 / Create React App / React Router. Updated October 12, 2026 within the existing portrait-based portfolio. The original MUI theme, navigation, carousel, project cards, and hobbies are retained.

## Run and verify

```sh
npm ci
npm start
CI=true npm test -- --watchAll=false --runInBand
npm run build
npm run preview
```

The production preview runs at http://127.0.0.1:4173. Python 3 is required only for this optional preview helper. The production build emits route-specific HTML files and search/sharing metadata. The four article pages also include their text in the initial HTML. The original browser-rendered homepage is retained; React renders the interactive site on load.

## Content maintenance

- `src/components/Main.js` and `src/components/sections/`: existing homepage structure, portrait, About, experience carousel, Research, project cards, and Hobbies.
- `src/content/{experience,projects,navbar}.json`: homepage content and navigation.
- `src/pages/Research.js`: rebalancing paper summary, methodology, limitations, downloads.
- `src/pages/StateValidity.js`: inference-scheduling report, evaluation, service trade-offs and downloads.
- `public/research/state-validity/`: version 1.0.1 PDF, source/results packages and the grayscale result figure.
- `src/pages/Mercury.js`: current implementation and roadmap; replace the explicit “GitHub source — coming soon” text when a public repository exists.
- `src/pages/NodeAI.js`: prototype architecture and source link.
- `src/content/links.js`: shared contact and paper links.
- `src/content/pages.json`: per-route search metadata.
- `src/Theme.js`: original light/dark MUI themes.
- `src/index.css`: original carousel styles and accessibility additions.
- `src/detail.css`: article styles that use the existing theme through `DetailLayout`.
- `resume/resume_quant.tex`: editable one-page resume. Compile with pdfLaTeX or upload the file to Overleaf, keep the resulting PDF in the `resume/` folder. Resume downloads are intentionally excluded from the website.
- `public/research/rebalancing-mechanism.png`: original manuscript figure, CC BY 4.0, Ekansh Chawla.

Keep project scope and performance claims tied to source evidence. `docs/CONTENT_REVIEW.md` records the source material and deliberate omissions. Future articles can use the same `page`, `article-grid`, and `prose` components/classes; no placeholder article is published.

## Deploy to the existing Vercel project

Use the existing Dynamic-Portfolio repository and Vercel project. The owner authorized committing and pushing this integrated update on October 12, 2026.

1. Commit and push reviewed changes to the existing repository. If Vercel is connected to `main`, its normal deployment workflow will run from that push.
2. Use the existing Create React App configuration, build command `npm run build`, output directory `build`, and install command `npm ci`.
3. `vercel.json` maps detail URLs to their pre-rendered pages and preserves direct-page refreshes. Unknown routes use the generated 404 page. If hosting elsewhere, use equivalent rewrites. `_redirects` supports Netlify.
4. After deployment, check each direct detail URL, the paper links, and mobile navigation.
5. If the domain changes, update `public/index.html`, `public/robots.txt`, `public/sitemap.xml`, `scripts/prerender.cjs`, `src/App.js`, and the resume portfolio link.

Existing homepage components and assets remain in use. No dependency versions were upgraded. The previous editorial redesign was backed up outside this repository before the integration was corrected.

The inference study is archived at https://zenodo.org/records/23328001
(DOI 10.5281/zenodo.23328001). Paper and code buttons use verified Zenodo
filenames; the standalone Overleaf package remains a local download.
