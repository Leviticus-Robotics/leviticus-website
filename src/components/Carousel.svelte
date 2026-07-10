<script lang="ts">
	import { onMount, type Snippet } from "svelte";

	interface Props {
		children: Snippet;
		id: string;
		label: string;
		previousLabel?: string;
		nextLabel?: string;
		step?: number;
	}

	let {
		children,
		id,
		label,
		previousLabel = "Previous items",
		nextLabel = "Next items",
		step = 0.86,
	}: Props = $props();
	let viewport: HTMLDivElement;
	let canScrollPrevious = $state(false);
	let canScrollNext = $state(false);

	const updateControls = () => {
		const maximumScroll = viewport.scrollWidth - viewport.clientWidth;

		canScrollPrevious = viewport.scrollLeft > 1;
		canScrollNext = viewport.scrollLeft < maximumScroll - 1;
	};

	const scroll = (direction: -1 | 1) => {
		viewport.scrollBy({
			left: direction * viewport.clientWidth * step,
			behavior: "smooth",
		});
	};

	onMount(() => {
		updateControls();
		viewport.addEventListener("scroll", updateControls, { passive: true });

		const resizeObserver =
			typeof ResizeObserver === "undefined" ? null : new ResizeObserver(updateControls);
		resizeObserver?.observe(viewport);

		return () => {
			viewport.removeEventListener("scroll", updateControls);
			resizeObserver?.disconnect();
		};
	});
</script>

<div data-carousel={id}>
	<div class="mb-4 flex justify-end gap-2" role="group" aria-label={`${label} controls`}>
		<button
			class="inline-grid size-11 place-items-center rounded-full border border-brand-blue/20 bg-white text-brand-blue shadow-sm transition hover:border-brand-blue/40 hover:bg-brand-blue hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-brand-blue/20 disabled:hover:bg-white disabled:hover:text-brand-blue"
			type="button"
			aria-label={previousLabel}
			aria-controls={`${id}-viewport`}
			disabled={!canScrollPrevious}
			onclick={() => scroll(-1)}
		>
			<svg
				class="size-5"
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m15 18-6-6 6-6"></path>
			</svg>
		</button>
		<button
			class="inline-grid size-11 place-items-center rounded-full border border-brand-blue/20 bg-white text-brand-blue shadow-sm transition hover:border-brand-blue/40 hover:bg-brand-blue hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-brand-blue/20 disabled:hover:bg-white disabled:hover:text-brand-blue"
			type="button"
			aria-label={nextLabel}
			aria-controls={`${id}-viewport`}
			disabled={!canScrollNext}
			onclick={() => scroll(1)}
		>
			<svg
				class="size-5"
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m9 18 6-6-6-6"></path>
			</svg>
		</button>
	</div>
	<div
		bind:this={viewport}
		id={`${id}-viewport`}
		class="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4"
		aria-label={label}
		role="region"
	>
		{@render children()}
	</div>
</div>
