import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
    ],
  },
});
