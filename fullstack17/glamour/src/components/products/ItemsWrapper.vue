<script setup>
import { AnFilledStar } from '@kalimahapps/vue-icons'
import { BxSearchAlt } from '@kalimahapps/vue-icons'
import { BxEdit } from '@kalimahapps/vue-icons';
import { BxHeart } from '@kalimahapps/vue-icons'
import { BxSolidHeart } from '@kalimahapps/vue-icons'
import { useRouter } from 'vue-router'
import { goToTopSmoothly } from '@/composables/helpers'
import { ref } from 'vue'
import CreateUpdateForm from '@/components/CRUD/CreateUpdateForm.vue'


const router = useRouter()
const isModalOpen = ref(false)
const item = ref(undefined)


const emit = defineEmits(['toggle-like', 'product-updated'])

const props = defineProps({
  items: Array, // first prop
  gridItems: Boolean, // second prop
})

const toggleModal = (bool, productID = undefined) => {
  isModalOpen.value = bool

  if (bool == false) {
    // No need to reload, the parent will handle the update
  }

  if (productID) {
    item.value = props.items.find(item => item.id === productID)
  }
}

const handleProductUpdate = (updatedProduct) => {
  emit('product-updated', updatedProduct)
}

const handleProductClick = async (productId) => {
  await goToTopSmoothly()
  router.push(`/product-details/${productId}`)
}
</script>
<template>
  <div :class="props.gridItems ? '' : 'grid'">
    <div v-for="item in items" :key="item.id" class="item-wrapper" :class="props.gridItems ? 'list' : ''">
      <div class="img-wrapper">
        <div class="product-image" @click="handleProductClick(item.id)">
          <img :src="item.pictureUrl" alt="item-image" width="100%">
        </div>
      </div>
      <div class="item-info">
        <h3>{{ item.title }}
          <div class="colors">
            <span v-for="c in item.colors" :key="c" :class="c"></span>
          </div>
        </h3>
        <div class="item-price" v-if="props.gridItems">
          <div>
            <span class="current-price">${{ (item.price * (1 - item.discount / 100)).toFixed(2) }}</span>
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
            <span class="current-price">${{ (item.price * (1 - item.discount / 100)).toFixed(2) }}</span>
            <span class="real-price">${{ item.price }}</span>
          </div>
        </div>

        <p class="text-secondary item-description">
          {{ item.description }}
        </p>
        <div class="action-buttons">
          <span class="add-to-card">
            <BxEdit @click="toggleModal(true, item.id)" />
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
  <create-update-form
    v-if="isModalOpen"
    @toggle-modal="toggleModal(false)"
    @product-updated="handleProductUpdate"
    title="Update Product"
    :item="item"
  />
</template>


<style lang="scss" scoped>
// Common mixins and variables
$transition-base: all 0.3s ease;
$shadow-base: 0 2px 8px rgba(0, 0, 0, 0.1);
$shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.15);

// Common image styles
%image-base {
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

// Common button styles
%action-button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: $shadow-base;
  cursor: pointer;
  transition: $transition-base;

  &:hover {
    background-color: $violet;
    color: $light;

    svg {
      transition: 0.1s;
      color: $light;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: $dark-blue;
  }
}

// Common wrapper styles
%wrapper-base {
  margin: 50px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: $shadow-base;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-hover;
  }
}

.item-wrapper {
  @extend %wrapper-base;

  &.list {
    @include grid(2);
    grid-template-columns: 393px 1fr;
    gap: 20px;
    transition: $transition-base;

    .img-wrapper {
      width: 100%;
      height: 300px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;

      img {
        @extend %image-base;
        height: 300px;
      }
    }
  }

  .img-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    aspect-ratio: 1;
    background-color: #f5f5f5;

    img {
      @extend %image-base;
      height: 300px;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .item-info {
    h3 {
      @include flex(row, flex-start, center, 20px);
      font-size: 1.2rem;
      margin-bottom: 15px;

      .colors {
        @include product-colors;
      }
    }

    .item-price {
      margin: 15px 0;
      font-size: 1.25rem;
      @include flex(row, flex-start, center, 20px);

      .current-price {
        font-weight: 600;
        margin-right: 10px;
        color: $dark-blue;
      }

      .real-price {
        color: $red;
        text-decoration: line-through solid 1px;
        font-size: 1rem;
      }
    }

    .item-description {
      margin: 10px 0;
      line-height: 1.5;
      color: #666;
    }

    .action-buttons {
      @include flex(row, flex-start, center, 10px);
      margin-top: 15px;

      span {
        @extend %action-button-base;

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
  gap: 20px;

  .item-wrapper {
    position: relative;
    margin: 0;

    .img-wrapper {
      width: 100%;
      height: 250px;
      background-color: #f5f5f5;
      overflow: hidden;
      border-radius: 8px;

      img {
        @extend %image-base;
        height: 250px;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .item-info {
      padding: 15px;
      text-align: center;

      h3 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        @include flex(column, center, center, 0);
        margin-bottom: 10px;

        .colors {
          margin-top: 10px;
        }
      }

      .item-description {
        display: none;
      }

      .item-price {
        margin: 10px 0;
        flex-direction: column;
        gap: 5px;

        .current-price {
          font-size: 1.2rem;
        }

        .real-price {
          font-size: 0.9rem;
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
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.9);
          padding: 10px;
          border-radius: 25px;
          gap: 10px;
          z-index: 1;

          span {
            @extend %action-button-base;
          }
        }
      }
    }
  }
}

// Media Queries
@media screen and (max-width: 1200px) {
  .grid {
    @include grid(3);
  }
}

@media screen and (max-width: 992px) {
  .grid {
    @include grid(2);
  }

  .item-wrapper.list {
    grid-template-columns: 300px 1fr;

    .img-wrapper {
      height: 250px;
    }
  }
}

@media screen and (max-width: 768px) {
  .grid {
    @include grid(1);
  }

  .item-wrapper.list {
    grid-template-columns: 1fr;
    text-align: center;

    .img-wrapper {
      height: 300px;
      max-width: 500px;
      margin: 0 auto;
    }

    .item-info {

      h3,
      .item-price,
      .action-buttons {
        justify-content: center;
      }
    }
  }

  .item-wrapper {
    margin: 25px 0;
    padding: 10px;

    .img-wrapper {
      aspect-ratio: 4/3;
      max-width: 100%;
    }
  }
}
</style>
