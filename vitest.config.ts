import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: [
        'node_modules/',
        'src/**/*.d.ts',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/routeTree.gen.ts',
        'src/styles.css',
        'src/router.tsx',
        '**/.storybook/**',
        '**/dist/**',
        '**/coverage/**',
        'src/test/**',
        // Exclude barrel files from coverage measurement
        'src/components/**/index.ts',
        'src/components/**/index.tsx',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      reportsDirectory: './coverage',
    },
  },
})
