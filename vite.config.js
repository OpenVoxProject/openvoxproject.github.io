import { cpSync } from 'node:fs';
import { defineConfig } from 'vite';

// Jekyll auto-loads _data/*.json, so copying the manifest there lets
// _layouts/default.html look up the hashed asset filenames without a
// custom Jekyll plugin. Runs on every build, including --watch rebuilds.
function copyManifestToJekyllData() {
  return {
    name: 'copy-manifest-to-jekyll-data',
    writeBundle() {
      cpSync('assets/.vite/manifest.json', '_data/manifest.json');
    },
  };
}

export default defineConfig({
  plugins: [copyManifestToJekyllData()],
  build: {
    outDir: 'assets',
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: 'src/main.js',
    },
  },
});
