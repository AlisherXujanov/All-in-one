import '@/styles/globals.scss'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Next.js Firebase App',
  description: 'Created with Next.js, SCSS, and Firebase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container" style={{ marginTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  )
} 