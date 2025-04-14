import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//import tailwindcss from '@tailwindcss/vite'  // これを使うと、一部のtailwindcssの設定が反映されないので使用しない

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/y2025/',
})
