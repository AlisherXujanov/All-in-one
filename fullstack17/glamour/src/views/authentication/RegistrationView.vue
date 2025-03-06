<script setup lang="ts">
import { reactive } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'
import { toast } from 'vue3-toastify'
import { RouterLink, useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const form = reactive({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const auth = getAuth()
const router = useRouter()


const submitForm = (e) => {
    if (form.password !== form.password_confirmation) {
        toast("Passwords do not match...", { autoClose:2000,   type:toast.TYPE.ERROR });
        form.password = ""
        form.password_confirmation = ""
        return
    }

    const passwordPattern = /^[a-zA-Z0-9$#@-_]*$/
    if (passwordPattern.test(form.password)) {
        createUserWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    toast("Registered successfully. You can now login", {
                        autoClose: 2000,
                        type: toast.TYPE.SUCCESS,
                        theme: toast.THEME.DARK,
                    });
                    router.push('/login') // Redirect to login page after registration
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast("Ooops... Something wrong happened!", { autoClose: 1000, type: toast.TYPE.ERROR, });
            });
    }
    e.target.reset()
    form.email = ''
    form.password = ''
    form.password_confirmation = ''
    form.username = ''
}

</script>

<template>
    <div>
        <heading-vue heading="My Account" path="Home . Authentication . Registration" />
        <form @submit.prevent="submitForm" class="form-wrapper text-center">
            <div class="">
                <h1>Create account</h1>
                <p>Please fill in the information bellow to create your account.</p>
            </div>
            <div class="mb-3">
                <input class="form-control" type="text" id="username" v-model="form.username" placeholder="Username"
                    required />
            </div>
            <div class="mb-3">
                <input class="form-control" type="email" id="email" v-model="form.email" placeholder="Email" required />
            </div>
            <div class="mb-3">
                <input class="form-control" type="password" id="password" v-model="form.password" placeholder="Password"
                    required />
            </div>
            <div class="mb-3">
                <input class="form-control" type="password" id="password-confirmation"
                    v-model="form.password_confirmation" placeholder="Password confirmation" required />
            </div>
            <div class="mb-3 ">
                <button @keyup.enter="submitForm" class="btn btn-primary">Sign up</button> <br>
                <p class="form-text">Already have an account?
                    <router-link to="/login" class="text-decoration-none">Sign in</router-link>
                </p>
            </div>
        </form>
    </div>
</template>


<style scoped lang="scss">
form {
    width: 544px;
    padding: 50px;
    margin: 50px auto;
    box-shadow: 0 8px 16px $violet-dark;
}
</style>
