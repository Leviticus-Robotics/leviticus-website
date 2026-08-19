// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	fonts: [{
		provider: fontProviders.fontsource(),
		name: 'Inter',
		cssVariable: '--font-inter',
		styles: ['normal'],
		weights: ['100 900'],
	}],
	integrations: [svelte()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
