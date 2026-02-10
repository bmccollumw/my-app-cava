import './globals.css'
import PageFadeIn from '@/components/PageFadeIn'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <PageFadeIn>
          {children}
        </PageFadeIn>
      </body>
    </html>
  )
}
