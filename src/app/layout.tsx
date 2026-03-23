import './globals.css'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Cavazos',
  description: 'Cavazos Communications & Collective — Strategic communications, diversity outreach, and public affairs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}