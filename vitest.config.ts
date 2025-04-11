import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => ({
  test: {
    env: loadEnv(mode, process.cwd(), ''),
    alias: {
      '@/': '/src/',
      '@payload-config': '/src/payload.config.ts',
    },
    testTimeout: 1000 * 60 * 60,
  },
}))
