# Instructions for AI contributors

This repository is the advisory-practice half of the McCanney Capital system. Read `docs/PROJECT_CONTEXT.md`, `docs/BRAND_AND_CONTENT.md`, and `docs/DEPLOYMENT.md` before changing code or copy.

## Product promise

The visitor does not need another pitch. The visitor needs an answer. Start with the decision in front of the client, show the math and assumptions, explain the tradeoffs, and let keeping the current approach win when it should.

## Non-negotiables

- Never hide a basic answer behind comprehensive fact-finding or a lead funnel.
- Never invent facts, credentials, client stories, performance claims, carrier ratings, product terms, regulatory status, or testimonials.
- Never call the firm “fee-only,” “conflict-free,” a fiduciary, or independent in a regulated sense without current documentary support and compliance approval.
- Never present educational calculators as individualized advice or guaranteed outcomes.
- Explain role, compensation, limitations, and alternatives before a decision.
- Avoid fear-based urgency and generic advisor imagery or language.
- Keep the practice site sober and service-focused. The companion Media site can be more provocative.
- Do not make the contact form transmit data until an owner-approved destination, privacy notice, security model, retention policy, and failure state exist.

## Technical rules

- The app uses Next.js-compatible React through Vinext and targets Node.js 22.13 or newer.
- Pages live under `app/`; reusable interactions live in `app/components/`; service and FAQ content lives in `app/data.ts`.
- Use direct `<img>` elements for the local Mark portrait. `next/image` triggered Vinext's local `fetchAsset` optimizer crash and was intentionally removed.
- Preserve keyboard focus states, responsive layouts, semantic headings, calculator labels, and live-region feedback.
- Do not commit `node_modules`, `dist`, `.vinext`, `.wrangler`, local logs, credentials, or generated archives.
- Run `npm test` before proposing or publishing changes.

## Deployment guardrails

- Cloud Run is the current independent public staging host. Namecheap DNS has not been changed.
- The root `MCCANNEY_MEDIA_URL` runtime variable controls the Media destination on GCP. Preserve a production fallback to `https://media.mccanneycapital.com/`.
- The OpenAI Sites deployment remains available as a secondary preview. Do not mix its DNS instructions with a future GCP custom-domain setup.
- Never change DNS, access policy, billing settings, or production services merely because documentation mentions them. Obtain explicit approval and read `docs/DEPLOYMENT.md` first.
- Update the deployment runbook and project snapshot whenever URLs, services, domains, or environment variables change.
