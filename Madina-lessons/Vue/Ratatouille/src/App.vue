<script setup>
import MainLayout from './components/layouts/MainLayout.vue';
import { provide } from 'vue';
import mainBgImage from '@/assets/images/main-bg.png';

const links = [
  {
    image:` mainBgImage`,
    linkText: "MENU",
    link: "/menu",
  },
  {
    image: mainBgImage,
    linkText: "RESERVATION",
    link: "/book-a-table",
  },
  {
    image: mainBgImage,
    linkText: "OUR RESTAURANT",
    link: "/about",
  }
]

provide("links", links)


</script>

<template>
  <div>
    <MainLayout />
  </div>
</template>

<style scoped></style>
