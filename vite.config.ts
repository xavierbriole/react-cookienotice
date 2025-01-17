import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { clearCacheOnStart: true },
        }),
        new TypeScriptLinter(),
      ],
      build: {
        includeMode: 'filesInFolder',
      },
    }),
    dts(),
    banner(
      `/**\n * ${packageJson.name} v${
        packageJson.version
      }\n * (c) 2020-${new Date().getFullYear()} by ${
        packageJson.author
      }\n * Released under the ${packageJson.license} License.\n */`,
    ),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'ReactCookieNotice',
      formats: ['es', 'umd'],
      fileName: (format) => `react-cookienotice.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
}))
