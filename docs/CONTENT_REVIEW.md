# Content review — October 12, 2026

## Sources and decisions

- Owner confirmed GPA 3.88 and Amazon May–September 2025 in this conversation. SFU expected graduation September 2027.
- AWS / Visier / Amazon technical accomplishments and numerical claims come from `Documents/Default Resume.pdf`. These are applicant-provided experience claims, not independently audited employer measurements.
- Paper: DOI 10.5281/zenodo.23298207, plus the local released manuscript and result tables. The primary comparison reports 132 vs 68 events (48.5% reduction), 2.7% notional reduction, and 1.36 bp/year assumed fee savings at 10 bp per dollar. Working-paper and retrospective status retained; no peer-reviewed or live-alpha claim.
- Mercury: inspected local C++ order-book, simulator, RNG, tests, benchmark harness, CMake and implementation plan. The simulator exists even though README status lags. No CUDA, execution policies, adversarial search, or measured latency headline is claimed. Owner confirmed it is not yet published and requested an explicit source placeholder. The parent repository's `messengingProg` remote is not a verified Mercury public URL.
- NodeAI: inspected public `Ekanshthegreat/NodeAI-rework` commit `dc67b24ab14430202453445d4ad9c2f9adb909fa`. Relevant files: `lib/planner.ts`, `lib/planner_path.ts`, `lib/dispatch.ts`, `lib/policy.ts`, `hooks/usePolicyEngine.ts`, `adapters/{ros,rmf,vda5050,mock}.ts`, store modules and UI. Describe as a prototype. No fleet performance metrics, hardware validation, or complete protocol compliance asserted. Replay is a UI scaffold; VDA order payloads are simplified. No repository screenshot was available; the existing image is a logo and was not presented as a product screenshot.

## Release considerations

- Mercury source button intentionally absent until a public source URL exists.
- External network services can block automated requests. Zenodo URLs use the record and filenames supplied in the published record; public NodeAI source was successfully cloned for inspection.
- Contact email and public profile links are carried forward from the existing resume/site.
- The owner subsequently requested integration within the original visual design and authorized committing/pushing the website to Dynamic-Portfolio. Neither Mercury nor NodeAI source was modified.
