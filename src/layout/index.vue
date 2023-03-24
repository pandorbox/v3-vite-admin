<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <MenuSilder />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "./Header/index.vue"
import MenuSilder from "./MenuSilder/index.vue"
import { useUserStore } from '@/store/user';
onMounted(() => {
  console.log(useUserStore().getToken)
})

</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>
