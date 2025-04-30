<script setup>
import { RouterView } from 'vue-router'
import FooterVue from '../FooterVue.vue'
import NavVue from '../NavVue.vue'
import { useAuth } from '@/composables/useAuth.js'
import SpinnerVue from "@/components/SpinnerVue.vue";
import { provide, onMounted } from 'vue'
import { AUTH } from '@/store';
import { useStore } from 'vuex'

const { user, isLoading } = useAuth()
const store = useStore()

// provide("KEY", "VALUE")
provide(AUTH, { user, isLoading })
onMounted(() => { store.dispatch('fetchProducts') })


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
