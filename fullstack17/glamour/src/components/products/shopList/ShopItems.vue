<script setup>
import { ref, computed } from 'vue'
// Functions == Methods

let darkTheme = ref(true)
let show = ref(true)


const toggleTheme = (e) => {
    darkTheme.value = !darkTheme.value
}
const toggleShow = (e) => {
    show.value = !show.value
}

let computedValue = computed(() => {
    return darkTheme.value ? 'dark' : 'light'
})

const darkThemeStyle = { backgroundColor: '#333', color: 'snow' }
const lightThemeStyle = { backgroundColor: '#fff' }
</script>


<template>
    <div :style="darkTheme ? darkThemeStyle : lightThemeStyle">
        <h1>Ecommerce Accessories & Fashion item</h1>
        <button @click="toggleTheme" :class="computedValue">Click</button>

        <div class="details">
            <button @click="toggleShow" :class="computedValue">
                Show
                <span class="arrow" :class="show ? 'rotate' : ''">&rArr;</span>
            </button>

            <div v-show="show">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aut exercitationem minima illum adipisci hic non nulla impedit reprehenderit nisi blanditiis, modi error iusto vero voluptatem eum laudantium ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aut exercitationem minima illum adipisci hic non nulla impedit reprehenderit nisi blanditiis, modi error iusto vero voluptatem eum laudantium ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aut exercitationem minima illum adipisci hic non nulla impedit reprehenderit nisi blanditiis, modi error iusto vero voluptatem eum laudantium ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aut exercitationem minima illum adipisci hic non nulla impedit reprehenderit nisi blanditiis, modi error iusto vero voluptatem eum laudantium ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus aut exercitationem minima illum adipisci hic non nulla impedit reprehenderit nisi blanditiis, modi error iusto vero voluptatem eum laudantium ratione.</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.dark {
    background-color: green;
    color: snow;
}

.light {
    background-color: black;
    color: red;
}

.arrow {
    display: inline-block;
}

.rotate {
    color: red;
    transform: rotate(90deg);
}
</style>
