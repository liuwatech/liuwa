import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import newsPlugin from './news-plugin'

export default defineConfig({
  plugins: [react(), tailwindcss(), newsPlugin()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
