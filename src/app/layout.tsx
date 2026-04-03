import './globals.css'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Cavazos',
  description: 'Cavazos Communications & Collective — Strategic communications, diversity outreach, and public affairs.',
  verification: {
    google: 'FGyMR7OD49PqMk_aabGIDGwcDEGoj1gju7wlUhozYWQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Cavazos',
              url: 'https://www.thinkcava.com',
            }),
          }}
        />
      </head>
      <body className="bg-black">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
