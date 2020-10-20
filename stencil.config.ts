import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: {
        globPatterns: ['**/*.{js,css,json,html,ico,png}'],
      },
      baseUrl: process.env.BASE_URL || 'https://localhost:1234/',
      prerenderConfig: './prerender.config.ts',
    },
  ],
  plugins: [
    sass({}),
    postcss({
      plugins: [require('tailwindcss')('./tailwind.config.js')],
    }),
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
};
