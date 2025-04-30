<script setup>
import { AnFilledStar, BxHeart, BxSolidHeart, LuShoppingCart } from '@kalimahapps/vue-icons';
import facebook from '@/assets/images/productDetails/facebook.png';
import twitter from '@/assets/images/productDetails/twitter2.png';
import instagram from '@/assets/images/productDetails/instagram3.png';
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (product) => {
      return (
        typeof product.id === 'number' &&
        typeof product.title === 'string' &&
        typeof product.price === 'number' &&
        typeof product.discount === 'number' &&
        typeof product.stars === 'number' &&
        typeof product.description === 'string' &&
        Array.isArray(product.colors) &&
        typeof product.liked === 'boolean'
      );
    }
  },
  onAddToCart: {
    type: Function,
    required: true
  },
  onToggleLike: {
    type: Function,
    required: true
  }
});

const emit = defineEmits(['add-to-cart', 'toggle-like']);

const discountedPrice = computed(() => {
  return (props.product.price * (1 - props.product.discount / 100)).toFixed(2);
});

const reviewCount = computed(() => {
  return Math.floor(Math.random() * 50);
});

const handleAddToCart = () => {
  emit('add-to-cart', props.product.id);
};

const handleToggleLike = () => {
  emit('toggle-like', props.product.id);
};

const socialLinks = [
  { icon: facebook, alt: 'Facebook', href: '#' },
  { icon: instagram, alt: 'Instagram', href: '#' },
  { icon: twitter, alt: 'Twitter', href: '#' }
];
</script>

<template>
  <div class="product-info" role="article">
    <h1 class="product-title">{{ product.title }}</h1>

    <div class="rating" aria-label="Product rating">
      <div class="stars">
        <AnFilledStar
          v-for="i in product.stars"
          :key="i"
          class="star filled"
          aria-hidden="true"
        />
        <AnFilledStar
          v-for="i in 5 - product.stars"
          :key="i + product.stars"
          class="star empty"
          aria-hidden="true"
        />
      </div>
      <span class="review-count">({{ reviewCount }})</span>
    </div>

    <div class="price-container">
      <span class="current-price">${{ discountedPrice }}</span>
      <span class="real-price" aria-label="Original price">${{ product.price }}</span>
    </div>

    <div class="color-section">
      <p class="color-label">Color</p>
      <div class="colors" role="group" aria-label="Available colors">
        <span
          v-for="color in product.colors"
          :key="color"
          :class="['color-option', color]"
          :aria-label="`${color} color option`"
        />
      </div>
    </div>

    <p class="description">{{ product.description }}</p>

    <div class="action-buttons">
      <button
        class="add-to-cart"
        @click="handleAddToCart"
        aria-label="Add to cart"
      >
        <LuShoppingCart aria-hidden="true" /> Add To Cart
      </button>

      <button
        class="toggle-like"
        @click="handleToggleLike"
        :aria-label="product.liked ? 'Remove from favorites' : 'Add to favorites'"
      >
        <BxHeart v-if="!product.liked" aria-hidden="true" />
        <BxSolidHeart v-else class="liked" aria-hidden="true" />
      </button>
    </div>

    <div class="product-meta">
      <p class="category">Categories: {{ product.category || 'Fashion' }}</p>
      <p class="tags">Tags: {{ product.tags || 'Modern, Design' }}</p>
      <div class="social-share">
        <span class="share-label">Share</span>
        <a
          v-for="link in socialLinks"
          :key="link.alt"
          :href="link.href"
          class="social-link"
          :aria-label="`Share on ${link.alt}`"
        >
          <img :src="link.icon" :alt="link.alt" width="20" height="20">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-info {
  @include flex(column, center, start, 10px);
  padding-left: 40px;

  .product-title {
    color: $dark-blue;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .rating {
    @include flex(row, start, center, 5px);
    margin-bottom: 1rem;

    .stars {
      @include flex(row, start, center, 2px);

      .star {
        width: 20px;
        height: 20px;

        &.filled {
          color: #ffc107;
        }

        &.empty {
          color: #ced4da;
        }
      }
    }

    .review-count {
      color: $text-color-transparent;
      margin-left: 5px;
    }
  }

  .price-container {
    margin-bottom: 1rem;

    .current-price {
      font-size: 1.25rem;
      font-weight: 600;
      margin-right: 10px;
    }

    .real-price {
      color: $red;
      text-decoration: line-through;
      font-size: 1rem;
    }
  }

  .color-section {
    margin-bottom: 1rem;

    .color-label {
      margin: 0 0 0.5rem;
      font-weight: 500;
    }

    .colors {
      @include product-colors;
    }
  }

  .description {
    color: $text-color-transparent;
    margin: 0;
    line-height: 1.6;
  }

  .action-buttons {
    margin: 1.5rem 0;
    @include flex(row, start, center, 15px);

    .add-to-cart {
      background-color: $dark-blue;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      @include flex(row, center, center, 10px);
      transition: background-color 0.2s ease;

      &:hover {
        background-color: darken($dark-blue, 10%);
      }

      &:focus {
        outline: 2px solid $dark-blue;
        outline-offset: 2px;
      }
    }

    .toggle-like {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      border-radius: 50%;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      border: none;
      background: white;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.05);
      }

      &:focus {
        outline: 2px solid $dark-blue;
        outline-offset: 2px;
      }

      svg {
        width: 20px;
        height: 20px;
        color: $dark-blue;
      }

      .liked {
        fill: $red;
      }
    }
  }

  .product-meta {
    margin: 1rem 0;

    p {
      margin: 0.5rem 0;
      color: $text-color-transparent;
    }

    .social-share {
      @include flex(row, start, center, 10px);
      margin-top: 0.5rem;

      .share-label {
        color: $text-color-transparent;
      }

      .social-link {
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }

        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
  }
}

// Responsive styles
@media (max-width: $medium) {
  .product-info {
    padding-left: 20px;

    .product-title {
      font-size: 1.25rem;
    }

    .action-buttons {
      flex-wrap: wrap;
      gap: 10px;

      .add-to-cart {
        width: 100%;
      }
    }
  }
}
</style>
