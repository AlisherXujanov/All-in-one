# Полное руководство по Firebase Authentication для Next.js

Комплексное руководство по внедрению Firebase Authentication в Next.js 14+ с App Router, TypeScript, SCSS и современными практиками.

## Предварительные требования

- Node.js 18+ установлен
- Базовые знания React и Next.js
- Аккаунт Google для Firebase

## Шаг 1: Настройка проекта

### 1.1 Создание Firebase проекта

1. Перейдите в [Firebase Console](https://console.firebase.google.com/)
2. Нажмите "Add Project" и следуйте мастеру настройки
3. Дайте проекту имя и нажмите "Continue"
4. Отключите Google Analytics (опционально) и нажмите "Create Project"

### 1.2 Регистрация веб-приложения

1. Нажмите на иконку веб (`</>`) на странице обзора проекта
2. Зарегистрируйте приложение с псевдонимом (например, "nextjs-auth-app")
3. Нажмите "Register app"
4. Скопируйте объект конфигурации Firebase (сохраните для дальнейшего использования)

### 1.3 Включение методов аутентификации

1. В Firebase Console перейдите в "Authentication" → "Sign-in method"
2. Включите нужные провайдеры:
   - **Email/Password**: Нажмите и переключите "Enable"
   - **Google**: Нажмите, переключите "Enable", добавьте email проекта
   - **GitHub** (опционально): Следуйте инструкциям настройки OAuth
3. Сохраните изменения

### 1.4 Настройка авторизованных доменов

1. В Authentication → Settings → Authorized domains
2. Добавьте домен разработки: `localhost`
3. Добавьте продакшн домен когда будете готовы к деплою

## Шаг 2: Настройка Next.js проекта

### 2.1 Создание Next.js проекта

```bash
npx create-next-app@latest my-auth-app --typescript --eslint --app
cd my-auth-app
```

### 2.2 Установка зависимостей

```bash
npm install firebase
npm install sass
npm install @types/node
```

### 2.3 Переменные окружения

Создайте `.env.local` в корне проекта:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Шаг 3: Конфигурация Firebase

Создайте `lib/firebase.ts`:

```typescript
import { initializeApp, getApps } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Инициализация Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Инициализация Firebase Authentication
export const auth = getAuth(app)

// Инициализация Cloud Firestore
export const db = getFirestore(app)

// Подключение к эмуляторам в разработке
if (process.env.NODE_ENV === 'development') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099')
    connectFirestoreEmulator(db, 'localhost', 8080)
  } catch (error) {
    console.log('Эмуляторы уже запущены')
  }
}

export default app
```

## Шаг 4: Контекст аутентификации

Создайте `contexts/AuthContext.tsx`:

```typescript
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  logout: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateUserProfile: (displayName: string, photoURL?: string) => Promise<void>
  sendVerificationEmail: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    setLoading(true)
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      if (displayName) {
        await updateProfile(user, { displayName })
      }
      await sendEmailVerification(user)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await signOut(auth)
    } finally {
      setLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }

  const updateUserProfile = async (displayName: string, photoURL?: string) => {
    if (user) {
      await updateProfile(user, { displayName, photoURL })
      setUser({ ...user, displayName, photoURL })
    }
  }

  const sendVerificationEmail = async () => {
    if (user) {
      await sendEmailVerification(user)
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    logout,
    signInWithGoogle,
    resetPassword,
    updateUserProfile,
    sendVerificationEmail,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
```

## Шаг 5: Настройка корневого макета

Обновите `app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Firebase Аутентификация',
  description: 'Аутентификация с Firebase и Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
```

## Шаг 6: Стили SCSS

Создайте `styles/globals.scss`:

```scss
// Глобальные переменные
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --background-primary: #ffffff;
  --background-secondary: #f9fafb;
  --border-color: #d1d5db;
  --border-radius: 0.5rem;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

// Сброс стилей
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-secondary);
}

// Общие классы
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.loading-spinner {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// Формы
.form-container {
  max-width: 28rem;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--background-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
    color: var(--text-primary);
  }
}

.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    &::placeholder {
      color: var(--text-secondary);
    }
  }
}

// Кнопки
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &-primary {
    background-color: var(--primary-color);
    color: white;

    &:hover:not(:disabled) {
      background-color: var(--primary-hover);
    }
  }

  &-secondary {
    background-color: white;
    color: var(--text-primary);
    border: 1px solid var(--border-color);

    &:hover:not(:disabled) {
      background-color: var(--background-secondary);
    }
  }

  &-danger {
    background-color: var(--error-color);
    color: white;

    &:hover:not(:disabled) {
      background-color: #dc2626;
    }
  }

  &-full {
    width: 100%;
  }
}

// Алерты
.alert {
  padding: 0.75rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  border: 1px solid;

  &-error {
    background-color: #fef2f2;
    border-color: #fecaca;
    color: #991b1b;
  }

  &-success {
    background-color: #f0fdf4;
    border-color: #bbf7d0;
    color: #166534;
  }

  &-warning {
    background-color: #fffbeb;
    border-color: #fed7aa;
    color: #92400e;
  }
}

// Утилиты
.text-center { text-align: center; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }

.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }

.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-4 > * + * { margin-top: 1rem; }

// Адаптивность
@media (max-width: 768px) {
  .form-container {
    margin: 1rem;
    padding: 1.5rem;
  }
}

// Темная тема (опционально)
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f9fafb;
    --text-secondary: #9ca3af;
    --background-primary: #1f2937;
    --background-secondary: #111827;
    --border-color: #374151;
  }
}
```

Обновите `app/globals.css` на `app/globals.scss` и импортируйте стили:

```scss
@import '../styles/globals.scss';
```

## Шаг 7: Компоненты аутентификации

### 7.1 Компонент входа

Создайте `components/auth/LoginForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn, signInWithGoogle, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await signIn(email, password)
      router.push('/dashboard')
    } catch (error: any) {
      setError('Ошибка входа. Проверьте данные и попробуйте снова.')
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.push('/dashboard')
    } catch (error: any) {
      setError('Ошибка входа через Google.')
    }
  }

  return (
    <div className="form-container">
      <h2>Вход в систему</h2>
      
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-full"
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="btn btn-secondary btn-full"
        >
          Войти через Google
        </button>
      </div>

      <div className="mt-6 text-center space-y-2">
        <Link href="/auth/signup" className="text-sm" style={{ color: 'var(--primary-color)' }}>
          Нет аккаунта? Зарегистрироваться
        </Link>
        <br />
        <Link href="/auth/reset-password" className="text-sm" style={{ color: 'var(--primary-color)' }}>
          Забыли пароль?
        </Link>
      </div>
    </div>
  )
}
```

### 7.2 Компонент регистрации

Создайте `components/auth/SignUpForm.tsx`:

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const { signUp, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов')
      return
    }

    try {
      await signUp(email, password, displayName)
      setMessage('Аккаунт создан! Проверьте email для подтверждения.')
      setTimeout(() => router.push('/auth/signin'), 3000)
    } catch (error: any) {
      setError('Ошибка регистрации. Попробуйте снова.')
    }
  }

  return (
    <div className="form-container">
      <h2>Регистрация</h2>
      
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="displayName">Имя пользователя</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль (мин. 6 символов)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-full"
        >
          {loading ? 'Регистрация...' : 'Создать аккаунт'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/auth/signin" className="text-sm" style={{ color: 'var(--primary-color)' }}>
          Уже есть аккаунт? Войти
        </Link>
      </div>
    </div>
  )
}
```

## Шаг 8: Защита маршрутов

Создайте `components/auth/ProtectedRoute.tsx`:

```typescript
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export default function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  redirectTo = '/auth/signin' 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        router.push(redirectTo)
      } else if (!requireAuth && user) {
        router.push('/dashboard')
      } else {
        setIsAuthorized(true)
      }
    }
  }, [user, loading, requireAuth, redirectTo, router])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
```

## Шаг 9: Страницы маршрутов

### 9.1 Страница входа

Создайте `app/auth/signin/page.tsx`:

```typescript
import LoginForm from '@/components/auth/LoginForm'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function SignInPage() {
  return (
    <ProtectedRoute requireAuth={false}>
      <div style={{ minHeight: '100vh', padding: '3rem 0' }}>
        <LoginForm />
      </div>
    </ProtectedRoute>
  )
}
```

### 9.2 Страница регистрации

Создайте `app/auth/signup/page.tsx`:

```typescript
import SignUpForm from '@/components/auth/SignUpForm'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function SignUpPage() {
  return (
    <ProtectedRoute requireAuth={false}>
      <div style={{ minHeight: '100vh', padding: '3rem 0' }}>
        <SignUpForm />
      </div>
    </ProtectedRoute>
  )
}
```

### 9.3 Страница панели управления

Создайте `app/dashboard/page.tsx`:

```typescript
'use client'

import { useAuth } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import styles from './Dashboard.module.scss'

export default function DashboardPage() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Ошибка выхода:', error)
    }
  }

  return (
    <ProtectedRoute>
      <div className={styles.dashboard}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Панель управления</h1>
            
            {user && (
              <div className={styles.userInfo}>
                <div className={styles.welcome}>
                  <h3>Добро пожаловать, {user.displayName || 'Пользователь'}!</h3>
                  <p>Email: {user.email}</p>
                  <p>
                    Email подтвержден: {user.emailVerified ? '✅ Да' : '❌ Нет'}
                  </p>
                </div>
                
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Профиль"
                    className={styles.avatar}
                  />
                )}

                <button
                  onClick={handleLogout}
                  className="btn btn-danger"
                >
                  Выйти
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
```

Создайте `app/dashboard/Dashboard.module.scss`:

```scss
.dashboard {
  min-height: 100vh;
  padding: 3rem 0;
  background-color: var(--background-secondary);
}

.container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.card {
  background: var(--background-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
}

.title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.userInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.welcome {
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }
}

.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  align-self: flex-start;
}

@media (max-width: 768px) {
  .card {
    margin: 1rem;
    padding: 1.5rem;
  }
}
```

## Шаг 10: Главная страница с редиректом

Обновите `app/page.tsx`:

```typescript
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/auth/signin')
      }
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return null
}
```

## Шаг 11: Дополнительные функции

### 11.1 Сброс пароля

Создайте `app/auth/reset-password/page.tsx`:

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      await resetPassword(email)
      setMessage('Email для сброса пароля отправлен! Проверьте почту.')
    } catch (error: any) {
      setError('Ошибка отправки email. Проверьте адрес.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', padding: '3rem 0' }}>
      <div className="form-container">
        <h2>Сброс пароля</h2>
        
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {message && (
          <div className="alert alert-success">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-full"
          >
            {loading ? 'Отправка...' : 'Сбросить пароль'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/signin" className="text-sm" style={{ color: 'var(--primary-color)' }}>
            Вернуться к входу
          </Link>
        </div>
      </div>
    </div>
  )
}
```

### 11.2 Компонент профиля пользователя

Создайте `components/UserProfile.tsx`:

```typescript
'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import styles from './UserProfile.module.scss'

export default function UserProfile() {
  const { user, updateUserProfile, sendVerificationEmail } = useAuth()
  const [displayName, setDisplayName] = useState(user?.displayName || '')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await updateUserProfile(displayName)
      setMessage('Профиль обновлен успешно!')
    } catch (error) {
      setMessage('Ошибка обновления профиля')
    } finally {
      setLoading(false)
    }
  }

  const handleSendVerification = async () => {
    try {
      await sendVerificationEmail()
      setMessage('Email для подтверждения отправлен!')
    } catch (error) {
      setMessage('Ошибка отправки email')
    }
  }

  if (!user) return null

  return (
    <div className={styles.profile}>
      <h3 className={styles.title}>Профиль пользователя</h3>
      
      {message && (
        <div className="alert alert-success">
          {message}
        </div>
      )}

      <div className={styles.info}>
        <div className={styles.avatarSection}>
          {user.photoURL ? (
            <img src={user.photoURL} alt="Аватар" className={styles.avatar} />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {user.displayName?.[0] || user.email?.[0] || '?'}
            </div>
          )}
        </div>

        <div className={styles.details}>
          <p><strong>Email:</strong> {user.email}</p>
          <p>
            <strong>Статус:</strong> 
            {user.emailVerified ? (
              <span className={styles.verified}> Подтвержден ✅</span>
            ) : (
              <span className={styles.unverified}>
                Не подтвержден ❌
                <button 
                  onClick={handleSendVerification}
                  className={styles.verifyBtn}
                >
                  Отправить подтверждение
                </button>
              </span>
            )}
          </p>
        </div>
      </div>

      <form onSubmit={handleUpdateProfile} className={styles.form}>
        <div className="form-group">
          <label htmlFor="displayName">Имя пользователя</label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? 'Обновление...' : 'Обновить профиль'}
        </button>
      </form>
    </div>
  )
}
```

Создайте `components/UserProfile.module.scss`:

```scss
.profile {
  background: var(--background-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.info {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.avatarSection {
  flex-shrink: 0;
}

.avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.avatarPlaceholder {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
}

.details {
  flex: 1;

  p {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);

    strong {
      color: var(--text-primary);
    }
  }
}

.verified {
  color: var(--success-color);
}

.unverified {
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.verifyBtn {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-hover);
  }
}

.form {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}
```

## Шаг 12: Middleware для защиты маршрутов

Обновите `middleware.ts`:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Защищенные маршруты
  const protectedPaths = ['/dashboard', '/profile']
  
  // Публичные маршруты (только для неавторизованных)
  const authPaths = ['/auth/signin', '/auth/signup', '/auth/reset-password']

  // Проверяем, является ли путь защищенным
  const isProtectedPath = protectedPaths.some(path => 
    pathname.startsWith(path)
  )

  // Проверяем, является ли путь страницей аутентификации
  const isAuthPath = authPaths.some(path => 
    pathname.startsWith(path)
  )

  // В продакшене можно добавить логику проверки JWT токена
  // из cookies для server-side рендеринга

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

## Шаг 13: Настройка TypeScript

Создайте `types/auth.ts`:

```typescript
export interface User {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
}

export interface AuthError {
  code: string
  message: string
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: AuthError | null
}
```

## Шаг 14: Утилиты и хелперы

Создайте `utils/auth.ts`:

```typescript
import { User } from 'firebase/auth'

export const getErrorMessage = (error: any): string => {
  switch (error.code) {
    case 'auth/user-not-found':
      return 'Пользователь не найден'
    case 'auth/wrong-password':
      return 'Неверный пароль'
    case 'auth/email-already-in-use':
      return 'Email уже используется'
    case 'auth/weak-password':
      return 'Слишком слабый пароль'
    case 'auth/invalid-email':
      return 'Неверный формат email'
    case 'auth/too-many-requests':
      return 'Слишком много попыток. Попробуйте позже'
    default:
      return 'Произошла ошибка. Попробуйте снова'
  }
}

export const formatUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  emailVerified: user.emailVerified,
})

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
  return password.length >= 6
}
```

## Шаг 15: Тестирование

Создайте `__tests__/auth.test.ts`:

```typescript
import { validateEmail, validatePassword, getErrorMessage } from '../utils/auth'

describe('Auth Utils', () => {
  describe('validateEmail', () => {
    test('должен валидировать корректный email', () => {
      expect(validateEmail('test@example.com')).toBe(true)
    })

    test('должен отклонять некорректный email', () => {
      expect(validateEmail('invalid-email')).toBe(false)
    })
  })

  describe('validatePassword', () => {
    test('должен принимать пароль длиной 6+ символов', () => {
      expect(validatePassword('123456')).toBe(true)
    })

    test('должен отклонять короткий пароль', () => {
      expect(validatePassword('12345')).toBe(false)
    })
  })

  describe('getErrorMessage', () => {
    test('должен возвращать локализованное сообщение', () => {
      const error = { code: 'auth/user-not-found' }
      expect(getErrorMessage(error)).toBe('Пользователь не найден')
    })
  })
})
```

## Шаг 16: Деплой

### 16.1 Vercel

```bash
npm install -g vercel
vercel
```

### 16.2 Netlify

```bash
npm run build
# Загрузите папку .next в Netlify
```

### 16.3 Docker

Создайте `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

## Распространенные проблемы и решения

1. **Ошибка конфигурации Firebase**
   - Проверьте правильность всех переменных окружения
   - Убедитесь, что домены добавлены в авторизованные

2. **Ошибки аутентификации**
   - Проверьте настройки методов входа в Firebase Console
   - Убедитесь, что пароль соответствует требованиям (мин. 6 символов)

3. **Проблемы с маршрутизацией**
   - Проверьте правильность путей в компонентах
   - Убедитесь, что middleware настроен корректно

4. **Стили не применяются**
   - Проверьте импорт SCSS файлов
   - Убедитесь, что sass установлен

## Лучшие практики

1. **Безопасность**
   - Используйте переменные окружения для конфигурации
   - Никогда не храните секретные данные в клиентском коде
   - Проверяйте права доступа на сервере

2. **UX/UI**
   - Показывайте состояния загрузки
   - Предоставляйте понятные сообщения об ошибках
   - Используйте валидацию форм

3. **Производительность**
   - Используйте lazy loading для компонентов
   - Оптимизируйте изображения
   - Минифицируйте CSS и JS

4. **Доступность**
   - Используйте семантичные HTML теги
   - Обеспечьте хороший контраст
   - Добавьте поддержку клавиатурной навигации

## Дополнительные ресурсы

- [Документация Firebase Authentication](https://firebase.google.com/docs/auth)
- [Документация Next.js](https://nextjs.org/docs)
- [Документация SCSS](https://sass-lang.com/documentation)
- [TypeScript для начинающих](https://www.typescriptlang.org/docs/)

## Заключение

Это руководство предоставляет полную настройку Firebase Authentication с Next.js, используя SCSS для стилизации и русскую локализацию. Следуя этим шагам, вы создадите современное, безопасное и пользовательски-дружелюбное приложение с аутентификацией.