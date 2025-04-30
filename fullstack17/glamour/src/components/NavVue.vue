<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { MdOutlinedLanguage } from '@kalimahapps/vue-icons'
import { ReAccountPinCircleFill } from '@kalimahapps/vue-icons'
import { LuShoppingCart } from '@kalimahapps/vue-icons'
import { auth } from '@/firebase/config'
import { MiLogout } from '@kalimahapps/vue-icons'
import SearchBox from './SearchBox.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const lastScrollY = ref(0)
const isNavVisible = ref(true)
const isBurgerOpen = ref(false)

const toggleBurger = (e, bool = undefined) => {
  if (bool) {
    isBurgerOpen.value = bool
  } else {
    isBurgerOpen.value = !isBurgerOpen.value
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY.value) {
    // we make it invisible when the scroll height is greater than the last scroll height
    if (isNavVisible.value && currentScrollY > 120) {
      isNavVisible.value = false
    }
  } else {
    // Scrolling up
    isNavVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>

<template>
  <nav :class="{ 'nav-hidden': !isNavVisible }">
    <div class="top-nav">
      <div class="container">
        <div class="left">
          <a href="mailto:support@glamourfashion.com">
            <i class="fas fa-envelope"></i>
            support@glamourfashion.com
          </a>
          <a href="tel:+15551234567">
            <i class="fas fa-phone"></i>
            (555) 123-4567
          </a>
        </div>
        <div class="right">
          <div class="nav-dropdown">
            <MdOutlinedLanguage />
            <span>
              English
            </span>
          </div>
          <div class="nav-dropdown">
            <span>USD</span>
          </div>

          <div v-if="user" class="logged-in-menu">
            <RouterLink to="/wishlist">
              <LuShoppingCart />
              <span>Wishlist</span>
            </RouterLink>
            <RouterLink to="#" @click="handleLogout">
              <MiLogout />
              <span>Logout</span>
            </RouterLink>
          </div>
          <div v-else class="logged-out-menu">
            <RouterLink to="/login">
              <ReAccountPinCircleFill />
              <span>Login</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="main-nav">
      <div class="container">
        <div class="left">
          <RouterLink to="/" class="logo">Glamour</RouterLink>
          <div class="burger-menu" @click="(e) => { toggleBurger(e) }">
            <div class="burger-line" :class="{ 'open': isBurgerOpen }"></div>
            <div class="burger-line" :class="{ 'open': isBurgerOpen }"></div>
            <div class="burger-line" :class="{ 'open': isBurgerOpen }"></div>
          </div>
          <div class="nav-links">
            <RouterLink to="/" active-class="active">Home</RouterLink>
            <RouterLink to="/about" active-class="active">About</RouterLink>
            <RouterLink to="/blog" active-class="active">Blog</RouterLink>
            <RouterLink to="/shop" active-class="active">Shop</RouterLink>
            <RouterLink to="/contact" active-class="active">Contact</RouterLink>
            <RouterLink to="/faq" active-class="active">FAQ</RouterLink>
          </div>
        </div>
        <div class="right">
          <SearchBox />
        </div>
      </div>
    </div>

    <!-- New mobile menu -->
    <div class="mobile-menu" :class="{ 'open': isBurgerOpen }">
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/" active-class="active">Home</RouterLink>
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/about" active-class="active">About</RouterLink>
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/blog" active-class="active">Blog</RouterLink>
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/shop" active-class="active">Shop</RouterLink>
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/contact" active-class="active">Contact</RouterLink>
      <RouterLink @click="(e) => { toggleBurger(e, false) }" to="/faq" active-class="active">FAQ</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);
  z-index: 1000;

  &.nav-hidden {
    transform: translateY(-100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-nav {
    background: $violet;
    color: white;
    padding: 0.5rem 0;

    .container {
      .left {
        display: flex;
        gap: 2rem;

        a {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          i {
            font-size: 0.8rem;
          }

          &:hover {
            color: #e5e5e5;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .logged-in-menu {
          @include flex($gap: 20px);
        }

        a,
        .nav-dropdown {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
      }
    }
  }

  .main-nav {
    padding: 1rem 0;
    background: white;

    .container {
      .left {
        display: flex;
        align-items: center;
        gap: 3rem;

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: $dark-blue;
          text-decoration: none;
        }

        .burger-menu {
          display: none;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;

          a {
            color: $dark-blue;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              background: #ff4444;
              transition: width 0.3s ease;
            }

            &:hover::after,
            &.active::after {
              width: 100%;
            }

            &.active {
              color: #ff4444;
            }
          }
        }
      }

      .right {
        .searchbar {
          input {
            width: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (max-width: 992px) {
    .top-nav {
      .container {
        .left {
          gap: 1rem;

          a {
            font-size: 0.8rem;
          }
        }

        .right {
          gap: 1rem;

          a,
          .nav-dropdown {
            font-size: 0.8rem;
          }
        }
      }
    }

    .main-nav {
      .container {
        .left {
          gap: 2rem;

          .logo {
            font-size: 1.5rem;
          }

          .nav-links {
            gap: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .top-nav {
      display: none;
    }

    .main-nav {
      padding: 0.5rem 0;
      position: relative;

      .container {
        .left {
          width: 100%;
          justify-content: space-between;
          padding: 0 1rem;

          .logo {
            margin-bottom: 0;
            font-size: 1.5rem;
          }

          .burger-menu {
            display: flex;
            z-index: 1002;
          }

          .nav-links {
            display: none;
          }
        }

        .right {
          display: none;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .top-nav {
      .container {
        .left {
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .right {
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;

          .nav-dropdown,
          a {
            font-size: 0.8rem;
          }
        }
      }
    }

    .main-nav {
      .container {
        .left {
          .nav-links {
            flex-direction: column;
            gap: 0.5rem;

            a {
              width: 100%;
              padding: 0.5rem;
              border-bottom: 1px solid #e5e5e5;

              &:last-child {
                border-bottom: none;
              }

              &::after {
                display: none;
              }

              &.active {
                background: #ff4444;
                color: white;
              }
            }
          }
        }
      }
    }
  }
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: white;
  padding: 80px 2rem 2rem;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;

  &.open {
    right: 0;
    display: flex;
  }

  a {
    width: 100%;
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.1rem;
    color: $dark-blue;
    text-decoration: none;
    font-weight: 500;

    &:last-child {
      border-bottom: none;
    }

    &::after {
      display: none;
    }

    &.active {
      background: #ff4444;
      color: white;
    }
  }
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;

  .burger-line {
    width: 100%;
    height: 2px;
    background-color: $dark-blue;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
    transform-origin: left;
  }

  .burger-line.open:nth-child(1) {
    transform: rotate(45deg) translateX(0);
  }

  .burger-line.open:nth-child(2) {
    opacity: 0;
  }

  .burger-line.open:nth-child(3) {
    transform: rotate(-45deg) translateX(0);
  }
}

@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }
}
</style>