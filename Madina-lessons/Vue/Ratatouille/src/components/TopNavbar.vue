<script setup>
import { ref, inject } from 'vue';
import { RouterLink } from 'vue-router';
import { GlProfile } from '@kalimahapps/vue-icons';
import { ChMenuHamburger } from '@kalimahapps/vue-icons';

import { auth } from '@/firebase/config'
import { useRouter } from 'vue-router'
import BurgerMenu from './BurgerMenu.vue';

const { user, isLoading } = inject('user')
const router = useRouter()
const showBurgerMenu = ref(false)

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
const toggleBurgerMenu = (bool) => { showBurgerMenu.value = bool }
</script>

<template>
  <nav>
    <RouterLink to="#" class="navbar-btn">
      <ChMenuHamburger @click="toggleBurgerMenu(true)" />
      <burger-menu v-if="showBurgerMenu" @close-menu="toggleBurgerMenu(false)" />
      <!-- <modal-view v-if="showBurgerMenu" @close-modal="toggleBurgerMenu(false)">
        <h2>MENU</h2>
        <h2>RESERVATION</h2>
        <h2>ABOUT</h2>
        <h2>CONTACT</h2>
        <h2>BLOG</h2>
      </modal-view> -->
    </RouterLink>
    <h1 class="logo-h1">
      <RouterLink to="/" class="navbar-item">Ratatouille</RouterLink>
    </h1>
    <RouterLink to="/menu" class="navbar-item">MENU</RouterLink>
    <RouterLink to="/about" class="navbar-item">ABOUT</RouterLink>
    <RouterLink to="/book-a-table" class="navbar-item">BOOK A TABLE</RouterLink>



    <RouterLink v-if="user" to="#" class="navbar-btn" @click="handleLogout">
      <GlProfile />
      Logout
    </RouterLink>
    <RouterLink v-else to="/login" class="navbar-btn">
      <GlProfile />
      Login
    </RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');

nav {
  background-color: $dark;
  position: absolute;
  top: 50px;
  left: 50px;
  z-index: 1;
  width: 600px;
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
    color: $light;
    text-decoration: none;
    display: inline-block;

    &.navbar-btn {
      border: solid 1px $text-color;
      padding: 10px;
      border-radius: 10px;
      @include flex();
    }
  }
}
</style>
