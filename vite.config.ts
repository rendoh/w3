import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  base: '/w3/',
  plugins: [glsl(), topLevelAwait()],
});
