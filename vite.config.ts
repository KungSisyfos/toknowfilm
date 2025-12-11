import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'legacy-js-api',
          'import',
          'global-builtin', 
          'css-function-mixin',
          'color-functions',
          'slash-div',  
          'mixed-decls',
          'abs-percent' 
        ]
      }
    }
  }
});

