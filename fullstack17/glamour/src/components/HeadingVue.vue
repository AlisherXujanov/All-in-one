<script setup>
import { computed } from 'vue';
// props =>  are the data that is passed from the
//           parent component to the child component
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
    default: null,
  }
})

{/* <heading-vue heading='...' /> */ }

const devidedHeading = computed(() => {
  return {
    pathWithoutLastPart: props.path.split('.').slice(0, -1).join('.'),
    lastPartOfPath: props.path.split('.').pop(),
  }
})


</script>

<template>
  <div class="main-heading-wrapper">
    <h1 class="heading">{{ heading }}</h1>
    <p class="path" v-if="path">
      {{ devidedHeading.pathWithoutLastPart }}
      <span :class="devidedHeading.pathWithoutLastPart ? 'text-danger' : ''">
        <span v-if="path.includes('.')">. </span>
        {{ devidedHeading.lastPartOfPath }}
      </span>
    </p>
  </div>
</template>


<style lang='scss' scoped>
.main-heading-wrapper {
  padding: 1rem;
  @include flex(column, flex-start, flex-start);
  background-color: $violet-lighter;

  .heading {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 700;
    color: $dark-blue;
    margin-bottom: 0.5rem;
  }

  .path {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    font-size: 1rem;
    color: $dark-blue;

    .text-danger {
      color: $red;
      font-weight: 500;
    }
  }
}

@media screen and (min-width: 768px) {
  .main-heading-wrapper {
    padding: 2rem;

    .heading {
      font-size: 2.5rem;
    }
  }
}

@media screen and (min-width: 1024px) {
  .main-heading-wrapper {
    padding: 3rem;

    .heading {
      font-size: 3rem;
    }

    .path {
      font-size: 1.1rem;
    }
  }
}

@media screen and (min-width: 1440px) {
  .main-heading-wrapper {
    padding: 4rem;

    .heading {
      font-size: 3.5rem;
    }
  }
}
</style>
