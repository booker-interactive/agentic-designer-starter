<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agentic Designer Starter

This is a small website for a made-up product called **Field Notes** (a note-taking app for UX researchers). It exists so UX designers can learn to build prototypes in code by working with an AI agent. The person you are working with is a designer, not an engineer.

## How to work with this person

- Explain what you changed and why in plain language, as you would to a designer. Skip jargon, or explain it in a few words when you must use it.
- Say what you are about to do before a big change, and keep each change small enough to review.
- Recommend one path rather than listing many options.
- Don't install new packages, delete files, or run `git push` unless they ask.
- Never commit secrets (API keys, passwords, `.env` files). If something looks like a secret, stop and tell them.

## Run it

- `npm install` once, then `npm run dev`. The site opens at http://localhost:3000. Stop it with Control+C.
- Before saying a change is finished, run `npm run typecheck` and `npm run build`, and fix any errors.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui built on Base UI. Tailwind is configured in `src/app/globals.css`; there is no `tailwind.config` file.

## Where things live

- `src/app/globals.css`: the design tokens (colors for light and dark, radius, fonts). **Colors and radius live here.**
- `src/app/page.tsx`: the home page.
- `src/app/practice/`: practice exercise pages (see below).
- `src/components/`: our own components. Keep new components here.
- `src/components/ui/`: shadcn/ui components (Button, Card, Badge). Add more with `npx shadcn@latest add <name>`.
- `src/data/`: sample data used by pages.
- `docs/`: specs and other project documents.

## Conventions

- **Use the tokens, not hard-coded colors.** Write `bg-primary`, `text-muted-foreground`, `border-border`, never `#1a1a1a` or `bg-blue-500`. To change the look of the whole site, edit the variables in `globals.css`.
- Light and dark mode follow the visitor's system setting. Any new color must have both a light and a dark value.
- Use semantic HTML (`header`, `main`, `nav`, `button`, headings in order), keep visible focus states, and keep text contrast at 4.5:1 or better.
- Make it work on a phone-width screen first.
- Fonts are system fonts set in `globals.css`. Don't add `next/font/google`.
- In this Next.js version `searchParams` and `params` are Promises: `await` them.
- shadcn/ui here uses Base UI, so use the `render` prop, not `asChild`. To make a Button that is a link, use `buttonVariants` on a `Link`, as `src/app/page.tsx` does.
- Commit with a clear message that says what changed and why, for example "Change hero headline and brand color to purple".

## Practice pages

- `/practice/review` has **deliberate design flaws** for a review exercise. Do not fix them, and do not copy its patterns elsewhere, unless the person asks you to.
- `/practice/data` is a clean table that reads from `src/data/projects.ts`.
- `docs/spec-example.md` shows what a good one-page spec looks like.

<!-- Codex, Cursor, Kiro and Copilot read this file directly. Claude Code reads it through CLAUDE.md. -->
