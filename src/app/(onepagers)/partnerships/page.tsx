import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import type { FC } from 'react'

const BG_IMAGE = '/partnership-background.jpg'

const PartnershipOverviewPage: FC = () => {
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
              Cavazos is a premier certified partner for complex public and private
              sector contracts across Texas and New York, delivering compliant,
              scalable, and high-impact solutions.
            </p>

            <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
              <p>
                We actively pursue joint ventures, subcontracting opportunities,
                and strategic partnerships that strengthen RFP responses,
                meet participation goals, and deliver measurable results
                from award through execution.
              </p>

              <p>
                Cavazos is a certified ACDBE, MBE, W/DBE, and HUB of the State
                of Texas, with longstanding certifications through the City of
                Houston and recognized DBE participation with Harris County,
                METRO, and the Port of Houston. These certifications reflect
                more than eligibility — they represent over two decades of
                proven execution in government communications, airport
                concessions, disaster recovery support, staffing for contract
                compliance, and public-sector program delivery.
              </p>

              <p>
                As a trusted small business partner, Cavazos brings hands-on
                leadership, rapid staff mobilization, and deep experience
                working alongside prime contractors on complex municipal,
                county, and airport contracts.
              </p>

              <p>
                If you are preparing an RFP response and seeking a certified,
                experienced partner with strengths in public affairs,
                community engagement, talent acquisition, contract compliance,
                or regulated advertising environments, we welcome the
                opportunity to collaborate. Contact us{' '}
                <Link
                  href="/contact"
                  className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors duration-200"
                >
                  here
                </Link>
                .
              </p>
            </PageFadeIn>

          </div>
        </section>
      </PageFadeIn>

    </main>
  )
}

export default PartnershipOverviewPage