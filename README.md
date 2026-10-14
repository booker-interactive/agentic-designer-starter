# Agentic Designer Starter

This is the practice project for the Agentic Designer course. It's a small website for a made-up product called **Field Notes**, a note-taking app for UX researchers. You don't need to know how to code. You'll ask an AI agent to change it, look at the result, and learn what is happening as you go.

You will use this same project again in later lessons for practice exercises.

## What you need

- An AI coding tool open on this folder (Kiro, VS Code with Codex, Cursor, Claude Code, or the Codex app).
- [Node.js](https://nodejs.org) version 24 (the course's setup lesson installs it). If you're not sure you have it, ask your agent: "Is Node.js installed? If not, help me install it."

## Run it

You only need four things. Type them into the terminal inside your tool (your agent can also do this for you).

| What you type | What it does |
|---|---|
| `npm install` | Downloads the pieces the project needs. Do this once. |
| `npm run dev` | Starts the site. Open http://localhost:3000 in your browser. It updates as soon as files change. |
| `Control+C` (hold Control, press C) | Stops the site. Use it when you're done, or before you type another command in the same terminal. |
| `npm run build` | Checks that the site is ready to go live. Optional, but your agent will often run it. |

## What's in the folders

| Folder or file | What it's for |
|---|---|
| `src/app/page.tsx` | The home page: headline, buttons and feature cards. |
| `src/app/globals.css` | The design tokens: the colors (light and dark), corner radius and fonts. Change a color here and the whole site follows. |
| `src/app/practice/` | Pages for later practice exercises. Leave them alone for now. |
| `src/components/` | Reusable pieces, like the header and footer. |
| `src/components/ui/` | Ready-made buttons, cards and badges (from shadcn/ui). |
| `src/data/` | Sample data that some pages show. |
| `docs/` | Written specs and notes for the exercises. |
| `AGENTS.md` | Instructions your AI agent reads automatically. It's how every tool gets the same rules. |
| `package.json` | The list of pieces the project uses. You rarely need to open it. |

## Ask your agent

Try these first. Look at the page in your browser after each one.

1. "Change the headline on the home page to something about [your own idea]. Keep it short."
2. "Change the primary color of the site to a deep purple. Update it for dark mode too, and tell me which file you changed."
3. "Replace '[your name]' in the footer with my name, [your name]."

Then ask it to explain what it did: "In plain language, what did you just change and why?" That's the habit worth building.

## Save your work and put it online

1. **Commit and push.** Ask your agent: "Commit these changes with a clear message and push them to GitHub." A commit is a saved checkpoint, and a push sends it to GitHub.
2. **Deploy on Vercel.** Go to [vercel.com/new](https://vercel.com/new), sign in with your GitHub account, and import this repository. Vercel recognizes it as a Next.js project, so leave every setting as it is and click **Deploy**. In a minute or so you get a live link.
3. After that, every push to GitHub updates your live site automatically.

Vercel's free Hobby plan is for personal, non-commercial projects like this one. Client work needs a paid plan.

Never put passwords or API keys in this project. If you ever need them, ask your agent how to keep them out of GitHub.

## What it's built with

Next.js 16, React 19, Tailwind CSS v4 and shadcn/ui. You don't need to know any of them to start; your agent does.
