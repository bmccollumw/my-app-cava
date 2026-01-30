import Footer from '@/components/Footer'
import './globals.css'
import Nav from '@/components/Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
</body>

    </html>
  )
}

