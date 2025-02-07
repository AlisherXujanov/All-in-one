<script setup>
import { RouterView } from 'vue-router'
import FooterVue from '../FooterVue.vue'
import NavVue from '../NavVue.vue'

</script>


<template>
  <div>
    <header>
      <NavVue />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <FooterVue />
    </footer>
  </div>
</template>


<style lang="scss" scoped></style>
