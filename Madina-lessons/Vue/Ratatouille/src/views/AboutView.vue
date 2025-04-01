<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const count = computed(() => store.state.count)

function fetchDishes() {
  store.dispatch('fetchDishes')
}

const dishes = computed(() => store.state.dishes)
</script>

<template>
  <div class="about-page-wrapper">
    <h1 class="page-title">ABOUT</h1>

    <div class="box">
      <h1>Count: {{ count }}</h1>
      <button @click="() => store.commit('decrement', { amount: 2 })">- Decrement</button>
      <button @click="() => store.commit('increment', { amount: 4 })">+ Incement</button>
      <hr>
      <button @click="fetchDishes">Fetch dishes</button>
      <div v-if="dishes.length > 0">
        <ul>
          <li v-for="dish in dishes" :key="dish.id">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
            <p>{{ dish.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .box {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #333;
    height: 300px;
    overflow: auto;

    ul {
      margin-top: 20px;
    }
    li {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      color: snow;
      background-color: #111;
      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
