import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import manifest from './manifest.ff.config'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      tsconfigPaths(),
      react({
        babel: {
          plugins: [jotaiDebugLabel, jotaiReactRefresh],
        },
      }),
      crx({ manifest }),
    ],
    // build: {
    //   outDir: 'dist_ff', // Альтернативная директория вывода
    //   manifest: true, // Включение генерации манифеста
    //   manifestFilename: 'alt-manifest.json', // Изменение имени манифеста
    //   rollupOptions: {
    //     input: ['app.html'],
    //   },
    // },
    build: {
      outDir: 'dist_ff',
      rollupOptions: {
        input: ['app.html'],
      },
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    server: {
      strictPort: true,
      port: 5173,
      hmr: {
        clientPort: 5173,
      },
    },
  }
})
