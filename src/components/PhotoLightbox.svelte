<script lang="ts">
	import { Dialog } from "bits-ui";
	import type { LightboxPhoto } from "../types/content";

	interface Props {
		label?: string;
	}

	let { label = "Photo detail" }: Props = $props();
	let open = $state(false);
	let selectedPhoto = $state<LightboxPhoto | null>(null);

	export function openPhoto(photo: LightboxPhoto) {
		selectedPhoto = photo;
		open = true;
	}

	function handleOpenChange(nextOpen: boolean) {
		open = nextOpen;

		if (!nextOpen) {
			selectedPhoto = null;
		}
	}
</script>

<Dialog.Root bind:open onOpenChange={handleOpenChange}>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0 z-50 bg-site-ink/70" />
		<Dialog.Content
			class="fixed left-1/2 top-1/2 z-50 w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-site-line bg-white p-0 text-site-ink shadow-2xl focus:outline-2 focus:outline-offset-2 focus:outline-brand-blue"
		>
			{#if selectedPhoto}
				<div class="grid max-h-[calc(100vh-2rem)] overflow-hidden md:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)]">
					<div class="grid min-h-0 place-items-center bg-site-surface-soft p-4">
						<img
							class="max-h-[calc(100vh-4rem)] w-full object-contain"
							src={selectedPhoto.image}
							alt={selectedPhoto.alt}
						/>
					</div>
					<aside class="flex min-h-0 flex-col gap-4 overflow-y-auto border-t border-site-line p-6 md:border-l md:border-t-0">
						<div class="flex items-start justify-between gap-4">
							<div>
								<p class="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-brand-blue">
									{selectedPhoto.label ?? label}
								</p>
								<Dialog.Title class="mt-2 text-2xl leading-tight text-site-ink">
									{selectedPhoto.alt}
								</Dialog.Title>
							</div>
							<Dialog.Close
								class="inline-grid size-10 shrink-0 place-items-center rounded-full border border-brand-blue/20 bg-white text-brand-blue transition hover:border-brand-blue/40 hover:bg-brand-blue hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-brand-blue"
								aria-label="Close photo details"
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
									<path d="M18 6 6 18"></path>
									<path d="m6 6 12 12"></path>
								</svg>
							</Dialog.Close>
						</div>
						<Dialog.Description class="text-base leading-7 text-site-muted">
							{selectedPhoto.longDescription}
						</Dialog.Description>
					</aside>
				</div>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
