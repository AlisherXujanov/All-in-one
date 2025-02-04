<script setup>
import HomeImageLink from "@/components/HomeImageLink.vue"
import mainBgImage from "@/assets/images/main-bg.png"

const links = [
  {
    image: mainBgImage,
    linkText: "MENU",
    link: "/menu",
  },
  {
    image: mainBgImage,
    linkText: "RESERVATION",
    link: "/book-a-table",
  },
  {
    image: mainBgImage,
    linkText: "OUR RESTAURANT",
    link: "/about",
  }
]

</script>

<template>
  <div class="sushi-page-wrapper">
    <div class="left-side">
      <h1 class="page-title">Sushi Sensation</h1>
    </div>
    <div class="right-side">
      <div v-for="i in [...Array(links.length).keys()]" :key="i" class="image-link-wrapper">
        <HomeImageLink
          :link="links[i].link"
          :image="links[i].image"
          :link-text="links[i].linkText"
        />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.sushi-page-wrapper {
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;


  .left-side {
    padding: 50px;
    background: url(../assets/images/main-bg.png);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-color: rgb(0, 0, 0, 0.2);
    background-blend-mode: darken;
    border-radius: 10px;
  }
}
</style>
