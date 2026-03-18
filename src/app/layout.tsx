import './globals.css'
import PageTransition from '@/components/PageTransition'



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}