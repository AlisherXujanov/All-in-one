<script setup>
import { reactive, onMounted, ref, defineAsyncComponent } from 'vue'
import { BASE_URL } from '@/store'
import axios from 'axios'
import HeadingVue from '@/components/HeadingVue.vue'

// Convert synchronous imports to async components
const SpinnerVue = defineAsyncComponent(() => import('@/components/SpinnerVue.vue'))
const ItemsWrapper = defineAsyncComponent(() => import('@/components/products/ItemsWrapper.vue'))


const store = reactive({
    items: [],
})
const loaded = ref(true) // Загружены ли данные

async function getItems() {
    loaded.value = false
    try {
        const response = await axios.get(`${BASE_URL}/shopListItems`)
        const data = await response.data
        store.items.push(...data)
        console.log(store.items)
    }
    catch (e) {
        console.log("Ooops! Something went wrong!")
        console.log(e)
    }
    finally {
        loaded.value = true
    }
}

onMounted(() => {
    getItems()
})


function toggleLike(itemID) {
    const item = store.items.find(i => i.id == itemID)
    item.liked = !item.liked
}


</script>

<template>
    <div>
        <heading-vue heading="Shop" path="Shop . Pages . Shop" />

        <div class="filters-wrapper"></div>

        <div class="shop-list-items-wrapper">
            <div v-if="!loaded">
                <SpinnerVue />
            </div>
            <div v-else>
                <items-wrapper :items="store.items" @toggle-like="toggleLike" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shop-list-items-wrapper {
    width: 1141px;
    margin: 0 auto;
}
</style>
