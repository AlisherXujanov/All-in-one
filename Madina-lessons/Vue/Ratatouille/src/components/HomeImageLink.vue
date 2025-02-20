<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: {
    type: String,
    required: false,
    default: '/'
  },
  image: {
    type: String,
    required: false,
    default: '/'
  },
  linkText: {
    type: String,
    required: false,
    default: '/'
  },
})


// in order to create a custom event to use in emits we can use the following syntax:
// const emit = defineEmits(['custom-event'])
// then we can use it like this:
// emit('custom-event', payload)
// and we can listen to it in the parent component like this:
// <HomeImageLink @custom-event="handleCustomEvent" />

const emit = defineEmits(['my-event'])



const payload = {
  id: '...',
  message: parseInt(Math.random() * 1000),
  date: "...",
}
function callEvent() {
  emit('my-event', payload)
}

</script>

<template>
  <img :src="image" width="100%" height="100%" @click="callEvent">
  <RouterLink :to="link" class="image-link">
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
