<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="gallery">
    <div class="thumbnails">
      <img :src="imageUrl" alt="product-thumbnail">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  @include flex(row, center, center, 15px);

  .thumbnails {
    @include flex(column, center, center, 11px);

    img {
      width: 100%;
    }
  }
}
</style>
