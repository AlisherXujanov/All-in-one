<script setup>
import { reactive, onMounted, ref, defineAsyncComponent, onBeforeUnmount, computed } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'
import CreateUpdateForm from '@/components/CRUD/CreateUpdateForm.vue'
import ShopFilters from '@/components/shop/ShopFilters.vue'
import ShopPagination from '@/components/shop/ShopPagination.vue'

// ====================================================================
// Convert synchronous imports to async components -------------------
const SpinnerVue = defineAsyncComponent(() => import('@/components/SpinnerVue.vue'))
const ItemsWrapper = defineAsyncComponent(() => import('@/components/products/ItemsWrapper.vue'))

import { useStore } from 'vuex'
const vuex_store = useStore()

// ====================================================================
// Constants ----------------------------------------------------------
const SORT_TYPES = {
  LOW_PRICE: 'low-price',
  HIGH_PRICE: 'high-price',
  NEWEST: 'newest',
  OLDEST: 'oldest',
  HIGH_STAR: 'high-star',
  LOW_STAR: 'low-star'
}

const DEFAULT_ITEMS_PER_PAGE = 4
const GRID_ITEMS_STORAGE_KEY = 'gridItemsOnShop'

// ====================================================================
// State management ---------------------------------------------------
const store = reactive({
  items: [],
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE
})

const loaded = ref(true)
const gridItems = ref(false)
const activePage = ref(1)
const isModalOpen = ref(false)

// ====================================================================
// Utility functions -------------------------------------------------
const sortItems = (items, sortType) => {
  const sortFunctions = {
    [SORT_TYPES.LOW_PRICE]: (a, b) => a.price - b.price,
    [SORT_TYPES.HIGH_PRICE]: (a, b) => b.price - a.price,
    [SORT_TYPES.NEWEST]: (a, b) => b.id - a.id,
    [SORT_TYPES.OLDEST]: (a, b) => a.id - b.id,
    [SORT_TYPES.HIGH_STAR]: (a, b) => b.stars - a.stars,
    [SORT_TYPES.LOW_STAR]: (a, b) => a.stars - b.stars
  }

  return [...items].sort(sortFunctions[sortType] || sortFunctions[SORT_TYPES.OLDEST])
}

const resetPagination = () => {
  activePage.value = 1
}

// ====================================================================
// Computed properties ------------------------------------------------
const totalPages = computed(() => Math.ceil(store.items?.length / store.itemsPerPage))

const slicedItems = computed(() => {
  const start = (activePage.value - 1) * store.itemsPerPage
  const end = start + store.itemsPerPage
  return store.items.slice(start, end)
})

// ====================================================================
// Event handlers -----------------------------------------------------
const toggleLike = (itemID) => {
  const item = store.items.find(i => i.id === itemID)
  if (item) {
    item.liked = !item.liked
  }
}

const sortItemsBy = (sortType) => {
  store.items = sortItems(store.items, sortType)
  resetPagination()
}

const toggleModal = (bool) => {
  isModalOpen.value = bool
}

const handlePageChange = (page) => {
  activePage.value = page
}

const handleItemsPerPageUpdate = (value) => {
  store.itemsPerPage = Number(value)
  resetPagination()
}

const handleProductUpdate = async () => {
  await vuex_store.dispatch('fetchProducts')
  store.items = vuex_store.state.products
}

// ====================================================================
// Lifecycle hooks ----------------------------------------------------
onMounted(() => {
  vuex_store.dispatch('fetchProducts')
  store.items = vuex_store.state.products
  gridItems.value = localStorage.getItem(GRID_ITEMS_STORAGE_KEY) || false
})

onBeforeUnmount(() => {
  localStorage.setItem(GRID_ITEMS_STORAGE_KEY, gridItems.value)
})
</script>

<template>
  <div>
    <heading-vue heading="Shop" path="Shop . Pages . Shop" />

    <shop-filters
      :items-per-page="store.itemsPerPage"
      :total-items="store.items.length"
      :grid-items="gridItems"
      @update:items-per-page="handleItemsPerPageUpdate"
      @sort="sortItemsBy"
      @toggle-grid="gridItems = $event"
    />

    <div class="shop-list-items-wrapper">
      <div class="shop-header">
        <button class="create-product-btn" @click="toggleModal(true)">Create new product</button>
        <create-update-form v-if="isModalOpen" @toggle-modal="toggleModal(false)" title="Create New Product" />
      </div>

      <div v-if="!loaded">
        <SpinnerVue />
      </div>
      <div v-else>
        <h2>{{ gridItems ? 'Grid' : 'List' }} view</h2>
        <items-wrapper
          :items="slicedItems"
          :gridItems="gridItems"
          @toggle-like="toggleLike"
          @product-updated="handleProductUpdate"
        />
      </div>
    </div>

    <shop-pagination
      v-if="store.items.length > store.itemsPerPage"
      :current-page="activePage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />
  </div>
</template>

<style lang="scss" scoped>
.shop-list-items-wrapper {
  width: 1141px;
  margin: 0 auto;
  position: relative;

  .shop-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .create-product-btn {
    background-color: $red;
    color: $light;
    border: 1px solid $red;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background-color: darken($red, 10%);
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
}
</style>
