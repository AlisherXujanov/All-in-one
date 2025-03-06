<script setup>
import { ref, onMounted, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { AiOutlineMail } from "vue-icons/ai"
import { BsTelephoneOutbound } from "vue-icons/bs"
import { RiArrowDropDownLine } from "vue-icons/ri"
import { CgProfile } from "vue-icons/cg"
import { CiHeart } from "vue-icons/ci"
import { MdOutlineShoppingCart } from "vue-icons/md"
import { IoSearch } from "vue-icons/io5"
import NavLinkDrp from './NavLinkDrp.vue'
import Logo from '../../../assets/images/logo.png'
import { BASE_URL } from '../../../store'
import './style.scss'

const store = useStore()
const { t } = useI18n()

const products = ref([])
const searchResults = ref([])

const borderStyle = {
  border: "1px solid #FB2E86",
  borderTop: "none",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
}

onMounted(() => {
  fetchLatestProducts()
})

const fetchLatestProducts = async () => {
  const response = await fetch(BASE_URL + "products")
  products.value = await response.json()
}

const handleSearch = (e) => {
  const value = e.target.value.toLowerCase()

  if (value.length === 0) {
    searchResults.value = []
  } else {
    const result = products.value.filter(p => p.name.toLowerCase().includes(value))

    if (result.length === 0) {
      searchResults.value = [{ name: "No results found", id: 'not_found' }]
    } else {
      searchResults.value = result
    }
  }
}

const activateCurrency = (currency) => {
  store.dispatch('ACTIVATE_CURRENCY', currency.code)
}

const activateLang = (language) => {
  store.dispatch('SET_LANG', language.code)
  const { locale } = useI18n()
  locale.value = language.code
}
</script>


<template>
  <nav>
    <div class="top">
      <div class="left">
        <a href="mailto:WebMaster@gmail.com">
          <AiOutlineMail />
          WebMaster@gmail.com
        </a>
        <a href="tel:+998334747477">
          <BsTelephoneOutbound />
          +99833 4747477
        </a>
      </div>
      <div class="right">
        <NavLinkDrp :items="state.languages" :activate-fn="activateLang" />
        <NavLinkDrp :items="state.currencies" :activate-fn="activateCurrency" />

        <RouterLink to="/login">{{ t("navigation.login") }}
          <CgProfile />
        </RouterLink>
        <RouterLink to="/wishlist">{{ t("navigation.wishlist") }}
          <CiHeart />
        </RouterLink>
        <RouterLink to="/cart">
          <MdOutlineShoppingCart />
        </RouterLink>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <RouterLink to="/">
          <h1 class="logo">
            <img :src="Logo" width="100" height="100" :style="{ transform: 'scale(2)' }" />
          </h1>
        </RouterLink>
      </div>

      <div id="burger-menu-wrapper">
        <div class="burger-top"></div>
        <div class="burger-middle"></div>
        <div class="burger-bottom"></div>
      </div>
      <input id="burger-menu-toggler-input-checkbox" type="checkbox" />

      <div class="right">
        <div class="links">
          <RouterLink to="/" active-class="active">{{ t("navigation.home") }}</RouterLink>
          <RouterLink to="/about" active-class="active">{{ t("navigation.about") }}</RouterLink>
          <RouterLink to="/products" active-class="active">{{ t("navigation.products") }}</RouterLink>
          <RouterLink to="/shop" active-class="active">{{ t("navigation.shop") }}</RouterLink>
          <RouterLink to="/contact" active-class="active">{{ t("navigation.contact") }}</RouterLink>
        </div>
        <div class="searchbar">
          <input type="search" placeholder="Search" @input="handleSearch" />
          <button>
            <IoSearch />
          </button>

          <div v-if="searchResults" class="search-info" :style="searchResults.length > 0 ? borderStyle : {}">
            <div v-for="(product, idx) in searchResults" :key="idx">
              <RouterLink :to="`/products/${product.id}`" :class="{ last: idx === searchResults.length - 1 }">
                <div class="search-link">
                  <h4>{{ product.name }}</h4>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
