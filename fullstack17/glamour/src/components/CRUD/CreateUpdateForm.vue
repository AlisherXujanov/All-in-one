<script setup>
import { reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { BASE_URL } from '@/store'
import axios from "axios"


const colorChoices = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'brown', 'black', 'white', 'gray', 'pink', 'gold', 'silver', 'teal', 'lime', 'maroon', 'navy', 'olive', 'purple', 'teal', 'turquoise', 'violet', 'yellow']

const props = defineProps({
  item: {
    type: Object,
    required: false
  },
  title: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['toggle-modal', 'product-updated'])
const form = reactive({
  title: props.item ? props.item.title : '',
  price: props.item ? props.item.price : '',
  discount: props.item ? props.item.discount : '',
  description: props.item ? props.item.description : '',
  colors: props.item ? props.item.colors : [],
  pictureUrl: props.item ? props.item.pictureUrl : "",
  // stars: '',
  // liked: false,
  // likes: []
})
async function handleSubmit(e) {
  try {
    for (let key in form) {
      if (form[key] === "") {
        toast(`${key} is required`, { autoClose: 3000, type: 'error' })
        return
      }
    }
    const data = {
      ...form,
      "stars": 3, "liked": false,
      "likes": [2, 5, 9]
    }

    const URL = `${BASE_URL}/shop-list-items` + (props.item ? `/${props.item.id}` : "")
    let response;
    if (props.item) {
      response = await axios.put(URL, data)
      emit('product-updated', response.data)
    } else {
      response = await axios.post(URL, data)
    }
    emit('toggle-modal', false)
    toast(
      props.item ? 'Product updated successfully' : 'Product created successfully',
      { autoClose: 3000, type: 'success' }
    )
  } catch (error) {
    console.error('Error creating product:', error)
    toast(error.response?.data?.message || 'Failed to create product', {
      autoClose: 3000,
      type: 'error'
    })
  }
}


</script>

<template>
  <div>
    <div class="modal-screen">
      <div class="modal-content">
        <h1>{{ props.title }}</h1>

        <span id="close-modal" @click="emit('toggle-modal')">&times;</span>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="form.title" required placeholder="Enter title">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description" required placeholder="Enter description"></textarea>
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" id="price" v-model="form.price" required placeholder="Enter price" min="0">
          </div>
          <div class="form-group">
            <label for="discount">Discount</label>
            <input type="number" id="discount" v-model="form.discount" required placeholder="Enter discount" min="0"
              max="99">
            <small class="text-muted">Discount is in percentage (0-99). Example: 50 which is 50% off</small>
          </div>
          <div class="form-group">
            <label for="colors">Colors</label>
            <select name="colors" id="colors" v-model="form.colors" multiple required>
              <option v-for="c in colorChoices" :key="c" :value="c">
                {{ c.charAt(0).toUpperCase() + c.slice(1) }}
              </option>
            </select>
            <small class="text-muted">You can press ctrl+click to select multiple colors</small>
            <div class="colors-demonstration" v-if="form.colors.length > 0">
              <p class="selected-colors">
                Selected <b>{{ form.colors.length }}</b> {{ form.colors.length > 1 ? 'colors' : 'color' }}:
                <span v-for="c in form.colors" :key="c" :class="c"
                  @click="(e) => { e.preventDefault(); form.colors = form.colors.filter(color => color !== c) }"></span>
              </p>
            </div>
          </div>
          <div class="form-group">
            <label for="pictureUrl">Picture URL</label>
            <input type="url" id="pictureUrl" v-model="form.pictureUrl" required placeholder="https://...">
            <img v-if="form.pictureUrl" :src="form.pictureUrl" alt="product-image" class="product-image"
              @click="(e) => { e.preventDefault(); form.pictureUrl = '' }">
          </div>
          <button type="submit"
            :disabled="!form.title || !form.description || !form.price || !form.discount || !form.colors.length || !form.pictureUrl">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:color";

.modal-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  @include flex();


  .modal-content {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    @include flex(column, flex-start, center);

    #close-modal {
      position: absolute;
      top: 0;
      right: -30px;
      cursor: pointer;
      background: $violet;
      color: $light;
      font-weight: bold;
      @include circle(30px);
      @include flex();
    }

    form {
      width: 100%;
      height: 80vh;
      overflow-y: auto;
      padding-right: 20px;
      @include flex(row, flex-start, center);


      .form-group {
        width: 100%;
        margin-bottom: 10px;
        text-align: left;

        label {
          display: block;
          margin-bottom: 5px;
        }

        input,
        textarea {
          display: block;
          width: 100%;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 10px;
          outline: none;
          border: none;
          background-color: #eee;
          border: 1px solid transparent;

          &:focus {
            border-color: $violet;
            background-color: $light;
          }

          &::placeholder {
            color: #aaa;
          }
        }

        textarea {
          min-height: 100px;
          overflow-y: auto;
        }

        img {
          width: 150px;
          height: 150px;
          border-radius: 5px;
          margin: 10px 0;
        }
      }

      button {
        width: 100%;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: $violet;
        color: $light;
        cursor: pointer;

        &:hover {
          background: color.adjust($violet, $lightness: -10%);
        }

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      }

      select {
        width: 100%;
        padding: 10px 20px;
        border-radius: 5px;
        margin-bottom: 10px;
        outline: none;
        border: 1px solid transparent;
        background-color: #eee;
        cursor: pointer;
        min-height: 120px;

        &:focus {
          border-color: $violet;
          background-color: $light;
        }

        option {
          padding: 8px 12px;
          margin: 2px 0;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;

          &:hover {
            background-color: #f0f0f0;
          }

          &:checked {
            background-color: $violet;
            color: $light;
          }
        }
      }

      .colors-demonstration {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        @include product-colors;
      }
    }
  }
}
</style>
