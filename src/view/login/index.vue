<template>
  <div class="page">
    <Button class="bottom" size="large" type="success" text="登录" @click="onLogin" />
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const { proxy } = getCurrentInstance()
onMounted(() => {
  console.log(useUserStore().getToken)
})

let onLogin = () => {
  useUserStore().userLogin()
  proxy.$showNotify({ message: "用户登录" })
}

</script>
<style scoped>
.bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 750px;
  height: 100px;
  font-size: 30px;
}
</style>
