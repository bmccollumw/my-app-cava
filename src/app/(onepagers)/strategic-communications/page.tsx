import PageFadeIn from '@/components/PageFadeIn'
import ClientLogoGrid from '@/components/ClientLogoGrid'

const LOGOS = [
  {
    src: '/public/client-1.png',
    alt: 'Client 1',
    name: 'client 1',
    description: 'short description here',
  },
  // ...up to 12
]

export default function MarketingCommunicationsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/airport.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <section className="relative pt-40 pb-32">
        <div className="ml-6 md:ml-12 lg:ml-16 mr-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-start">
            {/* LEFT COLUMN ...unchanged */}
            <div className="text-left">
              {/* your hero/body */}
            </div>

            {/* RIGHT COLUMN */}
            <div className="mt-16 lg:mt-0 text-left">
              <PageFadeIn delay={350}>
                <h2 className="mb-10 text-white/90 text-xl md:text-2xl font-semibold lowercase">
                  past clients
                </h2>
              </PageFadeIn>

              <PageFadeIn delay={450}>
                <ClientLogoGrid logos={LOGOS} />
              </PageFadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}