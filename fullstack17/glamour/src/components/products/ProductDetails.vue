<script setup>
import { useProduct } from '@/composables/useProduct';
import ProductGallery from './ProductGallery.vue';
import ProductInfo from './ProductInfo.vue';
import ProductTabs from './ProductTabs.vue';
import RelatedProducts from './RelatedProducts.vue';
import { onMounted } from 'vue';
import { goToTopSmoothly } from '@/composables/helpers';

const { product, relatedProducts, isLoading, toggleLike, addToCart } = useProduct();

onMounted(() => {
  goToTopSmoothly();
});
</script>

<template>
  <div v-if="isLoading" class="loading">
    Loading product details...
  </div>
  <div v-else-if="product" class="product-details">
    <div class="main-content">
      <ProductGallery :image-url="product.pictureUrl" />
      <ProductInfo
        :product="product"
        :on-add-to-cart="addToCart"
        :on-toggle-like="toggleLike"
      />
    </div>
    <ProductTabs :description="product.description" />
    <RelatedProducts :products="relatedProducts" />
  </div>
  <div v-else class="error">
    Product not found
  </div>
</template>

<style lang="scss" scoped>
.loading, .error {
  text-align: center;
  padding: 50px;
  font-size: 20px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error {
  color: #dc3545;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 8px;
  margin: 20px;
}

.product-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 40px auto;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}

@media screen and (max-width: 1200px) {
  .product-details {
    padding: 15px;

    .main-content {
      gap: 30px;
      padding: 20px;
    }
  }
}

@media screen and (max-width: 992px) {
  .product-details {
    .main-content {
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 20px auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .product-details {
    padding: 10px;

    .main-content {
      padding: 15px;
      margin: 15px auto;
    }
  }

  .loading, .error {
    padding: 30px;
    font-size: 18px;
  }
}

@media screen and (max-width: 480px) {
  .product-details {
    padding: 5px;

    .main-content {
      padding: 10px;
      margin: 10px auto;
    }
  }

  .loading, .error {
    padding: 20px;
    font-size: 16px;
  }
}
</style>
