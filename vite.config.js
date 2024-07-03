import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/4-Feminists/",
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', 
      },
    },
  },
  publicDir: 'public',
})
