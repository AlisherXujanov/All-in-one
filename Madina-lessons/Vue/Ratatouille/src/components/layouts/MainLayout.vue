<script setup>
import { RouterView } from 'vue-router';
import TopNavbar from '../TopNavbar.vue';
</script>


<template>
  <div>
    <header class="main-header">
      <TopNavbar />
    </header>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>


<style lang="scss" scoped></style>
