import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Madina: Brue Linuer",
  description: "Generated Madina team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container'>
        <header>
          <Nav />
        </header>

        {children}
      </body>
    </html>
  );
}
