<script setup name="MainSidebar">
const router = useRouter()
const onMenu = (path) => {
    router.push({
        path: path
    })
}
</script>
<template>
    <transition name="main-sidebar">
        <div class="menu">
            <span type="primary" @click="onMenu('/menu1')">menu1</span>
            <span @click="onMenu('/menu2')">menu2</span>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #999;

    .menu-item {
        line-height: 200px;
    }
}
</style>
