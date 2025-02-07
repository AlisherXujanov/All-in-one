<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps({
    slides: {
        type: Array,
        required: true
    }
})

const carouselConfig = {
    itemsToShow: 3,
    wrapAround: true
}
</script>

<template>
    <Carousel v-bind="carouselConfig">
        <Slide v-for="item in slides" :key="item.id">
            <div class="carousel__item">
                <div class="product-image">
                    <img src="" alt="product-item-image" width="100%" height="300">
                </div>
                <div class="product-body">
                    <h4>{{ item.name }}</h4>
                    <div class="item-colors">
                        <div class="green"></div>
                        <div class="red"></div>
                        <div class="blue"></div>
                    </div>
                    <p>Code: {{ item.code }}</p>
                    <p>${{ item.price }}</p>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>
