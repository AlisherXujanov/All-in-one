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
  padding: 50px 370px;
  @include flex(column, flex-start, flex-start);
  background-color: $violet-lighter;
}

</style>
