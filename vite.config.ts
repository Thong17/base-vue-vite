import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

// 👇 Auto-import Vue
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Auto-import Vue, Vue Router, etc.
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),

    // Auto-register components
    Components({
      dirs: ['src/components/shared'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
    }),
    // Tailwindcss
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
  },
})
