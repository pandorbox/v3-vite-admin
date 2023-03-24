<script setup name="Header">
import { useUserStore } from "@/store/user"
const userStore = useUserStore()

</script>

<template>
    <transition name="header">
        <div class="header">
            {{ userStore.getToken }}
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.header {
    padding: 0;
    display: flex;
    background: #999;
}
</style>
