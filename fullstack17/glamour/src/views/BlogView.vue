<script setup>
import { ref, onMounted, computed } from 'vue';
import HeadingVue from '@/components/HeadingVue.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faPen, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import ShopPagination from '@/components/shop/ShopPagination.vue';

const posts = ref([]);
const maxLength = 150;
const currentPage = ref(1);
const postsPerPage = 3;
const expandedPosts = ref({});

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3001/BlogPage');
    const data = await response.json();
    if (data && Array.isArray(data)) {
      posts.value = data;
    } else if (data.BlogPage && Array.isArray(data.BlogPage)) {
      posts.value = data.BlogPage;
    } else {
      console.error('Ошибка структуры данных:', data);
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  return posts.value.slice(start, start + postsPerPage);
});

const toggleReadMore = (id) => {
  expandedPosts.value[id] = !expandedPosts.value[id];
};

const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));
</script>

<template>
  <div>
    <HeadingVue heading="Blog" path="Home . Pages . Blog page" />
    <div class="blog-container">
      <div class="blog-posts">
        <div v-for="post in paginatedPosts" :key="post.id" class="blog-item">
          <img :src="post.img" :alt="post.title" class="blog-image" />

          <!-- Блок с датой и автором -->
          <div class="blog-meta">
            <FontAwesomeIcon :icon="faPen" class="icon" />
            <span class="blog-author"> {{ post.author }}</span>
            <FontAwesomeIcon :icon="faCalendarAlt" class="icon" />
            <span class="blog-date"> {{ post.date }}</span>
          </div>

          <h2>{{ post.title }}</h2>
          <p>
            {{ expandedPosts[post.id] ? post.description : post.description.slice(0, maxLength) + '...' }}
            <span class="read-more" @click="toggleReadMore(post.id)">
              {{ expandedPosts[post.id] ? 'Show Less' : 'Read More' }}
            </span>
          </p>
        </div>

        <ShopPagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="(page) => currentPage = page"
        />
      </div>

      <!-- Sidebar оставляем без изменений -->
      <aside class="sidebar">
  <!-- Search -->
  <div class="sidebar-section search">
    <h3>Search</h3>
    <input type="text" placeholder="Search For Posts" class="search-input" />
  </div>

  <!-- Categories -->
  <div class="sidebar-section categories">
    <h3>Categories</h3>
    <div class="categories-list">
      <button class="category active">Hobbies (14)</button>
      <button class="category">Women (21)</button>
      <button class="category">Women (21)</button><br>
      <button class="category">Women (21)</button>
      <button class="category">Women (21)</button>
    </div>
  </div>

  <!-- Recent Post -->
  <div class="sidebar-section recent-posts">
    <h3>Recent Post</h3>
    <div class="recent-item" v-for="i in 1" :key="i">
      <img src="https://avatars.mds.yandex.net/i?id=936049f1fe3df91454bb5c67b214a5f4_l-5235913-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="Recent Post" />
      <div>
        <span class="recent-title">It is a long established fact</span>
        <span class="recent-date">Aug 09 2020</span>
      </div>
    </div>
    <div class="recent-item" v-for="i in 1" :key="i">
      <img src="https://avatars.mds.yandex.net/i?id=49a5928a13be167bb5ca244a9e61e025-5601751-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="Recent Post" />
      <div>
        <span class="recent-title">It is a long established fact</span>
        <span class="recent-date">Aug 09 2020</span>
      </div>
    </div>
    <div class="recent-item" v-for="i in 1" :key="i">
      <img src="https://avatars.mds.yandex.net/i?id=6b074e130cf1ac3094a5179f8065dfcd_l-5723051-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="Recent Post" />
      <div>
        <span class="recent-title">It is a long established fact</span>
        <span class="recent-date">Aug 09 2020</span>
      </div>
    </div>
    <div class="recent-item" v-for="i in 1" :key="i">
      <img src="https://avatars.mds.yandex.net/i?id=95b3fc777691b64d65ec9de8810a03a4-4443859-images-thumbs&ref=rim&n=33&w=200&h=200" alt="Recent Post" />
      <div>
        <span class="recent-title">It is a long established fact</span>
        <span class="recent-date">Aug 09 2020</span>
      </div>
    </div>
  </div>

  <!-- Sale Product -->
  <div class="sidebar-section sale-products">
    <h3>Sale Product</h3>
    <div class="product-grid">
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://avatars.mds.yandex.net/i?id=ca79308b572e2d1eefa1e0e68095c1d914b51b7b-9813974-images-thumbs&ref=rim&n=33&w=300&h=200" alt="Sale Product" /><br>
        <span>summer clothes</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/1602847/pub_5ce51b0df67a2500c6f37daa_5cfeadfeaf7e3300afe02d1a/scale_1200" alt="Sale Product" /><br>
        <span>spring sweater</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://avatars.mds.yandex.net/i?id=fc7c89d0354f1529748751854222e022b6112b9b-10299621-images-thumbs&ref=rim&n=33&w=299&h=200" alt="Sale Product" /><br>
        <span>spring clothes</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
    </div>
  </div>

  <!-- Offer Product -->
  <div class="sidebar-section offer-product">
    <h3>Offer Product</h3>
    <div class="product-grid">
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://outmaxshop.ru/components/com_jshopping/files/img_products/2847/nike-kaishi-2847-1.jpg" alt="Offer Product" /><br>
        <span>sneakers</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://avatars.mds.yandex.net/i?id=fa936ae05a98f37292a960a1f340dfe2_l-10700905-images-thumbs&n=13" alt="Offer Product" /><br>
        <span>expensive bag</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://cdn1.ozone.ru/s3/multimedia-h/6386063297.jpg" alt="Offer Product" /><br>
        <span>default bag</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
      <div class="product-item" v-for="i in 1" :key="i">
        <img src="https://cs5.livemaster.ru/storage/ae/3d/65df186161e8d1a86e92800127ac--ukrasheniya-serebryanyj-braslet-zhenskij-skannyj-braslet-kras.jpg" alt="Offer Product" /><br>
        <span>bracelet</span>
        <span class="price">$12.00 - $15.00</span>
      </div>
    </div>
  </div>

  <!-- Follow -->
  <div class="sidebar-section follow">
    <h3>Follow</h3>
    <div class="social-icons">
      <FontAwesomeIcon :icon="faFacebook" class="icon facebook" />
      <FontAwesomeIcon :icon="faTwitter" class="icon twitter" />
      <FontAwesomeIcon :icon="faInstagram" class="icon instagram" />
    </div>
  </div>

  <!-- Tags -->
  <div class="sidebar-section tags">
    <h3>Tags</h3>
    <div class="tags-list">
      <span class="tag">General</span>
      <span class="tag">Atsanil</span>
      <span class="tag">Insas</span>
      <span class="tag">Bibsaas</span>
      <span class="tag">Nulla</span>
    </div>
  </div>
</aside>

    </div>
  </div>
</template>


<style lang="scss">
// Variables
$primary-color: #151875;
$secondary-color: #1d1e4b;
$highlight-color: #ff0080;
$hover-bg: #f5f5f5;
$active-color: #945aff;
$sidebar-text: #1d3557;
$gray-color: #939191;
$border-radius: 5px;
$transition-speed: 0.2s;

// Mixins
@mixin hover-transform {
  transition: transform $transition-speed ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
  &:active {
    transform: scale(0.85);
  }
}

@mixin flex-center {
  display: flex;
  align-items: center;
}

// Main Layout
.blog-container {
  display: flex;
  gap: 30px;
  padding: 50px 100px;
}

// Blog Posts Section
.blog-posts {
  flex: 3;

  .blog-item {
    padding: 20px;
    margin-bottom: 40px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    transition: transform $transition-speed ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .blog-image {
    width: 100%;
    height: 400px;
    border-radius: 15px;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
    color: $primary-color;
    margin: 15px 0;
  }

  p {
    font-size: 16px;
    color: $primary-color;
    line-height: 1.6;
  }

  .blog-meta {
    @include flex-center;
    gap: 15px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #555;

    .blog-author {
      background: #e0f7fa;
      padding: 5px 10px;
      border-radius: $border-radius;
      color: #00796b;
    }

    .blog-date {
      background: #fff3d6;
      padding: 5px 10px;
      border-radius: $border-radius;
      color: #d48a00;
    }
  }

  .read-more {
    display: block;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: $secondary-color;
    text-decoration: none;
    cursor: pointer;

    &::after {
      content: '•';
      color: $highlight-color;
      font-size: 16px;
      margin-left: 5px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

// Pagination
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  span {
    display: inline-block;
    padding: 10px 15px;
    margin: 0 5px;
    background: #eee;
    color: $sidebar-text;
    border-radius: $border-radius;
    cursor: pointer;
    transition: background $transition-speed ease-in-out;

    &.active, &:hover {
      background: $active-color;
      color: white;
    }
  }
}

// Sidebar
.sidebar {
  flex: 1;
  padding: 20px;

  .sidebar-section {
    margin-bottom: 30px;
    padding: 15px;
    transition: background $transition-speed ease-in-out, transform $transition-speed ease-in-out;
    border-radius: 8px;

    &:hover {
      background: $hover-bg;
      transform: scale(1.02);
    }

    h3 {
      text-align: center;
      font-size: 18px;
      color: $sidebar-text;
      margin-bottom: 10px;
    }
  }

  // Search
  .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: $border-radius;
  }

  // Categories
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .category {
      padding: 8px 15px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      transition: background $transition-speed ease-in-out;

      &:nth-child(odd) {
        background: $primary-color;
        color: white;
      }

      &:nth-child(even) {
        background: $highlight-color;
        color: white;
      }

      @include hover-transform;
    }
  }

  // Recent Posts
  .recent-item {
    @include flex-center;
    gap: 10px;
    margin-bottom: 10px;

    img {
      width: 90px;
      height: 60px;
      border-radius: $border-radius;
      object-fit: cover;
      @include hover-transform;
    }

    .recent-title {
      display: block;
      font-size: 14px;
      font-weight: bold;
    }

    .recent-date {
      font-size: 12px;
      color: $gray-color;
    }
  }

  // Products
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 15px;

    .product-item {
      text-align: center;
      background: white;
      border-radius: 15px;
      padding: 15px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
      transition: all $transition-speed ease-in-out;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
        margin-bottom: 12px;
        transition: transform $transition-speed ease-in-out;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      span {
        display: block;
        font-size: 15px;
        color: $primary-color;
        font-weight: 500;
        margin: 6px 0;
      }

      .price {
        color: $highlight-color;
        font-weight: 600;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        margin-top: 8px;
      }
    }
  }

  // Sale and Offer Products
  .sale-products,
  .offer-product {
    .product-grid {
      .product-item {
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1;
          opacity: 0;
          transition: opacity $transition-speed ease-in-out;
        }

        &:hover::before {
          opacity: 1;
        }

        img {
          transition: transform $transition-speed ease-in-out;
          &:hover {
            transform: scale(1.05);
          }
        }

        span {
          position: relative;
          z-index: 2;
        }

        .price {
          position: relative;
          z-index: 2;
          &::before {
            content: '💰';
            margin-right: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }

  // Sale Products specific
  .sale-products {
    .product-item {
      border: 2px solid $highlight-color;

      &::after {
        content: 'SALE';
        position: absolute;
        top: 10px;
        right: 10px;
        background: $highlight-color;
        color: white;
        padding: 4px 8px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 2;
      }
    }
  }

  // Offer Products specific
  .offer-product {
    .product-item {
      border: 2px solid $active-color;

      &::after {
        content: 'OFFER';
        position: absolute;
        top: 10px;
        right: 10px;
        background: $active-color;
        color: white;
        padding: 4px 8px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 2;
      }
    }
  }

  // Social Icons
  .social-icons {
    display: flex;
    gap: 10px;

    .icon {
      font-size: 18px;
      padding: 10px;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      transition: background $transition-speed ease-in-out;

      &.facebook { background: #3b5998; }
      &.twitter { background: #1da1f2; }
      &.instagram { background: #e4405f; }

      &:hover {
        opacity: 0.8;
        @include hover-transform;
      }
    }
  }

  // Tags
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .tag {
      font-size: 14px;
      padding: 5px 10px;
      background: #eee;
      border-radius: $border-radius;
      cursor: pointer;
      transition: background $transition-speed ease-in-out;

      &:hover {
        background: #d3d3d3;
        @include hover-transform;
      }
    }
  }
}

// Media Queries
@media screen and (max-width: 1400px) {
  .blog-container {
    padding: 40px 80px;
    gap: 25px;
  }

  .blog-posts {
    .blog-image {
      height: 350px;
    }
  }

  .sidebar {
    .product-grid {
      gap: 15px;
      padding: 12px;

      .product-item {
        img {
          height: 180px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .blog-container {
    padding: 30px 60px;
    gap: 20px;
  }

  .blog-posts {
    .blog-item {
      padding: 15px;
      margin-bottom: 30px;
    }

    .blog-image {
      height: 300px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  }

  .sidebar {
    .product-grid {
      gap: 12px;
      padding: 10px;

      .product-item {
        padding: 12px;

        img {
          height: 160px;
        }

        span {
          font-size: 14px;
        }

        .price {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .blog-container {
    flex-direction: column;
    padding: 25px 40px;
    gap: 30px;
  }

  .blog-posts {
    flex: none;
    width: 100%;

    .blog-item {
      padding: 15px;
    }

    .blog-image {
      height: 350px;
    }
  }

  .sidebar {
    flex: none;
    width: 100%;
    padding: 20px;
    margin-top: 20px;

    .sidebar-section {
      margin-bottom: 25px;
    }

    .product-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 12px;

      .product-item {
        padding: 12px;

        img {
          height: 180px;
        }

        span {
          font-size: 14px;
        }

        .price {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .blog-container {
    padding: 20px 30px;
    gap: 25px;
  }

  .blog-posts {
    .blog-item {
      padding: 12px;
      margin-bottom: 25px;
    }

    .blog-image {
      height: 300px;
    }

    h2 {
      font-size: 18px;
      margin: 12px 0;
    }

    p {
      font-size: 14px;
    }

    .blog-meta {
      flex-wrap: wrap;
      gap: 8px;
      font-size: 13px;
    }
  }

  .sidebar {
    padding: 15px;

    .product-grid {
      gap: 12px;
      padding: 10px;

      .product-item {
        padding: 10px;

        img {
          height: 160px;
        }

        span {
          font-size: 13px;
        }

        .price {
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .blog-container {
    padding: 15px;
    gap: 20px;
  }

  .blog-posts {
    .blog-item {
      padding: 10px;
      margin-bottom: 20px;
    }

    .blog-image {
      height: 250px;
    }

    h2 {
      font-size: 16px;
      margin: 10px 0;
    }

    p {
      font-size: 13px;
    }

    .blog-meta {
      font-size: 12px;
    }
  }

  .sidebar {
    padding: 12px;

    .sidebar-section {
      padding: 12px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }

    .product-grid {
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 8px;

      .product-item {
        padding: 12px;

        img {
          height: 200px;
        }

        span {
          font-size: 14px;
        }

        .price {
          font-size: 15px;
        }

        &::after {
          font-size: 11px;
          padding: 3px 8px;
        }
      }
    }

    .recent-item {
      img {
        width: 80px;
        height: 60px;
      }

      .recent-title {
        font-size: 13px;
      }

      .recent-date {
        font-size: 11px;
      }
    }
  }
}

// Small mobile devices
@media screen and (max-width: 375px) {
  .blog-container {
    padding: 10px;
  }

  .blog-posts {
    .blog-image {
      height: 200px;
    }

    h2 {
      font-size: 15px;
    }

    p {
      font-size: 12px;
    }
  }

  .sidebar {
    .product-grid {
      .product-item {
        img {
          height: 180px;
        }

        span {
          font-size: 13px;
        }

        .price {
          font-size: 14px;
        }
      }
    }
  }
}

// Print styles
@media print {
  .blog-container {
    padding: 0;
    flex-direction: column;
  }

  .sidebar {
    display: none;
  }

  .blog-posts {
    .blog-item {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .blog-image {
      max-width: 300px;
      height: auto;
    }
  }

  .pagination {
    display: none;
  }
}
</style>
