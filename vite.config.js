import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
})
