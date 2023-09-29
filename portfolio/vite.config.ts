import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three']
	},
	server: {
		watch: {
			usePolling: true
		},
		host: true,
		strictPort: true,
		port: +(process.env.PORT ?? '3000')
	},
	resolve: {
		alias: {
			'@styles': path.resolve('./src/styles'),
			'@stores': path.resolve('./src/stores'),
			'@models': path.resolve('./src/models'),
			'@components': path.resolve('./src/components'),
		}
	}
});
