<script setup>
import { RouterView } from 'vue-router'
import FooterVue from '../FooterVue.vue'
import NavVue from '../NavVue.vue'
import { useAuth } from '@/composables/useAuth.js'
import SpinnerVue from "@/components/SpinnerVue.vue";
import { provide } from 'vue'

const { user, isLoading } = useAuth()
provide('auth', { user, isLoading })
</script>


<template>
  <div>
    <header>
      <NavVue />
    </header>

    <main v-if="isLoading">
      <SpinnerVue />
    </main>
    <main>
      <RouterView />
    </main>

    <footer>
      <FooterVue />
    </footer>
  </div>
</template>


<style lang="scss"></style>
