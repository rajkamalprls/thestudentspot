// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['firebase/auth'] // 👈 Tells Rollup to skip bundling this
    }
  }
});
/// <reference types="vite/client" />
