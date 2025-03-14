import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
		},
	},
})
