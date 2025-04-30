<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons';
import { goToTopSmoothly } from '@/composables/helpers';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  products: {
    type: Array,
    required: true
  }
});

const handleProductClick = async (productId) => {
  await goToTopSmoothly();
  router.push(`/product-details/${productId}`);
};
</script>

<template>
  <section class="related-products">
    <h2 class="section-title">Related Products</h2>
    <div class="products-grid">
      <article v-for="item in products" :key="item.id" class="product-card">
        <div class="product-image" @click="handleProductClick(item.id)">
          <img :src="item.pictureUrl" :alt="item.title" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="product-title">{{ item.title }}</h3>
            <div class="stars">
              <AnFilledStar v-for="i in item.stars" :key="i" class="star-icon"/>
            </div>
          </div>
          <div class="price-container">
            <span class="discounted-price">${{ (item.price * (1 - item.discount/100)).toFixed(2) }}</span>
            <span class="original-price">${{ item.price }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.related-products {
  padding: 4rem 2rem;
  max-width: 1440px;
  margin: 0 auto;

  .section-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: $dark-blue;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .product-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .product-image {
        cursor: pointer;
        aspect-ratio: 1;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.05);
        }
      }

      .card-content {
        padding: 1rem;

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;

          .product-title {
            font-size: 0.875rem;
            font-weight: 500;
            color: $dark-blue;
            line-height: 1.4;
            margin: 0;
            flex: 1;
          }

          .stars {
            display: flex;
            gap: 0.25rem;

            .star-icon {
              color: #ffc107;
              font-size: 0.75rem;
            }
          }
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          .discounted-price {
            font-size: 0.875rem;
            font-weight: 600;
            color: $dark-blue;
          }

          .original-price {
            font-size: 0.75rem;
            color: $red;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}

// Media Queries
@media screen and (max-width: 1200px) {
  .related-products {
    .products-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 992px) {
  .related-products {
    padding: 3rem 1.5rem;

    .section-title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .products-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
}

@media screen and (max-width: 576px) {
  .related-products {
    padding: 2rem 1rem;

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .products-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .product-card {
      .card-content {
        padding: 0.75rem;

        .card-header {
          .product-title {
            font-size: 0.8125rem;
          }
        }

        .price-container {
          .discounted-price {
            font-size: 0.8125rem;
          }
        }
      }
    }
  }
}
</style>
