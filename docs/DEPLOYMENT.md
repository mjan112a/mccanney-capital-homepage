# Deployment runbook

Snapshot date: 2026-08-01.

## Source control

- GitHub: `https://github.com/mjan112a/mccanney-capital-homepage`
- Default branch: `main`
- Runtime: Node.js 22+, Vinext, containerized with the root `Dockerfile`
- Required validation: `npm test`

## Public environments

### Google Cloud Run

- GCP project: `upstream-494922`
- Region: `us-east1`
- Service: `mccanney-capital-homepage`
- URL: `https://mccanney-capital-homepage-1071604510588.us-east1.run.app`
- Access: public/unauthenticated
- Runtime environment variable:
  - `MCCANNEY_MEDIA_URL=https://mccanney-media-1071604510588.us-east1.run.app`

Deploy the current source from the repository root:

```powershell
gcloud run deploy mccanney-capital-homepage `
  --source . `
  --region us-east1 `
  --allow-unauthenticated `
  --set-env-vars "MCCANNEY_MEDIA_URL=https://mccanney-media-1071604510588.us-east1.run.app" `
  --project upstream-494922
```

The first source deployment may enable Cloud Build and Artifact Registry and create the `cloud-run-source-deploy` image repository. Confirm the active GCP account and project before deploying.

### OpenAI Sites preview

- Project ID: `appgprj_6a6d510add988191b421587417505658`
- URL: `https://mccanney-capital-homepage.mjan112a.chatgpt.site`
- Access: public

This is a separate deployment target. A push to GitHub or Cloud Run does not update it automatically.

## Local development

```powershell
npm install
npm run dev
```

The original paired local setup used port `4174` for the main site and `4173` for Media. When developing alone, any available Vinext port is acceptable. Use `MCCANNEY_MEDIA_URL` to point at a nondefault Media environment.

## DNS state

Namecheap DNS was not changed as part of the initial launch. `mccanneycapital.com` was registered with OpenAI Sites, but its validation and routing remain pending because the DNS records were intentionally not applied.

Before any DNS change, choose the final origin:

- GCP Cloud Run, using an approved Google custom-domain architecture; or
- OpenAI Sites, using the records returned by that hosting project.

Do not combine records from both providers for the same hostname. Preserve MX, SPF, DKIM, DMARC, and unrelated TXT records. The apex cutover replaces the current public website, so validate ownership claims, compliance copy, contact handling, and rollback before changing web records.

## Verification after deployment

- Request `/`, `/about`, `/services`, `/process`, `/tools`, `/faq`, and `/contact`; confirm HTTP 200.
- Exercise Answer Desk and each tool.
- Confirm the contact form states that it is a prototype and transmits nothing.
- Confirm the Media navigation points to the intended environment and contains no localhost URL.
- Confirm the portrait loads directly without a `/_next/image` request.
- Check metadata and `public/og.png` against the deployment host.
- Check mobile navigation and keyboard focus.

## Rollback

Cloud Run retains revisions. List and restore traffic with current Google Cloud commands rather than deleting the service. Confirm the target revision and project before changing traffic. DNS rollback is separate from application rollback.
