'use client'
import { useRouter } from 'next/navigation'

export default function NavigationExample() {
  const router = useRouter()

  return (
    <div>
      {/* Programmatic navigation */}
      <button onClick={() => router.push('/about')}>
        Go to About
      </button>

      <button onClick={() => router.back()}>
        Go Back
      </button>

      <button onClick={() => router.forward()}>
        Go Forward
      </button>

      <button onClick={() => router.refresh()}>
        Refresh Current Page
      </button>
    </div>
  )
} 