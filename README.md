# DRC Embassy Namibia — presentation preview

React, TypeScript, Vite and Tailwind CSS website prepared for embassy review.

## Run locally

Use Node.js 22.12+ (or 24+) and pnpm 11:

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

Open the local URL printed by Vite. To validate:

```sh
pnpm lint
pnpm build
pnpm preview --host 127.0.0.1
```

## Review status

This is a presentation version pending embassy approval. Sample news is explicitly labelled. Service information and contact details require embassy validation before public launch. Online booking and messaging are not connected; form downloads are disabled until approved PDF files are supplied. Policy controls show review placeholders.

The supplied ambassador portrait is displayed near its native 182 × 273 resolution. A higher-resolution original is needed for a larger portrait.

## Maintenance

- Content: `src/data/embassyData.ts` and localized component copy.
- Design direction and responsive rules: `DESIGN.md`.
- Shared accessible dialogs: `src/components/AccessibleModal.tsx`.
- Images: `public/`.
- Dependencies: commit `pnpm-lock.yaml` and use pnpm consistently.

Keep secrets out of source control. Environment files, generated builds, dependency folders and local preview screenshots are ignored.
