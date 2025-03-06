# Simple Firebase Authentication Guide for Vue.js
https://firebase.google.com/docs/auth/web/firebaseui


## Step 1: Project Setup

1. Create a new Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project" and follow the setup wizard
   - Give your project a name and click "Continue"
   - Disable Google Analytics (optional) and click "Create Project"

2. Register your web app:
   - Click the web icon (`</>`) on the project overview page
   - Register app with a nickname (e.g., "vue-auth-app")
   - Click "Register app"
   - Copy the Firebase configuration object (we'll use it later)

3. Enable Authentication methods:
   - In Firebase Console, go to "Authentication" → "Sign-in method"
   - Enable "Email/Password" and "Google" providers
   - Save changes

4. Install required packages in your Vue project:
   ```bash
   npm install firebase
   npm install vue-router
   ```

## Step 2: Firebase Configuration

Create a new file `src/firebase/config.js`:

```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // Replace with YOUR Firebase config object
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)
```

### Sign up component

```js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
```



## Step 3: Create Authentication Components

### Login Component
Create `src/views/authentication/LoginView.vue`:

```js
<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email"
          required
        >
      </div>
      <div class="form-group">
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password"
          required
        >
      </div>
      <button type="submit">Login</button>
      <button type="button" @click="handleGoogleLogin">
        Login with Google
      </button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(null)

const handleLogin = async () => {
  try {
    error.value = null
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/') // Redirect to home page after login
  } catch (err) {
    error.value = err.message
  }
}

const handleGoogleLogin = async () => {
  try {
    error.value = null
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    router.push('/') // Redirect to home page after login
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped lang="scss">
    ...
</style>
```

## Step 4: Add Authentication State Management

Create a new file `src/composables/useAuth.js`:
We need to use this composable in our app to get the current user and check if they are authenticated.
If they are not, we will redirect them to the login page.

```js
import { ref, onMounted, onUnmounted } from 'vue'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export function useAuth() {
  const user = ref(null)
  const isLoading = ref(true)

  let unsubscribe
  
  onMounted(() => {
    unsubscribe = onAuthStateChanged(auth, (u) => {
      user.value = u
      isLoading.value = false
    })
  })

  onUnmounted(() => {
    unsubscribe()
  })

  return { user, isLoading }
}
```

## Step 5: Protect Routes (Optional)

Update your router configuration to protect certain routes:

```js
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/authentication/LoginView.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
   // ... other routes
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser

  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
```

This configuration:
- Protects Home, Products, and Blog routes with authentication
- Leaves About and Contact pages publicly accessible
- Redirects unauthenticated users to the login page when trying to access protected routes
- Uses lazy loading for all route components for better performance

## Step 6: Add Logout Functionality

Add this to any component where you want logout functionality:

```js
import { auth } from '@/firebase/config'
import { useRouter } from 'vue-router'


const router = useRouter()

const handleLogout = async () => {
  try {
    await auth.signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
```

## Step 7: Display User Information

Create a new component `src/components/UserProfile.vue`:

```js
<script setup>
import { useAuth } from '@/composables/useAuth'
import { handleLogout } from '@/composables/useAuth'

const { user } = useAuth()
</script>

<template>
  <div class="user-profile">
    <h3>{{ user.displayName }}</h3>
    <p>{{ user.email }}</p>
    <img :src="user.photoURL" alt="User Avatar" width="100" height="100">
    <button @click="handleLogout">Logout</button>
  </div>
</template>
```


## Step 8: Reset Password
NOTE: This feature requires the user to have a verified email address.
Create a new component `src/views/authentication/ResetPasswordView.vue`:

```js
<script setup>
import { auth } from '@/firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'

const handleResetPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value)
    console.log('Password reset email sent')
  } catch (error) {
    console.error('Password reset error:', error)
  }
}
</script>

<template>
  <div class="reset-password">
    <h2>Reset Password</h2>
    <form @submit.prevent="handleResetPassword">
      <div class="form-group">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email"
          required
        >
      </div>
      <button type="submit">Reset Password</button>
    </form>
  </div>  
</template>
```


## Common Issues & Solutions

1. **Firebase Configuration Error**
   - Double-check your firebaseConfig object
   - Ensure all values are copied correctly from Firebase Console

2. **Authentication Errors**
   - Check if email/password meet Firebase requirements
   - Password must be at least 6 characters
   - Ensure email format is valid

3. **Routing Issues**
   - Make sure all path names match exactly
   - Check if navigation guards are working correctly

## Best Practices

1. Always use environment variables for Firebase configuration in production
2. Handle loading states during authentication
3. Provide clear error messages to users
4. Implement proper form validation
5. Never store sensitive information in client-side code

## Additional Resources

- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Vue.js Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)

```bash
npm install firebase
```

And follow this article:

https://medium.com/@olenkadark/building-a-real-time-chat-app-with-vue-js-3-and-firebase-cb9537961e62
