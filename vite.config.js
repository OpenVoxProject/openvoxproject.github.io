import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        whatIsOpenvox: resolve(__dirname, 'what-is-openvox.html'),
        whyOpenvox: resolve(__dirname, 'why-openvox.html'),
      },
    },
  },
});
