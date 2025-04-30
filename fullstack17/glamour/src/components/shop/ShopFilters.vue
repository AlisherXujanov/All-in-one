<script setup>
import { AnOutlinedUnorderedList, BsGridFill } from '@kalimahapps/vue-icons'

const props = defineProps({
  itemsPerPage: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  gridItems: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:itemsPerPage', 'sort', 'toggleGrid'])

function handlePerPage(e) {
  const perPage = Number(e.target.value)
  if (perPage > props.totalItems) {
    alert("The value is too big")
    e.target.value = props.totalItems
    emit('update:itemsPerPage', props.totalItems)
  } else if (perPage < 1) {
    alert("The value is too small")
    e.target.value = 1
    emit('update:itemsPerPage', 1)
  } else {
    emit('update:itemsPerPage', perPage)
  }
}

function sortItemsBy(e) {
  emit('sort', e.target.value)
}

function toggleGridItems(bool) {
  emit('toggleGrid', bool)
}
</script>

<template>
  <div class="filters-wrapper">
    <div class="filters-left">
      <h4>Fashion Collection</h4>
      <p>Discover our latest trends and timeless classics</p>
    </div>

    <div class="filters-right">
      <div class="filter-group">
        <label for="per-page-input">Per page:</label>
        <input
          id="per-page-input"
          type="number"
          min="1"
          :max="totalItems"
          @change="handlePerPage"
          :value="itemsPerPage"
        >
      </div>

      <div class="filter-group">
        <label for="sort-select">Sort By:</label>
        <select id="sort-select" @change="sortItemsBy">
          <option value="low-price">Price: Low to High</option>
          <option value="high-price">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="high-star">Stars: Low to High</option>
          <option value="low-star">Stars: High to Low</option>
        </select>
      </div>

      <div class="filter-group view-options">
        <label>View:</label>
        <div class="view-buttons">
          <button
            class="view-button"
            :class="{ active: gridItems }"
            @click="toggleGridItems(true)"
            aria-label="Grid view"
          >
            <BsGridFill />
          </button>
          <button
            class="view-button"
            :class="{ active: !gridItems }"
            @click="toggleGridItems(false)"
            aria-label="List view"
          >
            <AnOutlinedUnorderedList />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters-wrapper {
  width: 100%;
  max-width: 1141px;
  margin: 20px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  background: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .filters-left {
    h4 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }

    p {
      color: var(--color-text-secondary);
      font-size: 0.9rem;
    }
  }

  .filters-right {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;

    .filter-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 6px;
      background: #f8f9fa;

      &:nth-child(2) {
        background: #f1f3f5;
      }

      &:nth-child(3) {
        background: #e9ecef;
      }

      label {
        font-size: 0.9rem;
        color: var(--color-text);
        white-space: nowrap;
      }

      input, select {
        padding: 0.5rem;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        font-size: 0.9rem;
        background: var(--color-background);
        color: var(--color-text);
        transition: border-color 0.2s ease;

        &:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      }

      input {
        width: 70px;
      }

      &.view-options {
        .view-buttons {
          display: flex;
          gap: 0.5rem;

          .view-button {
            background: none;
            border: 1px solid var(--color-border);
            border-radius: 4px;
            padding: 0.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;

            svg {
              width: 1.2rem;
              height: 1.2rem;
              color: var(--color-text);
            }

            &:hover {
              background: var(--color-background-hover);
            }

            &.active {
              background: var(--color-primary);
              border-color: var(--color-primary);

              svg {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .filters-wrapper {
    grid-template-columns: 1fr;

    .filters-right {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}

@media (max-width: 768px) {
  .filters-wrapper {
    padding: 15px;

    .filters-right {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;

      .filter-group {
        width: 100%;
        justify-content: space-between;

        input, select {
          flex: 1;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .filters-wrapper {
    .filters-left {
      text-align: center;
    }

    .filters-right {
      .filter-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;

        input, select {
          width: 100%;
        }
      }
    }
  }
}
</style>
