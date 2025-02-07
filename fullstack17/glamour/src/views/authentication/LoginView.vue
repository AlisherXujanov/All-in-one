<script setup>
import { reactive, ref } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'
import { toast } from 'vue3-toastify'
import { RouterLink, useRouter } from 'vue-router'
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from '@/firebase/config'


const router = useRouter()
const form = reactive({
    email: '',
    password: '',
})
const submitForm = async (e) => {
    const passwordPattern = /^[a-zA-Z0-9$#@-_]*$/
    if (passwordPattern.test(form.password)) {
        try {
            await signInWithEmailAndPassword(auth, form.email, form.password)
            toast("Logged in successfully", {
                autoClose: 1000,
                type:toast.TYPE.SUCCESS,
                theme: toast.THEME.DARK,
            });
            router.push('/') // Redirect to home page after login
        } catch (err) {
            toast(err.message, {
                autoClose: 1000,
                type: toast.TYPE.ERROR,
                theme: toast.THEME.DARK,
            });
        }
    }
    e.target.reset()
    form.email = ''
    form.password = ''
}


</script>


<template>
    <div>
        <heading-vue heading="My Account" path="Home . Pages . Login" />
        <form @submit.prevent="submitForm" class="form-wrapper text-center">
            <div class="">
                <h1>Login</h1>
                <p>Please login using account detail bellow.</p>
            </div>
            <div class="mb-3">
                <input class="form-control" type="email" id="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div class="mb-3">
                <input class="form-control" type="password" id="password" v-model="form.password" placeholder="Password"
                    required />
            </div>
            <div class="mb-3 form-text">
                <router-link to="#" class="text-decoration-none">Forgot your password?</router-link>
            </div>
            <div class="mb-3 ">
                <button @keyup.enter="submitForm" class="btn btn-primary">Sign In</button> <br>
                <p class="form-text">Don’t have an Account?
                    <router-link to="/registration" class="text-decoration-none">Create account</router-link>
                </p>
            </div>
        </form>
    </div>
</template>


<style lang="scss" scoped>
form {
    width: 544px;
    padding: 50px;
    margin: 50px auto;
    box-shadow: 0 8px 16px $violet-dark;
}
</style>
