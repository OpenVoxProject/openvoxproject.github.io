import path from 'node:path';
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      resolve: {
        alias: {
          '/src': path.resolve('.', 'src'),
        },
      },
    },
  });

  return {
    dir: {
      input: '.',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['njk'],
  };
}
