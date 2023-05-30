import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/'],
    }),
    banner(
      `/**\n * ${packageJson.name} v${
        packageJson.version
      }\n * (c) 2020-${new Date().getFullYear()} by ${
        packageJson.author
      }\n * Released under the ${packageJson.license} License.\n */`,
    ),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve('src', 'setupTests.ts'),
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ReactCookieNotice',
      formats: ['es', 'umd'],
      fileName: (format) => `react-cookienotice.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
