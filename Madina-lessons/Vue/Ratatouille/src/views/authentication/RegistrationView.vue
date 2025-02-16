<script setup>
import { reactive } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';


const form = reactive({
  username: '',
  date: '',
  gender: '',
  city: '',
  email: '',
  password: '',
  confirm: ''
});
const auth = getAuth();
const router = useRouter()


const submit = async () => {
  if (!form.password.match(/^[a-zA-Z0-9$]{6,30}$/)) {
    toast.error("Password must be 6-30 characters long and contain only letters, numbers, or $", {
      theme: 'dark',
      autoClose: 3000,
    });
    return;
  }

  if (form.password !== form.confirm) {
    toast.error("Passwords do not match!", {
      theme: 'dark',
      autoClose: 3000,
    });
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, form.email, form.password)
    toast.success("Successfully logged in", {
      theme: 'dark',
      type: 'success',
      delay: 2000
    })
    setTimeout(() => {
      router.push('/') // Redirect to home page after login
    }, 2000)
  } catch (err) {
    console.log(err)
    toast.error(err.message, {
      theme: 'dark',
      type: 'error'
    })
  }
}

</script>

<template>
  <div class="register-form">
    <h1 class="page-title">Create an account</h1>
    <form @submit.prevent="submit">
      <div class="sign-up">
        <label for="username-input">Username</label>
        <input id="username-input" type="username" placeholder="Username" v-model="form.username" required>
      </div>

      <div class="sign-up">
        <label for="date-input">Birthday</label>
        <input id="date-input" type="date" v-model="form.date" required>
      </div>

      <div class="sign-up">
        <label for="gender-input">Gender</label>
        <select id="gender-input" v-model="form.gender">
          <option value="" disabled>Select your gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="sign-up">
        <label for="city-input">City</label>
        <input id="city-input" type="text" placeholder="City" v-model="form.city">
      </div>
      <div class="sign-up">
        <label for="email-input">Email</label>
        <input id="email-input" type="email" placeholder="Email" v-model="form.email" required>
      </div>
      <div class="sign-up">
        <label for="pass-input">password</label>
        <input id="pass-input" type="Password" placeholder="Password" v-model="form.password" required>
      </div>
      <div class="sign-up">
        <label for="confirm-input">Confirm Password</label>
        <input id="confirm-input" type="Password" placeholder="Confirm Password" v-model="form.confirm" required>
      </div>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

      <div class="sign-up">
        <p class="sign-in">
          Don't have an account? <router-link to="/Login" class="small-link">Sign In</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.register-form {
  width: 100%;
  min-height: 110vh;
  background: url(royalblue.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    padding: 20px;
    margin: 0 auto;
    width: 400px; // Changed from 30px to a more reasonable width
    background: rgba(255, 255, 255, 0.9); // Added background for better visibility
    border-radius: 15px;
  }

  .sign-up {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    label {
      margin-bottom: 5px;
    }
  }

  input,
  select,
  button {
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 15px;
    outline: none;
    border: 1px solid #ddd;
    background-color: white;
  }

  button {
    background-color: #3498db; // Using a specific blue color
    color: white;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  .small-link {
    color: #3498db;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #2980b9;
    }
  }

  .page-title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
