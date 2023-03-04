import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import { resolve } from 'path' 
 
const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
 
const alias: Record<string, string> = {
  '@': pathResolve("src")
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `../es/${name}/style`
        }
      ]
    }),
  ],
  resolve: {
    alias
  }
})
