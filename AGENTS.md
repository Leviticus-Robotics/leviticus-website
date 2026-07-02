# AGENTS.md

Guidance for agents working in this repository.

## Project

This is the website for FTC team 36099 Leviticus.

The site should be treated primarily as a static marketing/content website, not a full web app. Prefer simple Astro pages, layouts, and components unless a feature clearly needs client-side interactivity.

## Frontend

- Use Astro as the primary frontend framework.
- Use Svelte only for dynamic islands that need client-side state, events, or richer interaction.
- For Svelte components, use Bits UI for accessible primitives and interactive controls.
- For Astro components, do not introduce a component library. Keep markup local, simple, and tailored to the site.
- Keep islands small and purposeful. Avoid turning static content into hydrated components unnecessarily.

## Styling

- Use Tailwind as the default styling system.
- Use SCSS, not indented Sass syntax, only for overrides or cases where Tailwind is genuinely awkward.
- Keep styling close to the component/page it supports unless a shared pattern has clearly emerged.
- Avoid broad global CSS unless it is for base typography, tokens, resets, or necessary integration overrides.

## Code Quality

- Keep code focused on a single responsibility. Pages compose content and sections; components encapsulate reusable UI; utilities hold shared logic.
- Follow DRY, but do not abstract prematurely. Extract shared code when duplication creates maintenance risk or obscures intent.
- Do not add one-off hacks, hardcoded special cases, or brittle fixes that only address the immediate symptom. Understand the underlying cause and make the smallest durable change.
- Prefer clear data structures and content-driven rendering over repeated markup or hardcoded branching.
- Keep components small enough to read comfortably. Split large components when separate concerns are being mixed.
- Preserve accessibility and semantic HTML by default, especially for navigation, headings, buttons, links, media, and forms.
- Avoid adding dependencies unless they solve a real problem and fit the established stack.
- Keep changes scoped to the request. Do not do unrelated refactors while implementing a feature or fix.

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
