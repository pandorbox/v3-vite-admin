# Vue 3 + Vite

# vite 新建项目

pnpm create vite@latest projetName

# 安装依赖

pnpm install

# 安装 less

pnpm install less -D

# 安装 scss、sass

pnpm install sass -D

# 安装 router

pnpm install router -S

# 安装 pinia

pnpm install pinia -S

# 安装 axios

pnpm install axios -S

### 移动端适配依赖

<a>
pnpm install postcss-px-to-viewport -S
pnpm install amfe-flexible -S
</a>

### 针对 vant 使用 375px 屏宽 适配依赖

pnpm install cnjm-postcss-px-to-viewport -S

### 解决 vite 不能用@ 安装 path

pnpm install --save-dev @types/node

### vite.config.js

<script>
 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'
import { resolve } from 'path'

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth:375,
  viewportUnit: 'vw'
})

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      //ant-design-vue
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [AntDesignVueResolver()],
    }),
  ],
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

  </script>
