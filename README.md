# aws-gcp-interconnect-walkthrough

[![Deploy](https://github.com/jajera/aws-gcp-interconnect-walkthrough/actions/workflows/deploy.yml/badge.svg)](https://github.com/jajera/aws-gcp-interconnect-walkthrough/actions/workflows/deploy.yml)

Documentation for [terraform-aws-interconnect-demo](https://github.com/jajera/terraform-aws-interconnect-demo) — a hands-on walkthrough for private IP connectivity between AWS and Google Cloud using AWS Interconnect multicloud and GCP Partner Cross-Cloud Interconnect.

## What this is

An [Astro Starlight](https://starlight.astro.build/) site with step-by-step guides covering:

| Section         | Content                                                         |
| --------------- | --------------------------------------------------------------- |
| Overview        | Architecture, what Terraform manages vs manual steps            |
| Prerequisites   | Accounts, tools, authentication, region pairing, cost estimates |
| Setup           | Configure variables, terraform apply, GCP API prep              |
| Interconnect    | AWS console (activation key), GCP transport, VPC peering        |
| Verify          | Poll routing states, end-to-end ping EC2 ↔ GCE                  |
| Teardown        | Ordered cleanup to stop billing                                 |
| Troubleshooting | Decision trees, CloudTrail, SCPs, billing verification          |
| Reference       | Repo layout, variables, outputs, external links                 |

## Quick start

Use Node 22 (see `.nvmrc`; `package.json` engines allow ≥ 18.20.8).

```bash
npm install
npm run dev
```

Open the URL the dev server prints (with `base: '/aws-gcp-interconnect-walkthrough'`, typically `http://localhost:4321/aws-gcp-interconnect-walkthrough/`).

```bash
npm run build   # production build (draft pages excluded)
npm run preview # serve the build locally
```

## Deploy

GitHub Pages on push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

1. Repo Settings → Pages: Source = GitHub Actions
2. `astro.config.mjs`: `site` and `base` (`/aws-gcp-interconnect-walkthrough`) must match the Pages URL

## Project structure

```
src/content/docs/
  index.mdx                    # Splash / Introduction
  overview.mdx                 # Architecture and checklist
  prerequisites/               # Accounts, tools, costs
  setup/                       # Variables, terraform apply, GCP prep
  interconnect/                # AWS console, GCP transport, VPC peering
  verify/                      # Routing checks, ping test
  teardown.mdx                 # Ordered cleanup
  troubleshooting/             # Errors, billing verification
  reference.mdx                # Repo layout, links
src/components/                # Reusable Astro components
src/data/                      # Glossary terms
src/styles/                    # Theme overrides
```

## Content source

The walkthrough content is based on [terraform-aws-interconnect-demo](https://github.com/jajera/terraform-aws-interconnect-demo).

## License

[MIT](LICENSE)
