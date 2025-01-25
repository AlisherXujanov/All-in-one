<script setup>
import HelloWorld from "@/components/HelloWorld.vue"
import { ref } from 'vue';
let msg_from_parent = ref("Parent message")

</script>

<template>
    <HelloWorld :msg="msg_from_parent" />
</template>

<style>

</style>