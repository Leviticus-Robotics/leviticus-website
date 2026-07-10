---
name: review-component-boundaries
description: Review frontend component responsibilities, ownership, composition, and APIs before implementation. Use when creating, extracting, splitting, combining, or substantially refactoring Astro or Svelte components, especially interactive UI, shared primitives, child snippets, cross-component coordination, DOM queries, or document-level event handling.
---

# Review Component Boundaries

Review the surrounding code and repository guidance before editing. Keep the review proportional to the change; do not turn a small component into an architecture exercise.

## Define Ownership

For each affected component, identify:

- Its single responsibility.
- The state and DOM it owns.
- The controls and event handlers it renders.
- The behavior it exposes to callers.
- Its current or realistic reuse cases.

Keep event handlers with the component that renders the control. Keep state with the component responsible for presenting and changing it.

## Check Separation Of Concerns

Split responsibilities when one component both presents its own UI and discovers, parses, or coordinates unrelated UI elsewhere.

Prefer small typed props, callbacks, bindings, or public component methods for cross-component coordination. Preserve typed source data instead of serializing it into DOM attributes and reconstructing it later.

## Check Encapsulation

Operate on owned DOM only. Reject document-wide selectors, listeners, and `data-*` protocols unless the behavior is inherently document-wide and the repository has no narrower owner.

Accept child snippets only when the component owns child layout or composition. Do not wrap unrelated controls merely to grant them access to state or behavior.

## Choose The Boundary

- Keep one-off static page sections inline.
- Extract repeated content cards.
- Extract reusable layout primitives.
- Extract self-contained interactive UI.
- Extract reusable complexity such as accessibility, fallback, or image behavior.
- Keep Astro as the default; use Svelte only when client-side state or events require it.

Before editing, state the chosen ownership and API in one or two sentences. Then implement the smallest boundary that satisfies those decisions.
