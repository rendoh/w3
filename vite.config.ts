import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  base: '/w3/',
  plugins: [glsl(), wasm()],
});
