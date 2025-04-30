<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { AkSearch } from '@kalimahapps/vue-icons';

const store = useStore()
const searchResults = ref([])
const isSearchOpen = ref(false)
const searchQuery = ref('')

const handleSearch = () => {
  const value = searchQuery.value.toLowerCase().trim()
  const products = store.state.products

  if (value.length === 0) {
    searchResults.value = []
    return
  }

  if (!products || products.length === 0) {
    searchResults.value = [{ title: "Products not loaded yet", id: 'not_found' }]
    return
  }

  const result = products.filter(p =>
    p.title.toLowerCase().includes(value) ||
    (p.description && p.description.toLowerCase().includes(value))
  )

  if (result.length === 0) {
    searchResults.value = [{ title: "No results found", id: 'not_found' }]
  } else {
    searchResults.value = result.slice(0, 5) // Limit to 5 results for better UX
  }
}

const handleBlur = () => {
  setTimeout(() => {
    isSearchOpen.value = false
  }, 300)
}

const handleFocus = () => {
  isSearchOpen.value = true
  if (searchQuery.value) {
    handleSearch()
  }
}

const handleClick = (e) => {
  e.stopPropagation()
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  isSearchOpen.value = false
}

// Watch for products loading state
watch(() => store.state.productsLoading, (newValue) => {
  if (!newValue && searchQuery.value) {
    handleSearch()
  }
})

</script>

<template>
  <div class="searchbar">
    <div class="search-box">
      <input
        type="search"
        placeholder="Search for products"
        @input="handleSearch"
        @focus="handleFocus"
        @blur="handleBlur"
        v-model="searchQuery"
      />
      <button @click="handleClick">
        <AkSearch />
      </button>
    </div>

    <div
      v-if="searchResults.length > 0 && isSearchOpen"
      class="search-info"
      @click="handleClick"
    >
      <RouterLink
        v-for="(product, idx) in searchResults"
        :key="idx"
        :to="product.id !== 'not_found' ? `/product-details/${product.id}` : '#'"
        class="search-link"
        :class="{ last: idx === searchResults.length - 1 }"
        @click="clearSearch"
      >
        <h4>{{ product.title }}</h4>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  overflow: visible;

  .search-box {
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    position: relative;
    z-index: 1001;

    input {
      padding: 8px 12px;
      border: none;
      outline: none;
      width: 100%;
      max-width: 200px;
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      flex-shrink: 0;

      &:hover {
        color: #FB2E86;
      }
    }
  }

  .search-info {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    z-index: 1002;
    max-height: 300px;
    overflow-y: auto;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-top: 4px;
    border: 1px solid #FB2E86;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    max-width: 100%;
    overflow: visible;

    .search-link {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      color: inherit;
      transition: background-color 0.2s;
      border-bottom: 1px solid #f0f0f0;
      width: 100%;
      max-width: 100%;
      overflow: hidden;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: #f5f5f5;
      }

      &.last {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 768px) {
  .searchbar {
    .search-box {
      input {
        max-width: 150px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
