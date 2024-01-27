import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hackcouver-2024/', // replace 'your-repo-name' with the name of your GitHub repository
  build: {
    assetsDir: 'assets',
  },
});