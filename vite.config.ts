import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Store: path.resolve(__dirname, 'src/Store'), // Alias for Store
      components: path.resolve(__dirname, 'src/components'), // Alias for components
    },
  },
});
