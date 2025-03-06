<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { BxSearchAlt } from '@kalimahapps/vue-icons'
import { LuShoppingCart } from '@kalimahapps/vue-icons'
import { BxHeart } from '@kalimahapps/vue-icons'
import { BxSolidHeart } from '@kalimahapps/vue-icons';


const emit = defineEmits(['toggle-like'])

defineProps({
  items: Array, // first prop
})


</script>
<template>
  <div v-for="item in items" :key="item.id" class="item-wrapper">
    <div class="img-wrapper">
      <img src="" alt="item-image" width="100%" height="200">
    </div>
    <div class="item-info">
      <h3>{{ item.title }}
        <div class="colors">
          <span v-for="c in item.colors" :key="c" :class="c"></span>
        </div>
      </h3>
      <div class="item-price">
        <span class="current-price">${{ item.price - (item.price * item.discount) }}</span>
        <span class="real-price">${{ item.price }}</span>
        <div class="stars">
          <span v-for="i in item.stars" :key="i" class="text-warning">
            <AnFilledStar />
          </span>

          <span v-if="item.stars < 5">
            <span v-for="i in 5 - item.stars" :key="i" class="text-secondary">
              <AnFilledStar />
            </span>
          </span>
        </div>
      </div>

      <p class="text-secondary">
        {{ item.description }}
      </p>
      <div class="action-buttons">
        <span class="add-to-card">
          <LuShoppingCart />
        </span>
        <span class="toggle-like" @click="emit('toggle-like', item.id)">
          <BxHeart v-if="!item.liked" />
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
  margin: 50px 0;
  padding: 10px;
  @include grid(2);
  grid-template-columns: 393px 1fr;

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
