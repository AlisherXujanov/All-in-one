<script setup>
import dbJSON from '@/store/db.json'
import CarouselVue from '../CarouselVue.vue';
</script>


<template>
    <div>
        <h1>Featured Products</h1>

        <div class="featured-product-wrapper">
            <CarouselVue :slides="dbJSON.featuredProducts"></CarouselVue>
            <!-- <div v-for="item in dbJSON.featuredProducts" :key="item.id" class="product-item">
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
            </div> -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
h1 {
    text-align: center;
    margin: 20px 0;
}
</style>
