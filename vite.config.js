import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'memory-timeline': resolve(__dirname, 'memory-timeline.html'),
        reasons: resolve(__dirname, 'reasons.html'),
      },
    },
  },
})
