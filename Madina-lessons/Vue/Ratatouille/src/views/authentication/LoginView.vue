<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '@/firebase/config'


const form = reactive({
  email: '',
  password: '',
})
const router = useRouter()

const submit = async () => {
  const passPattern = /^[a-zA-Z0-9$]{6,30}$/;

  if (!passPattern.test(form.password)) {
    toast("Invalid password", {
      theme: 'dark',
      type: 'error'
    })
    return
  }

  try {
    await signInWithEmailAndPassword(auth, form.email, form.password)
    toast("Successfully logged in", {
      theme: 'dark',
      type: 'success',
      delay: 2000
    })
    setTimeout(() => {
      router.push('/') // Redirect to home page after login
    }, 2000)
  } catch (err) {
    console.log(err)
    toast(err.message, {
      theme: 'dark',
      type: 'error'
    })
  }
}
onMounted(() => {
  //  - getItem(key) => get info from store data
  let info = localStorage.getItem('info') || "{}"
  info = JSON.parse(info)

  form.email = info.email || ''
  form.password = info.password || ''
})
onBeforeUnmount(() => {
  // localStorage  => is a storage that is available through browser
  //               => it gives us in total 10mb of storage
  //  - setItem(key, value) => to store data
  localStorage.setItem('info', JSON.stringify(form))
})
// stringify  =>   "..."      =>  converts to string form  (integer, object, arr, etc)
// parse      =>   { ... }    =>  converts back to the original form
</script>


<template>
  <div class="login-view">
    <h1 class="page-title">Login</h1>

    <form @submit.prevent="submit">
      <div class="form-field">
        <label for="email-input">Email</label>
        <input id="email-input" type="email" v-model="form.email" placeholder="Email" required />
      </div>
      <div class="form-field">
        <label for="pass-input">password</label>
        <input id="pass-input" type="password" v-model="form.password" placeholder="Password" required />
      </div>
      <div class="form-field">
        <button class="submit">Submit</button>
        <p>
          Don't have an account? <router-link to="/registration" class="small-link">Sign Up</router-link>
        </p>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100vh;
  @include flex();
  background: url(luxpur.jpg) no-repeat;
  background-position: center;
  background-size: cover;

  form {
    padding: 10px;
    width: 30%;
    margin: 0 auto;

    .form-field {
      margin-bottom: 55px 0;

      input,
      button {
        padding: 10px 20px;
        display: block;
        width: 100%;
        cursor: pointer;
        border-radius: 10px;
        margin-bottom: 15px;
        outline: none;
        border: none;
        background-color: $heading-color;
      }

      input:focus {
        background-color: $light;
        outline: 6px solid rgba(199, 25, 252, 0.3);
      }

      button {
        background-color: $purple;
        color: $light;
      }

      .small-link {
        color: $blue;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          color: blue;
        }
      }
    }
  }
}
</style>
