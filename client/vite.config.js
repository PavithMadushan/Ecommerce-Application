import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const __dirname = import.meta.dirname;
const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
