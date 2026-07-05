// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://leviticus-robotics.github.io',
	base: '/leviticus-website',
	vite: {
		plugins: [tailwindcss()],
	},
});
