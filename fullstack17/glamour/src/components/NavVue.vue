<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, computed, inject } from 'vue'
import { AkSearch } from '@kalimahapps/vue-icons'
import { MdOutlinedLanguage } from '@kalimahapps/vue-icons'
import { ReAccountPinCircleFill } from '@kalimahapps/vue-icons'
import { LuShoppingCart } from '@kalimahapps/vue-icons'
import { auth } from '@/firebase/config'
import { useAuth } from '@/composables/useAuth.js'
import { MiLogout } from '@kalimahapps/vue-icons'

const router = useRouter()
const search = ref('')
const isSearchOpen = ref(false)

const testUsers = [
  "Alisher", "John", "Doe", "Jane", "Doe", "Alijon",
  "Aziz", "Bemiyya", "Abu-bubu", "Donik", "Jonik", "Onur",
]

const { user, isLoading } = inject('auth')

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

const filteredNames = computed(() => {
  return testUsers.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <nav>
    <div class="top-nav">
      <div class="container">
        <div class="left">
          <a href="mailto:alisherxujanov163@gmail.com">
            <i class="fas fa-envelope"></i>
            alisherxujanov163@gmail.com
          </a>
          <a href="tel:+998334747477">
            <i class="fas fa-phone"></i>
            +998 (33) 474-74-77
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
          <div class="nav-links">
            <RouterLink to="/" active-class="active">Home</RouterLink>
            <RouterLink to="/about" active-class="active">About</RouterLink>
            <RouterLink to="/products" active-class="active">Products</RouterLink>
            <RouterLink to="/blog" active-class="active">Blog</RouterLink>
            <RouterLink to="/shop" active-class="active">Shop</RouterLink>
            <RouterLink to="/contact" active-class="active">Contact</RouterLink>
          </div>
        </div>
        <div class="right">
          <div class="search-container" :class="{ active: isSearchOpen }">
            <div class="search-box">
              <input type="search" v-model="search" placeholder="Search for products" @focus="isSearchOpen = true"
                @blur="isSearchOpen = false">
              <button>
                <AkSearch />
              </button>
            </div>
            <ul class="search-results" v-if="search.length > 0">
              <li v-for="name in filteredNames" :key="name">
                {{ name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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
        .search-container {
          position: relative;

          .search-box {
            display: flex;
            align-items: center;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            overflow: hidden;

            input {
              padding: 0.5rem 1rem;
              border: none;
              outline: none;
              width: 200px;
              font-size: 0.9rem;
            }

            button {
              padding: 0.5rem 1rem;
              border: none;
              color: $dark-blue;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 40px;

              &:hover {
                color: $violet;
              }
            }
          }

          .search-results {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            border: 1px solid #e5e5e5;
            border-top: none;
            border-radius: 0 0 4px 4px;
            max-height: 200px;
            overflow-y: auto;
            z-index: 1000;

            li {
              padding: 0.5rem 1rem;
              list-style: none;
              cursor: pointer;

              &:hover {
                background: #f5f5f5;
              }
            }
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
      .container {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;

        .left {
          width: 100%;
          justify-content: center;
        }

        .right {
          width: 100%;
          justify-content: center;
        }
      }
    }

    .main-nav {
      .container {
        flex-direction: column;
        gap: 1rem;

        .left {
          flex-direction: column;
          width: 100%;
          text-align: center;

          .logo {
            margin-bottom: 1rem;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        .right {
          width: 100%;

          .search-container {
            .search-box {
              width: 100%;

              input {
                width: 100%;
              }
            }
          }
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
</style>
