<script setup>
import HeadingVue from '@/components/HeadingVue.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const count = computed(() => store.state.count)

function handleClick(e) {
  const name = e.target.name
  if (name == 'inc') {
    store.commit('increment', 2)
  }
  else if (name == 'dec') {
    store.commit('decrement', 3)
  }
  else {
    throw new Error('Invalid button name')
  }
}
</script>

<template>
  <div>
    <heading-vue heading="About Us" path="Home . Pages . About Us" />

    <div class="box">
      <h1>Count: {{ count }}</h1>
      <button @click="handleClick" name="dec">➖ Decrement</button>
      <button @click="handleClick" name="inc">➕ Increment</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 50%;
  margin: 0 auto;
  background-color: #333;
  color: snow;
  padding: 20px;
  text-align: center;

  button {
    margin-right: 10px;
  }
}
</style>
