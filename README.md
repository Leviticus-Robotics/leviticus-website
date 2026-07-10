# Leviticus Website

Website for FTC Team 36099 Leviticus.

The site is a mostly static Astro project for team information, mission content, sponsor information, and contact links.

## Stack

- Astro for pages, layouts, and static components.
- Svelte 5 islands and Bits UI for interactive controls.
- Tailwind CSS for styling.
- pnpm for package management.

## Styling Pattern

Use Tailwind utilities directly in Astro markup for page-specific styling. When a Tailwind pattern repeats across pages, prefer a small Astro component in `src/components/ui/` instead of exporting reusable class-string aliases from a utility file.

Scoped component CSS is still appropriate for custom illustrations or awkward one-off visuals, such as the robot field drawing.

## Project Structure

```text
src/
├── components/
│   ├── ui/                 Shared Astro UI partials
│   ├── Carousel.svelte
│   ├── PhotoCarousel.svelte
│   ├── PhotoLightbox.svelte
│   ├── TeamMemberCard.astro
│   └── SiteNav.astro
├── data/                   Structured team and sponsor data
├── layouts/                Shared page layouts
├── pages/                  Astro routes
└── styles/                 Global Tailwind import and base styles
```

## Local Setup

### Prerequisites

- Node.js 22.12 or newer
- pnpm 11

Clone the repository, install its dependencies, and start the development server:

```sh
git clone <repository-url>
cd leviticus-website
pnpm install
pnpm dev
```

Astro serves the site at `http://localhost:4321` by default. The development server watches local files and refreshes the site as they change. Press `Ctrl+C` to stop it.

## Available Commands

```sh
pnpm dev      # Start the local development server
pnpm check    # Check Astro and TypeScript diagnostics
pnpm test     # Run the Vitest test suite
pnpm build    # Create a production build
pnpm preview  # Preview a production build locally
```
