import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4010,
    // In development the Express shape server (`yarn start` at the root) answers the API.
    proxy: { '/api': 'http://localhost:30916' }
  },
  base: '/'
});
