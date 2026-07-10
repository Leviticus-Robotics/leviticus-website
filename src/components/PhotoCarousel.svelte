<script lang="ts">
	import type { LightboxPhoto } from "../types/content";
	import { withBase } from "../utils/paths";
	import Carousel from "./Carousel.svelte";
	import PhotoLightbox from "./PhotoLightbox.svelte";

	interface Props {
		photos: LightboxPhoto[];
		id: string;
		label: string;
		lightboxLabel?: string;
		previousLabel?: string;
		nextLabel?: string;
	}

	let {
		photos,
		id,
		label,
		lightboxLabel = "Photo detail",
		previousLabel = "Previous photo",
		nextLabel = "Next photo",
	}: Props = $props();
	let lightbox: ReturnType<typeof PhotoLightbox>;

	const resolvePhoto = (photo: LightboxPhoto): LightboxPhoto => ({
		...photo,
		image: withBase(photo.image),
		label: photo.label ?? lightboxLabel,
	});
</script>

<Carousel {id} {label} {previousLabel} {nextLabel}>
	{#each photos as photo, index}
		<figure
			class="m-0 min-w-[calc((100%-4rem)/5)] snap-start overflow-hidden rounded-md border border-brand-blue/15 bg-white shadow-sm max-[980px]:min-w-[calc((100%-2rem)/3)] max-[640px]:min-w-[78vw]"
		>
			<button
				class="block h-full w-full cursor-zoom-in bg-white text-left transition hover:bg-site-blue-soft focus:outline-2 focus:outline-offset-[-6px] focus:outline-brand-blue"
				type="button"
				aria-label={`View details for ${photo.alt}`}
				onclick={() => lightbox.openPhoto(resolvePhoto(photo))}
			>
				<img
					class="aspect-4/3 h-full w-full object-contain p-2"
					src={withBase(photo.image)}
					alt={photo.alt}
					loading={index === 0 ? "eager" : "lazy"}
				/>
			</button>
		</figure>
	{/each}
</Carousel>

<PhotoLightbox bind:this={lightbox} label={lightboxLabel} />
