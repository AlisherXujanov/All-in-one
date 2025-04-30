import { ref, onBeforeMount, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

export function useProduct() {
  const route = useRoute();
  const router = useRouter();
  const store = useStore();

  const product = ref(null);
  const relatedProducts = ref([]);
  const isLoading = ref(true);

  const fetchProductDetails = async () => {
    isLoading.value = true;
    try {
      await store.dispatch('fetchProducts');
      const result = store.state.products.find(p => p.id === route.params.id);

      if (!result) {
        router.push("/404");
        return;
      }

      product.value = result;
      fetchRelatedProducts();
    } catch (error) {
      console.error('Error fetching product details:', error);
      router.push("/404");
    } finally {
      isLoading.value = false;
    }
  };

  const fetchRelatedProducts = () => {
    relatedProducts.value = store.state.products
      .filter(p => p.id !== product.value.id)
      .slice(0, 4);
  };

  const toggleLike = (productId) => {
    store.dispatch('toggleProductLike', productId);
  };

  const addToCart = (productId) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', productId);
  };

  onBeforeMount(fetchProductDetails);

  // Watch for route changes to refetch product details
  watch(() => route.params.id, () => {
    fetchProductDetails();
  });

  return {
    product,
    relatedProducts,
    isLoading,
    toggleLike,
    addToCart
  };
}
