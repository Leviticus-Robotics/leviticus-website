# Leviticus Website Spec

## Purpose

Build the public website for FTC team 36099 Leviticus. The site should present the team, explain why it exists, make the team easy to contact, and give sponsors a clear path to learn about and support the team.

The website is expected to be mostly static. Use Astro for pages and content. Use Svelte islands only where client-side interaction is actually needed.

## Global Layout

- Every page must include a top navigation bar.
- The navigation bar must place the team logo on the top left.
- The navigation bar must place page navigation links on the top right.
- The navigation must include links to:
  - Meet Our Team
  - Mission Statement
  - Contact
  - Sponsors
- The navigation should remain visually consistent across all pages.
- The logo should link to the home page.
- Navigation links should use descriptive text and semantic anchor elements.
- The active/current page should be visually indicated when practical.
- The layout must work on desktop and mobile viewports.

## Visual Theme

- The site color theme should use purple and blue as the primary brand colors.
- Use the purple and blue palette consistently across navigation, calls to action, section accents, and important highlights.
- Maintain accessible color contrast for text, links, buttons, focus states, and interactive elements.
- Use neutral colors as needed for readability, whitespace, and balance.

## Pages

### Meet Our Team

Purpose: Introduce FTC team 36099 Leviticus through its members, experience, and shared competitive background.

Required content:

- A card for each team member.
- Each member card must include the member name and bio.
- Each member card should include prior experiences when available.
- The page should mention that Leviticus includes students from FTC teams 7854 and 15385, which competed at the World Championship and Premiere Events.
- Cards should be generated from structured data instead of hardcoded one-off markup when there are multiple members.

Content model:

- Name
- Role or team responsibility, if applicable
- Bio
- Prior experiences
- Photo, if available

### Mission Statement

Purpose: Explain why the team was created and what it is working toward.

Required content:

- Reasons for the creation of FTC team 36099 Leviticus.
- The team's longer term goals.
- A clear mission statement suitable for students, families, sponsors, and community members.

Content considerations:

- Keep the tone confident, specific, and grounded.
- Avoid generic robotics-team language when team-specific details are available.
- Make the mission easy to understand for people unfamiliar with FTC.

### Contact

Purpose: Give visitors clear ways to contact or follow the team.

Required content:

- Team email address.
- Team phone number, if public.
- Social media links.

Implementation notes:

- Use accessible, descriptive link text.
- Use `mailto:` for email links when appropriate.
- Use `tel:` for phone links when appropriate.
- External social links should make their destination clear.

### Sponsors

Purpose: Recognize current sponsors and invite new sponsors to apply.

Required content:

- Existing sponsors.
- Sponsor names and logos when available.
- Links to sponsor websites when available.
- A link to a Google Form for sponsor applications.

Implementation notes:

- Sponsor logos must include meaningful `alt` text.
- If a sponsor logo is decorative next to visible sponsor text, use empty `alt` text.
- The Google Form link should have clear call-to-action text.
- Sponsor data should be structured so sponsors can be added or updated without duplicating layout code.

## Accessibility Requirements

- Use semantic HTML and page landmarks.
- Use native links and buttons for navigation and actions.
- Preserve logical heading order on every page.
- Provide meaningful image alternatives.
- Ensure the site can be navigated with a keyboard.
- Include a skip link when implementing the shared site layout.
- Prefer native HTML first. Use ARIA when native HTML cannot express the required role, state, relationship, or accessible name.

## Quality Requirements

- Follow the project guidance in `AGENTS.md`.
- Avoid one-off hacks or hardcoded fixes.
- Prefer reusable components for repeated layout patterns such as member cards and sponsor cards.
- Prefer Astro UI components for repeated Tailwind patterns instead of shared class-string alias modules.
- Keep content data separate from presentation when doing so makes updates easier.
- Verify affected pages with `pnpm build` before finishing implementation work.
