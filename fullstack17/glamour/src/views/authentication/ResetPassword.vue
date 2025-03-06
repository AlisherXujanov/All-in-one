<script setup>
import { auth } from '@/firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import { ref } from 'vue'
import HeadingVue from '@/components/HeadingVue.vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

const email = ref('')
const router = useRouter()


const handleResetPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value)
    toast('Password reset email sent', {
      theme: "dark",
      type: "success",
      duration: 2000
    })
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (error) {
    toast(error.message, {
      type: "error"
    })
  }
}
</script>

<template>
  <heading-vue heading="Reset Password" path="Home . Authentication . Reset password" />
  <div class="reset-password">
    <p class="help-text">
      We will send you an email to reset your password.
    </p>
    <form @submit.prevent="handleResetPassword">
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Enter your email" required>
      </div>
      <button type="submit" class="btn btn-primary">Confirm email</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.reset-password {
  width: 544px;
  padding: 50px;
  margin: 50px auto;
  box-shadow: 0 8px 16px $violet-dark;
  text-align: center;

  input, button {
    margin: 10px 0;
    display: block;
    width: 100%;
    padding: 10px;
  }
}
</style>
