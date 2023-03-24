<template>
  <div class="components">
    <slot name="content"></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.components {
  width: 375px;
  position: fixed;
  bottom: 50px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: border-box;
}
</style>
