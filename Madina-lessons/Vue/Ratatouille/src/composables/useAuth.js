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
