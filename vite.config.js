import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base: "/react-project/",
  plugins: [react()],
  test: {

    globals: true,

    environment: 'jsdom',

  }
})
