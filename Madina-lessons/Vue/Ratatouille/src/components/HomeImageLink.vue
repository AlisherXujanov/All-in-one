<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: String,
  image: String,
  linkText: String
})

</script>

<template>
  <RouterLink :to="link" class="image-link">
    <img :src="image" width="100%" height="100%">
    <div class="link-text-wrapper">
      <p>{{ linkText }}</p>
      <span>&rArr;</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.image-link {
  position: relative;
  height: calc(100vh / 3);
  background-color: $dark;

  img {
    border-bottom-right-radius: 100px;
  }

  .link-text-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: $dark;
    color: $text-color;
    padding: 10px;
    border-top-left-radius: 20px;
    @include flex();

  }
}
</style>
