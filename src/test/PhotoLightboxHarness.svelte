<script lang="ts">
	import PhotoLightbox from "../components/PhotoLightbox.svelte";
	import type { LightboxPhoto } from "../types/content";

	const photos: LightboxPhoto[] = [
		{
			image: "/robot/first.png",
			alt: "First robot",
			longDescription: "First description",
			label: "Robot detail",
		},
		{
			image: "/robot/second.png",
			alt: "Second robot",
			longDescription: "Second description",
			label: "Robot detail",
		},
	];
	let lightbox: ReturnType<typeof PhotoLightbox>;
</script>

{#each photos as photo}
	<button type="button" onclick={() => lightbox.openPhoto(photo)}>Open {photo.alt}</button>
{/each}

<PhotoLightbox bind:this={lightbox} />
