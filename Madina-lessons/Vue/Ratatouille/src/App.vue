<script setup>
import MainLayout from './components/layouts/MainLayout.vue';
import { provide } from 'vue';

const links = [
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    linkText: "MENU",
    link: "/menu",
  },
  {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    linkText: "RESERVATION",
    link: "/book-a-table",
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
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
