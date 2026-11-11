import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import type { FC } from 'react'

// Brand colors
// Background panel: #702B36 (maroon)
// Accent:           #984E4A (labels, buttons, 20+, CTA band)
// Accent hover:     #702B36

const CERTS = ['ACDBE', 'MBE', 'W/DBE', 'HUB']

// Page margins — match the top bar exactly
// Left  = TopBarLeft  (px-4 sm:px-6)
// Right = TopBarRight (p-6 sm:p-8)
const GUTTER_L = 'ml-4 sm:ml-6'
const GUTTER_R = 'mr-6 sm:mr-8'

// Smooth, gentle easing used by every hover effect
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

// Put on the OUTER wrapper — it never moves, so hover can't flicker
const BOX_WRAP = 'group/box'

// Put on the box itself: tiny lift + a shadow layer that fades in
const BOX_HOVER = [
  'relative',
  `transition-transform duration-700 ${EASE}`,
  'motion-safe:group-hover/box:-translate-y-0.5',
  "after:content-[''] after:pointer-events-none after:absolute after:inset-0",
  'after:shadow-[0_18px_50px_rgba(0,0,0,0.35)] after:opacity-0',
  `after:transition-opacity after:duration-700 after:${EASE}`,
  'group-hover/box:after:opacity-100',
].join(' ')

// Thin line that draws across the bottom on hover
const HoverLine = ({ color = 'bg-[#984E4A]' }: { color?: string }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 ${color} transition-transform duration-1000 ${EASE} group-hover/box:scale-x-100`}
  />
)

const PartnershipOverviewPage: FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Flat maroon panel (top of page only) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1100px] md:h-[1600px] bg-[#702B36]"
      />

      {/* Black diagonal that covers the left part of the maroon */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1100px] md:h-[1600px] bg-black"
        style={{ clipPath: 'polygon(0 0, 58% 0, 30% 100%, 0 100%)' }}
      />

      {/* Fade the maroon into black at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[800px] md:top-[1300px] h-[300px] bg-gradient-to-b from-transparent to-black"
      />

      <div className="relative flex flex-col pt-32 md:pt-40 pb-32">
        {/* 1 — Who we are + certifications (loudest) — aligned to LEFT gutter */}
        <PageFadeIn
          delay={0}
          className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} md:mr-0 self-stretch md:self-start md:w-[min(1100px,88%)]`}
        >
          <section className={`${BOX_HOVER} bg-white text-neutral-900 px-6 py-12 md:px-14 md:py-16`}>
            <p className="mb-5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#984E4A]">
              Partnerships · Texas &amp; New York
            </p>

            <h1 className="mb-10 max-w-[900px] text-3xl md:text-[40px] font-light leading-[1.18] tracking-tight">
              Cavazos is a premier certified partner for complex public and
              private sector contracts across Texas and New York, delivering
              compliant, scalable, and high-impact solutions.
            </h1>

            <p
              aria-hidden="true"
              className="mb-6 flex flex-wrap gap-x-3 md:gap-x-[18px] text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em]"
            >
              {CERTS.map((cert, i) => (
                <span key={cert} className="flex gap-x-3 md:gap-x-[18px]">
                  {i > 0 && <span className="font-light text-[#984E4A]">/</span>}
                  <span>{cert}</span>
                </span>
              ))}
            </p>

            <p className="mb-10 max-w-[820px] text-lg md:text-[19px] leading-relaxed text-neutral-700">
              Cavazos is a certified ACDBE, MBE, W/DBE, and HUB of the State of
              Texas, with longstanding certifications through the City of
              Houston and recognized DBE participation with Harris County,
              METRO, and the Port of Houston.
            </p>

            <Link
              href="/contact"
              className="relative z-10 inline-block bg-[#984E4A] px-8 py-[18px] text-[17px] font-medium text-white transition-colors duration-300 hover:bg-[#702B36]"
            >
              Partner on your next RFP →
            </Link>

            <HoverLine />
          </section>
        </PageFadeIn>

        {/* 2 — Proof — aligned to RIGHT gutter */}
        <RevealSection
          className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} md:ml-0 self-stretch md:self-end md:w-[min(1000px,82%)] mt-12 md:mt-16`}
        >
          <section className={`${BOX_HOVER} bg-white text-neutral-900 px-6 py-12 md:px-14 md:py-14`}>
            <div className="flex flex-wrap items-center gap-x-14 gap-y-6">
              <p aria-hidden="true" className="flex flex-wrap items-baseline gap-[18px]">
                <span
                  className={`inline-block origin-bottom-left text-8xl md:text-[128px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#984E4A] transition-transform duration-1000 ${EASE} motion-safe:group-hover/box:scale-[1.02]`}
                >
                  20+
                </span>
                <span className="text-2xl md:text-[26px] font-light leading-tight">
                  years of proven
                  <br />
                  execution
                </span>
              </p>

              <p className="min-w-0 flex-[1_1_360px] text-lg md:text-[19px] leading-relaxed text-neutral-700">
                These certifications reflect more than eligibility — they
                represent over two decades of proven execution in government
                communications, airport concessions, disaster recovery support,
                staffing for contract compliance, and public-sector program
                delivery.
              </p>
            </div>

            <HoverLine />
          </section>
        </RevealSection>

        {/* 3 — Supporting detail (quiet) — spans gutter to gutter */}
        <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-32`}>
          <section className="flex flex-wrap gap-12 border-t border-white/25 pt-12">
            <div className={`${BOX_WRAP} min-w-0 flex-[1_1_380px]`}>
              <p className={`relative mb-3.5 inline-block pb-1.5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors duration-700 ${EASE} group-hover/box:text-white`}>
                What we pursue
                <HoverLine />
              </p>
              <p className={`text-lg md:text-[19px] leading-relaxed text-white/85 transition-colors duration-700 ${EASE} group-hover/box:text-white`}>
                We actively pursue joint ventures, subcontracting opportunities,
                and strategic partnerships that strengthen RFP responses, meet
                participation goals, and deliver measurable results from award
                through execution.
              </p>
            </div>

            <div className={`${BOX_WRAP} min-w-0 flex-[1_1_380px]`}>
              <p className={`relative mb-3.5 inline-block pb-1.5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors duration-700 ${EASE} group-hover/box:text-white`}>
                How we work
                <HoverLine />
              </p>
              <p className={`text-lg md:text-[19px] leading-relaxed text-white/85 transition-colors duration-700 ${EASE} group-hover/box:text-white`}>
                As a trusted small business partner, Cavazos brings hands-on
                leadership, rapid staff mobilization, and deep experience
                working alongside prime contractors on complex municipal,
                county, and airport contracts.
              </p>
            </div>
          </section>
        </RevealSection>

        {/* 4 — Call to action — spans gutter to gutter */}
        <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-20 md:mt-24`}>
          <section className={`${BOX_HOVER} flex flex-wrap items-center justify-between gap-8 bg-[#984E4A] px-6 py-12 md:p-14`}>
            <div className="min-w-0 flex-[1_1_560px]">
              <h2 className="mb-4 text-4xl md:text-[44px] font-light leading-[1.08]">
                Preparing an RFP?
              </h2>
              <p className="text-lg md:text-[19px] leading-relaxed text-white/95">
                If you are preparing an RFP response and seeking a certified,
                experienced partner with strengths in public affairs, community
                engagement, talent acquisition, contract compliance, or
                regulated advertising environments, we welcome the opportunity
                to collaborate. Contact us{' '}
                <Link
                  href="/contact"
                  className="relative z-10 underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors duration-300"
                >
                  here
                </Link>
                .
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 shrink-0 bg-white px-[34px] py-[18px] text-[17px] font-medium text-neutral-900 transition-colors duration-300 hover:bg-neutral-200"
            >
              Contact us →
            </Link>

            <HoverLine color="bg-white" />
          </section>
        </RevealSection>
      </div>
    </main>
  )
}

export default PartnershipOverviewPage