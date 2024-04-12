import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  base: '/w3/',
  plugins: [glsl(), wasm(), topLevelAwait()],
});
