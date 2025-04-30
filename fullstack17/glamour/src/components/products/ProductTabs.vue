<script setup>
import { BsArrowRight } from '@kalimahapps/vue-icons';
import { ref } from 'vue';

const props = defineProps({
  description: {
    type: String,
    required: true
  }
});

const activeTab = ref('description');

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'additional-info', label: 'Additional Info' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'video', label: 'Video' }
];

const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<template>
  <div class="product-tabs">
    <div class="tabs-header" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :id="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="setActiveTab(tab.id)"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :aria-controls="`${tab.id}-panel`"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tabs-content">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :id="`${tab.id}-panel`"
        :class="['tab-panel', { active: activeTab === tab.id }]"
        role="tabpanel"
        :aria-labelledby="tab.id"
      >
        <template v-if="tab.id === 'description'">
          <h2>Product Description</h2>
          <p>{{ description }}</p>
        </template>

        <template v-if="tab.id === 'additional-info'">
          <h2>More Details</h2>
          <ul class="features-list">
            <li><BsArrowRight /> Premium quality materials that are built to last</li>
            <li><BsArrowRight class="color" /> Modern design that fits with any interior style</li>
            <li><BsArrowRight /> Ergonomic design for comfort and practical use</li>
            <li><BsArrowRight /> Environmentally friendly production process</li>
          </ul>
        </template>

        <template v-if="tab.id === 'reviews'">
          <h2>Reviews</h2>
          <p>No reviews yet</p>
        </template>

        <template v-if="tab.id === 'video'">
          <h2>Video</h2>
          <p>No video yet</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-tabs {
  background-color: $violet-lighter;
  padding: 1.5rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }

  .tabs-header {
    display: flex;
    gap: 1rem;
    border-bottom: 2px solid rgba($dark-blue, 0.1);
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE and Edge
    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }

    @media (min-width: 768px) {
      gap: 2rem;
      margin-bottom: 2rem;
      overflow-x: visible;
    }

    button {
      background: none;
      border: none;
      color: $dark-blue;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.75rem 0;
      cursor: pointer;
      position: relative;
      transition: color 0.3s ease;
      white-space: nowrap;

      @media (min-width: 768px) {
        font-size: 1.125rem;
        padding: 1rem 0;
      }

      &:hover {
        color: darken($dark-blue, 10%);
      }

      &.active {
        color: $dark-blue;

        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: $dark-blue;
        }
      }
    }
  }

  .tabs-content {
    .tab-panel {
      display: none;
      animation: fadeIn 0.3s ease;

      &.active {
        display: block;
      }

      h2 {
        color: $dark-blue;
        font-size: 1.25rem;
        margin-bottom: 1rem;

        @media (min-width: 768px) {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
      }

      p {
        color: $text-color-transparent;
        font-size: 0.875rem;
        line-height: 1.5;

        @media (min-width: 768px) {
          font-size: 1rem;
          line-height: 1.6;
        }
      }

      .features-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: $text-color-transparent;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;

          @media (min-width: 768px) {
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 1rem;
          }

          svg {
            font-size: 1rem;
            color: $dark-blue;
            flex-shrink: 0;

            @media (min-width: 768px) {
              font-size: 1.25rem;
            }
          }

          .color {
            color: $dark-blue;
          }
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
