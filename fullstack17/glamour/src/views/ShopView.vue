<script setup>
import { reactive, onMounted, ref, defineAsyncComponent, provide, onBeforeUnmount, computed } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'

// Convert synchronous imports to async components
const SpinnerVue = defineAsyncComponent(() => import('@/components/SpinnerVue.vue'))
const ItemsWrapper = defineAsyncComponent(() => import('@/components/products/ItemsWrapper.vue'))

import { AnOutlinedUnorderedList } from '@kalimahapps/vue-icons'
import { BsGridFill } from '@kalimahapps/vue-icons'


import { useStore } from 'vuex'
const vuex_store = useStore()

const store = reactive({
  items: [],
  itemsPerPage: 4
})
const loaded = ref(true) // Загружены ли данные
const gridItems = ref(false)
const activePage = ref(1) // defaults to first page


function toggleGridItems(bool) {
  gridItems.value = bool
  console.log("gridItemsOnShop: ", gridItems.value)
}

onMounted(() => {
  vuex_store.dispatch('fetchProducts')
  store.items = vuex_store.state.products
  gridItems.value = localStorage.getItem("gridItemsOnShop") || false
})
onBeforeUnmount(() => {
  localStorage.setItem("gridItemsOnShop", gridItems.value)
})


function toggleLike(itemID) {
  const item = store.items.find(i => i.id == itemID)
  item.liked = !item.liked
}

function sortItemsBy(e) {
  switch (e.target.value) {
    case "low-price":
      store.items.sort((a, b) => a.price - b.price)
      break
    case "high-price":
      store.items.sort((a, b) => b.price - a.price)
      break
    case "newest":
      store.items.sort((a, b) => b.id - a.id)
      break
    case "oldest":
      store.items.sort((a, b) => a.id - b.id)
      break
    default:
      store.items.sort((a, b) => a.id - b.id)
  }
}

function handlePerPage(e) {
  const perPage = e.target.value
  if (perPage > store.items.length) {
    alert("The value is too big")
    e.target.value = store.items.length
  } else if (perPage < 0) {
    alert("The value is too small")
    e.target.value = 0
  }
}


function range(start, end = null) {
  if (end === null) {
    end = start
    start = 0
  }
  return Array(end - start).fill().map((_, idx) => start + idx)
  // range(10)  =>  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // range(5, 10)  =>  [5, 6, 7, 8, 9]
}

const pagesToShow = computed(() => {
  let x = range(1, Math.ceil(store.items?.length / store.itemsPerPage) + 1)
  console.log(x)
  return x
})

function activatePage(страница) {
  // 2 для каждой страницы
  activePage.value = страница
  // страница==2   =>  4
  // страница==4   =>  8
}

const slicedItems = computed(() => {
  const start = (activePage.value - 1) * store.itemsPerPage
  const end = start + store.itemsPerPage
  return store.items.slice(start, end)
})

</script>

<template>
  <div>
    <heading-vue heading="Shop" path="Shop . Pages . Shop" />

    <div class="filters-wrapper">
      <div class="left">
        <h4>Ecommerce Accessories & Fashion Item</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div class="right">
        <div class="per-page">
          <p>Per page:
            <input id="per-page-input" type="number" min="1" :max="store.items.length" @change="handlePerPage"
              v-model="store.itemsPerPage">
          </p>
        </div>

        <div class="sort-by">
          <p>Sort By: </p>
          <select @change="sortItemsBy">
            <option value="low-price">Price: Low to High</option>
            <option value="high-price">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

        <div class="view">
          <p>
            View:
            <span @click="toggleGridItems(true)">
              <BsGridFill />
            </span>
            <span @click="toggleGridItems(false)">
              <AnOutlinedUnorderedList />
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="paginator-wrapper" v-if="store.items.length > store.itemsPerPage">
      <div
        v-for="page in pagesToShow"
        :key="page"
        @click="activatePage(page)"
        class="paginator-number"
        :class="{ active: page === activePage }"
      >
        {{ page }}
      </div>
    </div>

    <div class="shop-list-items-wrapper">
      <div v-if="!loaded">
        <SpinnerVue />
      </div>
      <div v-else>
        <items-wrapper :items="slicedItems" :gridItems="gridItems"
          @toggle-like="toggleLike" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters-wrapper {
  width: 1141px;
  margin: 20px auto;
  padding: 20px 0;
  @include grid(2);

  .right {
    display: flex;
    justify-content: space-between;

    input {
      width: 70px;
      padding: 10px;
      border-radius: 10px;
    }

    &>div {
      display: flex;
      align-items: center;
      justify-content: center;

      &.view {
        p {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 8px;

          span {
            svg {
              cursor: pointer;
              transform: scale(1.3);
              position: relative;
              bottom: 3px;
            }
          }
        }
      }
    }

    select {
      position: relative;
      left: 10px;
      bottom: 8px;
      padding: 5px;
      border-radius: 5px;
    }
  }
}

.paginator-wrapper {
  @include flex();

  .paginator-number {
    padding: 5px;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    background-color: #eee;
    cursor: pointer;
    @include flex();


    &.active,
    &:hover {
      background-color: $red;
      color: $light;
      border: 1px solid $red;
      outline: 3px solid #FB2E8650;
    }
  }
}

.shop-list-items-wrapper {
  width: 1141px;
  margin: 0 auto;
}
</style>
