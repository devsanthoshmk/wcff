import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'


export default defineConfig({
  plugins: [vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'internship',
          dest: ''  // Copies folder to the root of the build output
        },
        {
          src: 'assets',
          dest: ''  // Copies folder to the root of the build output
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});