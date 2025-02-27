import { resolve } from 'node:path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve('src', 'setupTests.ts'),
    coverage: {
      exclude: [
        '.storybook/**',
        '**/*.stories.tsx',
        'src/index.ts',
        '**/*.test.{ts,tsx}',
        '**/*.d.ts',
        '**/{eslint,vite,vitest}.config.{?(c|m)js,ts}',
      ],
    },
  },
})
