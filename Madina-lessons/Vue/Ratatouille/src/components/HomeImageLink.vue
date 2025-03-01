<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ModalView from "@/components/ModalView.vue"


const showModal = ref(false)
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

function toggleShowModal(bool) {
  showModal.value = bool
}
</script>

<template>
  <div class="image-link-wrapper">
    <img :src="image" width="100%" height="100%" @click="callEvent">

    <!-- ======================================================================== -->
    <!-- ================================= MODAL VIEW =========================== -->
    <button class="open-modal" @click="toggleShowModal(true)">Open modal</button>
    <modal-view v-if="showModal" @close-modal="toggleShowModal(false)">
      <h2>{{ linkText }}</h2>
    </modal-view>
    <!-- ======================================================================== -->
    <!-- ======================================================================== -->

    <RouterLink :to="link" class="image-link">
      <div class="link-text-wrapper">
        <p>{{ linkText }}</p>
        <span>&rArr;</span>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.image-link-wrapper {
  position: relative;

  .open-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

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
}
</style>
