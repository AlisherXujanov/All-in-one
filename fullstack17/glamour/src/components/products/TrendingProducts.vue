<script setup>
import { ref, reactive } from 'vue'

const trendingProducts = reactive([
  { id: 1, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/public/image2.png" },
  { id: 2, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/public/image2.png" },
  { id: 3, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/public/image2.png" },
  { id: 4, name: "Cantilever chair", price: "$26.00", oldPrice: "$42.00", image: "/public/image2.png" }
])

const discounts = reactive([
  { id: 1, text: "23% off in all products", link: "Shop Now", image: "/public/image3.png", bgColor: "#fde8ec" },
  { id: 2, text: "23% off in all products", link: "View Collection", image: "/public/image3.png", bgColor: "#eef1ff" }
])

const executiveChairs = reactive([
  { id: 1, name: "Executive Seat chair", price: "$32.00", image: "/public/executive1.png" },
  { id: 2, name: "Executive Seat chair", price: "$32.00", image: "/public/executive2.png" },
  { id: 3, name: "Executive Seat chair", price: "$32.00", image: "/public/executive3.png" }
])
</script>

<template>
  <section class="trending-section">
    <h2 class="title">Trending Products</h2>
    <div class="products">
      <div v-for="product in trendingProducts" :key="product.id" class="product-card">
        <img :src="product.image" alt="product.name" class="product-image" />
        <p class="product-name">{{ product.name }}</p>
        <span class="product-price">{{ product.price }}</span>
        <span class="product-old-price">{{ product.oldPrice }}</span>
      </div>
    </div>

    <div class="discounts">
      <div v-for="discount in discounts" :key="discount.id" class="discount-card"
        :style="{ backgroundColor: discount.bgColor }">
        <h3>{{ discount.text }}</h3>
        <a href="#" class="discount-link">{{ discount.link }}</a>
        <img :src="discount.image" alt="Discount Product" class="discount-image" />
      </div>
    </div>

    <div class="executive-list">
      <div v-for="chair in executiveChairs" :key="chair.id" class="executive-item">
        <img :src="chair.image" alt="chair.name" class="executive-image" />
        <p class="executive-name">{{ chair.name }}</p>
        <span class="executive-price">{{ chair.price }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trending-section {
  text-align: center;
  padding: 40px;

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .products {
    display: flex;
    justify-content: center;
    gap: 20px;

    .product-card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      .product-image {
        width: 150px;
        border-radius: 5px;
      }

      .product-name {
        font-size: 16px;
        font-weight: bold;
      }

      .product-price {
        font-size: 18px;
        font-weight: bold;
        color: #000;
      }

      .product-old-price {
        font-size: 14px;
        color: #888;
        text-decoration: line-through;
      }
    }
  }

  .discounts {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;

    .discount-card {
      padding: 20px;
      border-radius: 10px;
      text-align: left;
      width: 250px;

      .discount-link {
        color: #d63384;
        font-weight: bold;
        text-decoration: none;
      }

      .discount-image {
        width: 100%;
        margin-top: 10px;
      }
    }
  }

  .executive-list {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;

    .executive-item {
      text-align: center;

      .executive-image {
        width: 100px;
        border-radius: 5px;
      }

      .executive-name {
        font-size: 16px;
        font-weight: bold;
      }

      .executive-price {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
