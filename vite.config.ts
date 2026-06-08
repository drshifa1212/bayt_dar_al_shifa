import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bayt_dar_al_shifa/',
  plugins: [react()],
})