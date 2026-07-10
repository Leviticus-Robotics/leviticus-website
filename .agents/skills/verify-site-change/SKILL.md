---
name: verify-site-change
description: Verify frontend changes end to end with static checks, tests, builds, browser interaction, responsive inspection, console review, and process cleanup. Use after changing Astro pages, Svelte islands, shared components, styles, content rendering, navigation, accessibility behavior, or other user-visible website functionality.
---

# Verify Site Change

Read the repository's `AGENTS.md` and package scripts first. Scale verification to the affected behavior while completing every applicable step below.

## Run Automated Checks

Run the repository's configured commands in this order:

1. Type or static checking.
2. Targeted tests, then the full test command when practical.
3. Production build.

Do not install missing tooling silently unless implementing or restoring that tooling is part of the task. Report environmental failures separately from code failures.

## Verify In A Browser

For user-visible or interactive changes:

1. Check whether the expected development server is already running.
2. Start one tracked server using the repository's documented command when needed.
3. Open the affected local route in the available browser-control tool.
4. Exercise each changed interaction and verify its resulting state.
5. Inspect relevant desktop and mobile layouts when responsive behavior could change.
6. Check browser console errors.
7. Confirm asset URLs and important navigation targets resolve.

Use DOM state for behavior and screenshots for visual layout. Avoid brittle exhaustive page scraping.

## Clean Up

Stop every server, watcher, or helper started during verification unless the user explicitly requested it remain running. Confirm the process stopped before finishing.

## Report Results

Report commands and browser behaviors that passed. For failures, distinguish among:

- A code defect that remains unresolved.
- A pre-existing failure unrelated to the change.
- An environmental blocker such as missing dependencies, unavailable browser control, port conflicts, permissions, or insufficient disk space.

Never claim a check passed when it was skipped or blocked.
