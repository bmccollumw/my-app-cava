import PageFadeIn from '@/components/PageFadeIn'
import AirportLogoGrid from '@/components/AirportLogoGrid'

const BG_IMAGE = '/airport.jpg'

export default function AirportAdvertisingOverviewPage() {
  return (
    <main
      className="relative min-h-screen w-full text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <PageFadeIn delay={0}>
        <section className="relative pt-40 pb-32">
          <div className="ml-6 md:ml-12 lg:ml-16">

            <p className="max-w-4xl text-3xl md:text-5xl font-light leading-tight text-white/95">
              Cavazos is proud to serve as the certified joint-venture partner
              with JCDecaux for the exclusive management of airport advertising
              at George Bush Intercontinental Airport (IAH) and William P.
              Hobby Airport (HOU).
            </p>

            <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
              <p>
                Together, we oversee one of the most dynamic airport media
                programs in the country, delivering premium digital, static,
                exterior, and private aviation advertising platforms across
                both airports. Our role ensures local market expertise,
                regulatory compliance, and strategic partnership execution,
                while JCDecaux brings global innovation and world-class media
                infrastructure. The result is a seamless, high-impact
                advertising ecosystem across Houston's gateway airports.
              </p>

              <p>
                Houston's airports offer unmatched access to influential
                travelers. IAH welcomed more than 45 million passengers in
                2023, ranking among the busiest airports in the United States,
                while HOU served over 14 million passengers. As the energy
                capital of the world and home to numerous Fortune 500
                companies, Houston attracts elite business travelers,
                decision-makers, and international audiences.
              </p>

              <p>
                With five terminals at IAH, expansive digital networks,
                100% share-of-voice domination opportunities, private aviation
                media, and high-dwell gate environments, brands can achieve
                full market domination or target specific traveler segments
                with precision. Few environments deliver this level of scale,
                prestige, and captive attention.
              </p>

              <p>
                If you are interested in learning how airport advertising at
                IAH and HOU can elevate your brand presence, we invite you to
                connect with our team. Whether you are seeking full airport
                domination, premium digital placements, or strategic private
                aviation media, Cavazos and JCDecaux are ready to build a
                program tailored to your objectives. Contact us to begin the
                conversation.
              </p>
            </PageFadeIn>

          </div>

          <PageFadeIn delay={500} className="mt-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35 mb-6 ml-6 md:ml-12 lg:ml-16">
              Advertising Partners
            </p>
            <AirportLogoGrid />
          </PageFadeIn>

        </section>
      </PageFadeIn>

    </main>
  )
}