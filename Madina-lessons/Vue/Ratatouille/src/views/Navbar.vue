<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <button class="navbar-btn">🍔</button>
    <p class="logo-h1">Ratatouille</p>
    <a href="#" class="navbar-item">MENU</a>
    <a href="#" class="navbar-item">ABOUT</a>
    <button class="navbar-btn">BOOK A TABLE</button>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');

nav {
  background-color: black;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 500px;
  display: flex;
  padding: 0 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;

  .logo-h1 {
    font-family: "Sofia", serif;
  }
}
</style>
