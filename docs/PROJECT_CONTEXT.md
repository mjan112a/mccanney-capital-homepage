# Project context

Snapshot date: 2026-08-01. Update this document when the product or deployment state changes.

## Why this exists

Mark McCanney described a common industry failure: a person arrives with one understandable question—“Can I retire?” or “Is this annuity any good?”—and is forced through a long, invasive sales process before anyone answers it.

The McCanney Capital homepage was rebuilt around the opposite behavior. A client may bring one question, one statement, or the whole plan. Mark shows what the numbers support, what they do not, and what would have to be true before changing anything.

## Relationship to Media

- This repository represents the advisory practice and its service workflow.
- The companion repository, `mjan112a/mccanney-media`, contains educational articles, opinion, and ungated tools.
- Media challenges the industry's sales maze. The practice demonstrates the answer-first alternative.
- The practice should link to Media using `MCCANNEY_MEDIA_URL` when supplied and `https://media.mccanneycapital.com/` as the production fallback.

## Current product

- Homepage with an interactive one-question Answer Desk.
- Services covering retirement income, annuity second opinions, long-term-care resilience, life-insurance strategy, portfolio stress testing, and advisor collaboration.
- Process, About, Tools, FAQ, and Contact pages.
- Retirement-gap, annuity-clarity, and care-impact educational tools.
- A local-only contact-form prototype that intentionally transmits nothing.
- Mark's portrait at `public/mark-mccanney.webp` and a generated share card at `public/og.png`.

## Source map

- `app/page.tsx`: homepage composition.
- `app/data.ts`: services, FAQs, and Answer Desk content.
- `app/components/QuestionDesk.tsx`: one-question interaction.
- `app/components/ToolsLab.tsx`: educational calculators and triage tools.
- `app/components/ContactForm.tsx`: non-transmitting prototype.
- `app/components/Header.tsx` and `Footer.tsx`: shared navigation and disclosures.
- `app/globals.css`: complete visual system and responsive behavior.
- `app/layout.tsx`: host-aware metadata and social image.
- `tests/rendered-html.test.mjs`: production-build source invariants.

## Facts inherited from the previous website

The redesign currently displays claims and credentials found on the former public site, including 22 years, 1,400+ portfolios, service in 12 states, Series 65, NAIFA membership, Ohio insurance license number 579496, the Columbus office address, and phone number. Treat these as owner/compliance-review items before the custom-domain cutover; do not extrapolate or add claims from them.

## Decisions already made

- The strongest promise is “You don't need another pitch. You need an answer.”
- Comprehensive planning is available when useful, not positioned as the cover charge for a basic answer.
- Compensation language is careful; broad “fee-only” and “no conflicts” claims were removed.
- The main site is a restrained, service-focused sibling to the more editorial Media brand.
- The existing portrait is served directly because Vinext's local image-optimization path failed.
- CarePlan Pro is a natural future simulator integration, but no implementation or data contract has been approved.

## Known unfinished work

- Owner and compliance review of claims, credentials, services, disclosures, and calculator language.
- A real contact-form destination, privacy notice, consent model, spam protection, retention policy, and failure handling.
- A deliberate analytics and cookie decision.
- Final hosting choice for the custom domain and DNS cutover.
- CarePlan Pro integration design.
- Error monitoring and availability alerts.
