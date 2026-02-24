import PageFadeIn from '@/components/PageFadeIn'

export default function PartnershipOverviewPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-backdrop.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      {/* Content */}
      <section className="relative pt-40 pb-32">
        <div className="ml-6 md:ml-12 lg:ml-16">

          {/* HERO fades first */}
          <PageFadeIn delay={0}>
            <p className="max-w-4xl text-3xl md:text-5xl font-light leading-tight text-white/95">
             Cavazos is a certified strategic partner specializing in joint venture and subcontracting 
             roles on complex public-sector and private sector contracts. Founded in 2002, 
             the firm has built a reputation for disciplined execution, compliance, 
             and seamless collaboration with prime contractors and government agencies.
            </p>
          </PageFadeIn>

          {/* BODY fades slightly after */}
          <PageFadeIn delay={250}>
            <div className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">

              <p>
                As an ACDBE, MBE, W/DBE, and HUB-certified business, Cavazos strengthens proposals and delivers 
                results across aviation, municipal, and county initiatives. We serve as the Joint Venture Partner 
                for the advertising concession at Houston’s Bush and Hobby Airports and support regional and 
                municipal programs through staffing, program management, and strategic communications. 
                Cavazos is built to mobilize quickly, integrate smoothly, and execute reliably. 
                We help primes meet participation goals, enhance community engagement, and 
                deliver measurable outcomes from award through completion.
              </p>

            </div>
          </PageFadeIn>

        </div>
      </section>
    </main>
  )
}