<script setup>
import { ref, defineProps } from 'vue';
// let msg = ref("Component message")

const props = defineProps({
    msg: String
})


</script>

<template>
    <h1>{{ msg }}</h1>
</template>

<style scoped>

</style>