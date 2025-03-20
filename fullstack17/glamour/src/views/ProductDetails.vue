<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const router = useRouter()
const store = useStore()

const product = ref("")

onBeforeMount(() => {
  store.dispatch('fetchProducts')
  let result = store.state.products.find(p => {
    return p.id == route.params.id
  })
  if (!result) {
    router.push("/404")
  } else {
    product.value = result
  }
})
</script>

<template>
  <div class="item-wrapper">
    <div class="img-wrapper">
      <img src="" alt="item-image" width="100%" height="200">
    </div>
    <div class="item-info">
      <h3>{{ product.title }}
        <div class="colors">
          <span v-for="c in product.colors" :key="c" :class="c"></span>
        </div>
      </h3>
      <div class="item-price">
        <div>
          <span class="current-price">${{ product.price - (product.price * product.discount) }}</span>
          <span class="real-price">${{ product.price }}</span>
        </div>
        <div class="stars">
          <span v-for="i in product.stars" :key="i" class="text-warning">
            <AnFilledStar />
          </span>

          <span v-if="product.stars < 5">
            <span v-for="i in 5 - product.stars" :key="i" class="text-secondary">
              <AnFilledStar />
            </span>
          </span>
        </div>
      </div>


      <p class="text-secondary item-description">
        {{ product.description }}
      </p>
      <div class="action-buttons">
        <span class="add-to-card">
          <LuShoppingCart />
        </span>
        <!--  @click="emit('toggle-like', product.id)" -->
        <span class="toggle-like">
          <BxHeart v-if="!product.liked" />
          <BxSolidHeart class="liked" v-else />
        </span>
        <span class="close-look">
          <BxSearchAlt />
        </span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.item-wrapper {
  padding: 10px;
  width: 50%;
  margin: 50px auto;

  .img-wrapper {
    padding: 5px;
  }

  .item-info {
    h3 {
      @include flex(row, flex-start, center, 20px);

      .colors {
        span {
          margin-right: 5px;
          @include circle(15px);

          &.red {
            background-color: $magenta;
          }

          &.blue {
            background-color: $violet-blue;
          }

          &.orange {
            background-color: $orange;
          }
        }
      }
    }

    .item-price {
      margin: 15px 0;
      font-size: 20px;
      @include flex(row, flex-start, center, 20px);

      .current-price {
        font-weight: 500;
        margin-right: 10px;
      }

      .real-price {
        color: $red;
        text-decoration: line-through solid 1px;
      }
    }

    .action-buttons {
      span {
        display: inline-block;
        margin-right: 8px;
        padding: 5px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;

        svg {
          width: 20px;
          height: 20px;
          color: $dark-blue;
        }

        svg.liked {
          fill: $red;
        }
      }
    }
  }
}
</style>
