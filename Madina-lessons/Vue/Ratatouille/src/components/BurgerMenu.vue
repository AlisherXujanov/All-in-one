<script setup>
const emit = defineEmits(['close-menu'])
</script>


<template>
  <div class="burger-menu-wrapper">
    <button class="close-burger-menu" @click="emit('close-menu')">&times;</button>
    <h1>MENU</h1>
    <h1>RESERVATION</h1>
    <h1>ABOUT</h1>
    <h1>CONTACT</h1>
    <h1>BLOG</h1>
  </div>
</template>


<style lang="scss" scoped>
.burger-menu-wrapper {
  h1 {
    font-size: 2.5em;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  color: $light;
  @include flex(column, $gap: 20px);

  .close-burger-menu {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: $light;
  }
}
</style>
