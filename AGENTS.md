# AGENTS.md

Guidance for agents working in this repository.

## Project

This is the website for FTC team 36099 Leviticus.

The site should be treated primarily as a static marketing/content website, not a full web app. Prefer simple Astro pages, layouts, and components unless a feature clearly needs client-side interactivity.

## Frontend

- Use Astro as the primary frontend framework.
- Use Svelte only for dynamic islands that need client-side state, events, or richer interaction.
- For Svelte components, use Bits UI for accessible primitives and interactive controls.
- Write Svelte components using Svelte 5 patterns: `$props`, `$state`, typed `Snippet` children with `{@render children?.()}`, and event attributes such as `onclick`. Avoid legacy Svelte 4 patterns such as `<slot>`, `export let`, `on:` event directives, and `createEventDispatcher` unless maintaining an existing legacy component.
- For Astro components, do not introduce a component library. Keep markup local, simple, and tailored to the site.
- Keep islands small and purposeful. Avoid turning static content into hydrated components unnecessarily.

### Component Boundaries

- Create components for repeated content cards.
- Create components for self-contained interactive UI.
- Create components for reusable layout primitives, like Section, Container, Grid, or Card.
- Create components for UI with reusable complexity, such as accessibility logic, image handling, fallback states, or local behavior.
- Do not create components only to move a one-off chunk of page markup out of a page. Keep page-specific, non-reusable sections inline unless they meet one of the criteria above.

## Styling

- Use Tailwind as the default styling system.
- Store reusable brand and site colors as Tailwind `@theme` tokens in `src/styles/global.css`, then use semantic utilities such as `bg-brand-purple`, `text-site-muted`, and `border-site-line` instead of hardcoded hex colors.
- Use SCSS, not indented Sass syntax, only for overrides or cases where Tailwind is genuinely awkward.
- Keep styling close to the component/page it supports unless a shared pattern has clearly emerged.
- For repeated Tailwind patterns, prefer small Astro components or partials over exported class-string aliases.
- Avoid broad global CSS unless it is for base typography, tokens, resets, or necessary integration overrides.

## Code Quality

- Keep code focused on a single responsibility. Pages compose content and sections; components encapsulate reusable UI; utilities hold shared logic.
- Follow DRY, but do not abstract prematurely. Extract shared code when duplication creates maintenance risk or obscures intent.
- Do not add one-off hacks, hardcoded special cases, or brittle fixes that only address the immediate symptom. Understand the underlying cause and make the smallest durable change.
- Prefer clear data structures and content-driven rendering over repeated markup or hardcoded branching.
- Keep components small enough to read comfortably. Split large components when separate concerns are being mixed.
- Avoid adding dependencies unless they solve a real problem and fit the established stack.
- Keep changes scoped to the request. Do not do unrelated refactors while implementing a feature or fix.

## Accessibility

- Use semantic HTML by default, including page landmarks such as `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.
- Use native interactive elements: `button` for actions, `a` for navigation, and form controls for input. Do not use clickable `div` or `span` elements.
- Preserve a logical heading hierarchy. Do not skip heading levels for visual styling.
- Provide meaningful `alt` text for informative images and empty `alt` text for decorative images.
- Label form inputs with visible labels. Do not rely on placeholders as the only label.
- Ensure icon-only controls have accessible names, such as `aria-label`, and hide decorative icons from assistive technology.
- Write descriptive link text that explains the destination or action.
- Support keyboard navigation by relying on native controls and preserving visible focus states.
- Include a skip link to the main content when adding or changing site-level layouts.
- Use landmarks and labels, such as `aria-label` on repeated navigation regions, to make page structure clear.
- Make tables accessible with captions and scoped headers when tabular data is necessary.
- Provide captions, transcripts, or equivalent alternatives for meaningful audio or video content.
- Prefer native HTML first. Use ARIA when native HTML cannot express the required role, state, relationship, or accessible name.

## Testing

- Use Vitest for JavaScript and TypeScript tests.
- Add or update tests for reusable utilities, data transforms, dynamic Svelte behavior, and regressions that are practical to cover.
- For mostly static Astro pages, prefer targeted tests for logic and build verification over brittle snapshot tests.
- When fixing a bug, add a regression test unless the behavior is purely visual or impractical to exercise.
- Run the relevant test/build command before finishing when the change affects behavior.

## Backend

This project is expected to be mostly static, so a backend is likely unnecessary.

If backend functionality is needed, use Rust with Axum. Keep backend code separate from the Astro frontend and avoid adding server infrastructure unless the feature requires it.

## Development

Use pnpm as the package manager for this project.

When starting the dev server, use background mode:

```sh
pnpm astro dev --background
```

Manage the background server with:

```sh
pnpm astro dev stop
pnpm astro dev status
pnpm astro dev logs
```

- If an agent starts a dev server, watcher, browser helper, benchmark loop, or anything long-running, it must track the PID/session and clean it up before finishing, unless the user explicitly asks to keep it running.

Common commands:

```sh
pnpm build
pnpm preview
pnpm astro
```

## Commits

- Use Conventional Commits for commit messages.
- Use one of these types: `fix:`, `feat:`, `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`.
- Provide a scope whenever possible, such as `feat(nav):`, `fix(content):`, or `test(utils):`.
- For project-wide commits, omit the scope.
- For commits that intentionally combine multiple change types, join them with spaced plus signs, such as `feat + refactor:`.
- You must mark breaking changes with `!`, such as `feat(api)!:` or `refactor(routes)!:`.
- Do not omit `!` when a change is breaking.
- Refer to https://www.conventionalcommits.org for details when unsure.

## Documentation

Full Astro documentation: https://docs.astro.build

Primary stack documentation:

- Astro: https://docs.astro.build
- Svelte: https://svelte.dev/docs
- Tailwind CSS: https://tailwindcss.com/docs
- SCSS: https://sass-lang.com/documentation/
- Bits UI: https://bits-ui.com/docs

Consult these Astro guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

Consult the relevant Svelte, Tailwind CSS, SCSS, or Bits UI documentation before changing code that depends on those tools.
