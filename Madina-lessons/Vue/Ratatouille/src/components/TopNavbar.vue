<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <button class="navbar-btn">🍔</button>
    <h1 class="logo-h1">
      <RouterLink to="/" class="navbar-item">Ratatouille</RouterLink>
    </h1>
    <RouterLink to="/menu" class="navbar-item">MENU</RouterLink>
    <RouterLink to="/about" class="navbar-item">ABOUT</RouterLink>
    <RouterLink to="/book-a-table" class="navbar-btn">BOOK A TABLE</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');

nav {
  background-color: black;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 1;
  width: 500px;
  display: flex;
  padding: 0 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;

  .logo-h1 {
    font-family: "Sofia", serif;
    font-size: 25px;
    margin: 20px;
    display: inline-block;
    transform: scale(1.3);
  }

  a {
    color: white;
    text-decoration: none;
    display: inline-block;

    &.navbar-btn {
      border: solid 1px gray;
      padding: 10px;
      border-radius: 10px;

      &:hover {
        background-color: gray;
      }
    }
  }
}
</style>
