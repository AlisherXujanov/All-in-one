import Nav from "@/components/Header/Nav"
import Ad from "@/components/Header/Ad"
import "./globals.css"

export const metadata = {
  title: "Madina: Brue Linuer",
  description: "Generated Madina team",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Ad />
          <Nav />
        </header>

        {children}
      </body>
    </html>
  )
}
