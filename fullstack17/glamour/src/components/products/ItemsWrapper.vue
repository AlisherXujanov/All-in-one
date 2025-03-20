<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { BxSearchAlt } from '@kalimahapps/vue-icons'
import { LuShoppingCart } from '@kalimahapps/vue-icons'
import { BxHeart } from '@kalimahapps/vue-icons'
import { BxSolidHeart } from '@kalimahapps/vue-icons'
import { RouterLink } from 'vue-router'


const emit = defineEmits(['toggle-like'])

const props = defineProps({
  items: Array, // first prop
  gridItems: Boolean, // second prop
})


</script>
<template>
  <div :class="props.gridItems ? '' : 'grid'">
    <div v-for="item in items" :key="item.id" class="item-wrapper" :class="props.gridItems ? 'list' : ''">
      <div class="img-wrapper">
        <router-link :to="'/product-details/' + item.id">
          <img src="" alt="item-image" width="100%" height="200">
        </router-link>
      </div>
      <div class="item-info">
        <h3>{{ item.title }}
          <div class="colors">
            <span v-for="c in item.colors" :key="c" :class="c"></span>
          </div>
        </h3>
        <div class="item-price" v-if="props.gridItems">
          <div>
            <span class="current-price">${{ item.price - (item.price * item.discount) }}</span>
            <span class="real-price">${{ item.price }}</span>
          </div>
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
        <div class="item-price" v-else>
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
          <div>
            <span class="current-price">${{ item.price - (item.price * item.discount) }}</span>
            <span class="real-price">${{ item.price }}</span>
          </div>
        </div>

        <p class="text-secondary item-description">
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
  </div>
</template>


<style lang="scss" scoped>
.item-wrapper {
  &.list {
    @include grid(2);
    grid-template-columns: 393px 1fr;
  }

  margin: 50px 0;
  padding: 10px;

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

.grid {
  @include grid(4);
  position: relative;

  .item-wrapper {
    position: relative;

    .img-wrapper {
      width: 100%;
      height: 200px;
      background-color: #eee
    }

    .item-info {
      h3 {
        font-family: monospace;
        font-size: 20px;
        font-weight: bold;
        @include flex(column, center, center, 0);

        .colors {
          margin-top: 10px;
        }
      }

      .item-description {
        display: none;
      }

      .item-price {
        margin: 0;
        flex-direction: column;
        gap: 0;

        .real-price {
          color: $red;
          text-decoration: line-through solid 1px;
        }
      }

      .action-buttons {
        display: none;
      }
    }

    &:hover {
      .item-info {
        .action-buttons {
          display: flex;
          flex-direction: column;
          top: 100px;
          left: 20px;
          position: absolute;

          span {
            &:hover {
              background-color: $khai;
            }
          }
        }
      }
    }
  }
}
</style>
