<script setup>
import { provide } from 'vue';
import { RouterView } from 'vue-router';
import TopNavbar from '../TopNavbar.vue';
import { useAuth } from '@/composables/useAuth';


const { user, isLoading } = useAuth()
provide("user", { user, isLoading })
// const { user, isLoading } = inject('user')

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
