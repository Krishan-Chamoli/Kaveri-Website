import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from network
    port: 5174, // Default Vite port (optional, can be changed)
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/analytics', 'firebase/database'],
          'vendor-animation': ['gsap', '@gsap/react', 'framer-motion', 'locomotive-scroll'],
          'vendor-icons': ['react-icons'],
          'vendor-ogl': ['ogl'],
        },
      },
    },
  },
})
