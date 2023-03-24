import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'
import { resolve } from 'path'

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1920,
  viewportUnit: 'vw',
})

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      //ant-design-vue
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 9000
  },
  resolve: {//@相对路径
    alias: {
      '@': resolve('src')
    }
  },
  css: {//移动端rem适配
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
})
