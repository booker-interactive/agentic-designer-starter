# Spec: Add a Pricing section to the home page

A spec is a one-page brief you give an agent so it builds what you meant. This is an example for the Field Notes starter. Use it as a model: short, specific, and clear about what is *not* included.

## Goal

Visitors who like the Field Notes pitch should be able to see what it costs, and pick a plan, without leaving the home page.

## Who it is for

A UX researcher at a small team who is deciding whether to try the product. They are reading on a laptop or a phone, and want to compare plans in a few seconds.

## Where it goes

On the home page (`src/app/page.tsx`), directly below the "Everything a research session needs" feature cards and above the footer. Add a "Pricing" link to the header navigation that scrolls to it.

## Content

A heading ("Simple pricing") and one line of supporting text, then three plans:

| Plan | Price | Who it is for | Includes |
|------|-------|---------------|----------|
| Solo | Free | One researcher trying it out | 3 projects, 10 sessions a month, tags |
| Team | $12 per person per month | A research team | Unlimited projects, shared tags, summaries you can share |
| Org | Talk to us | Larger research groups | Everything in Team, single sign-on, an onboarding call |

Each plan has a button: "Start free" for Solo, "Start a trial" for Team, "Contact us" for Org. The buttons can link to `#` for now.

## Design rules

- Use the existing Card component and the tokens in `globals.css`. No hard-coded colors.
- The Team plan is the recommended one. Give it a "Most popular" badge and a primary-colored border or button so it stands out. The other two stay quiet.
- On a phone the cards stack in one column with Team first. From the `md` breakpoint they sit in a row.
- Works in light and dark mode.

## Behavior and accessibility

- The section is a `<section>` with an `h2`; each plan name is an `h3`.
- The list of included features is a real list.
- Buttons have visible focus states.
- Text contrast is at least 4.5:1.

## Out of scope

- Real payment, sign-up or login.
- A monthly/yearly toggle.
- Changing any other section of the page.

## Done when

- [ ] The section appears below the features and the header link scrolls to it.
- [ ] It looks right at 375px wide, at 768px, and at desktop width, in light and dark mode.
- [ ] `npm run typecheck` and `npm run build` both pass.
- [ ] The agent has explained, in plain language, what it changed.
