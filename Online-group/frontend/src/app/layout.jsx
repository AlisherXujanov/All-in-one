"use client"
import "./assets/styles/globals.scss"
import GlobalNav from "./components/Nav"
import { ToastContainer } from 'react-toastify'
import { useAuth } from "@/app/hooks/useAuth"
import Spinner from "@/app/components/Spinner"

export default function RootLayout({ children }) {
  const { user, loading } = useAuth()

  return (
    <html lang="en">
      <body>
        <div className="main-layout-wrapper">
          <GlobalNav user={user} />
          <ToastContainer />
          {
            loading && <Spinner />
          }
          {children}
        </div>
      </body>
    </html>
  )
}
