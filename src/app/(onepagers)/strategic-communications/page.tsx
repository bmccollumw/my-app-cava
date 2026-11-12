import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import EdgeFade from '@/components/EdgeFade'
import type { FC } from 'react'

// Brand colors (written out in classes below so Tailwind can see them)
// Teal:  #456672 — flat background panel (top of page)
// Sage:  #D7E1D9 — 22+, labels, accents, button
// Slate: #2C3A40 — "who we serve" band, text on sage

// Page margins — match the top bar exactly
// Left  = TopBarLeft  (px-4 sm:px-6)
// Right = TopBarRight (p-6 sm:p-8)
const GUTTER_L = 'ml-4 sm:ml-6'
const GUTTER_R = 'mr-6 sm:mr-8'

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

// Hover: outer wrapper stays still, inner box lifts 2px + shadow fades in
const BOX_WRAP = 'group/box'
const BOX_HOVER = [
  'relative',
  `transition-transform duration-700 ${EASE}`,
  'motion-safe:group-hover/box:-translate-y-0.5',
  "after:content-[''] after:pointer-events-none after:absolute after:inset-0",
  'after:shadow-[0_18px_50px_rgba(0,0,0,0.35)] after:opacity-0',
  `after:transition-opacity after:duration-700 after:${EASE}`,
  'group-hover/box:after:opacity-100',
].join(' ')

const LABEL =
  'text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#D7E1D9]'

// Services — wording taken from the page copy
const SERVICES = [
  'Corporate positioning',
  'Brand development',
  'Media relations',
  'Crisis & issues management',
  'Stakeholder communications',
  'Integrated marketing strategy',
]

// Sectors — wording taken from the page copy
const SECTORS = [
  'Municipal agencies',
  'Regional planning efforts',
  'Airport concessions',
  'Infrastructure programs',
  'Fortune 500 companies',
]

const CLIENT_LOGOS = [
  { src: '/client-1.gif', alt: 'Tetra' },
  { src: '/client-2.gif', alt: 'H-GAC' },
  { src: '/client-1.png', alt: 'University of Houston' },
  { src: '/client-2.png', alt: 'Chase' },
  { src: '/client-3.png', alt: 'City of Houston' },
  { src: '/client-4.png', alt: 'Galveston Island Park Board' },
  { src: '/client-5.png', alt: 'Gulf Coast Regional Blood Center' },
  { src: '/client-6.png', alt: 'Houston Airport System' },
  { src: '/client-7.png', alt: 'Harris County' },
  { src: '/client-8.png', alt: 'JCDecaux' },
  { src: '/client-9.png', alt: 'Skanska' },
  { src: '/client-10.png', alt: 'American Red Cross' },
]

// Doubled so the strip can loop seamlessly
const LOGOS_DOUBLED = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

const StrategicCommunicationsPage: FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <EdgeFade />

      {/* Flat teal panel (top of page) — same idea as the partnerships page */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[900px] md:h-[1200px] bg-[#456672]"
      />

      {/* Black diagonal that covers the left part of the teal */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[900px] md:h-[1200px] bg-black"
        style={{ clipPath: 'polygon(0 0, 46% 0, 22% 100%, 0 100%)' }}
      />

      {/* Fade the teal into black at the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[600px] md:top-[900px] h-[300px] bg-gradient-to-b from-transparent to-black"
      />

      {/* HERO — big 22+ and statement */}
      <div className="relative flex min-h-[640px] flex-col md:min-h-[860px]">

        <PageFadeIn
          delay={0}
          className={`relative mt-auto ${GUTTER_L} ${GUTTER_R} pt-36 pb-16 md:pb-24`}
        >
          <div className="flex flex-wrap items-end gap-x-[72px] gap-y-8">
            <p aria-hidden="true" className="flex shrink-0 flex-col">
              <span className="text-[120px] md:text-[240px] font-extrabold leading-[0.82] tracking-[-0.06em] text-[#D7E1D9]">
                22+
              </span>
              <span className={`mt-4 ${LABEL}`}>Years of strategic counsel</span>
            </p>
            <h1 className="min-w-0 flex-[1_1_520px] text-3xl md:text-[38px] font-light leading-[1.22] tracking-[-0.01em]">
              For more than 22 years, Cavazos has delivered strategic public
              relations, marketing, and public affairs counsel that helps
              organizations build meaningful relationships and measurable
              impact.
            </h1>
          </div>
        </PageFadeIn>
      </div>

      {/* PRACTICE — paragraph left, six big service rows right */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-8 md:mt-12`}>
        <section className="flex flex-wrap items-start gap-x-20 gap-y-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <p className={`mb-3.5 ${LABEL}`}>Our practice</p>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/90">
              Our communications practice spans corporate positioning, brand
              development, media relations, crisis and issues management,
              stakeholder communications, and integrated marketing strategy. We
              help clients clarify their narrative, strengthen their reputation,
              and align messaging across channels to support business and
              organizational objectives. From large-scale public initiatives to
              corporate campaigns, our team develops cohesive programs that
              connect strategy, communications, and execution.
            </p>
          </div>

          {/* Services — a calm, numbered list (informational, not buttons) */}
          <ol
            aria-label="Services"
            className="grid min-w-0 flex-[1_1_560px] grid-cols-1 border-t border-white/25 sm:grid-cols-2"
          >
            {SERVICES.map((name, i) => (
              <li
                key={name}
                className="border-b border-white/25 py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8 md:py-8"
              >
                <span className="mb-3 block text-sm font-semibold text-[#D7E1D9]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="block text-2xl md:text-[30px] font-light leading-[1.15]">
                  {name}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </RevealSection>

      {/* WHO WE'VE SUPPORTED — slate band with five sectors */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-24 md:mt-28`}>
        <section className={`${BOX_HOVER} bg-[#2C3A40] px-6 py-12 md:p-14`}>
          <p className={`mb-8 ${LABEL}`}>Who we&apos;ve supported</p>
          <ol aria-label="Sectors" className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5">
            {SECTORS.map((name, i) => (
              <li key={name} className="border-t-2 border-[#D7E1D9] pt-4">
                <span className="mb-2.5 block text-sm font-semibold text-[#D7E1D9]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xl md:text-2xl leading-tight">{name}</span>
              </li>
            ))}
          </ol>
          <p className="max-w-[980px] text-lg md:text-[19px] leading-relaxed text-white/90">
            Cavazos has supported municipal agencies, regional planning efforts,
            airport concessions, infrastructure programs, and Fortune 500
            companies with strategic communications and public engagement
            initiatives. Our approach blends data-informed strategy with
            real-world implementation experience, ensuring that communications
            efforts drive measurable outcomes. Whether advising leadership,
            launching new initiatives, or managing complex issues, Cavazos
            delivers clarity, consistency, and results.
          </p>
        </section>
      </RevealSection>

      {/* TRUSTED BY — slowly scrolling strip of white logo tiles (pauses on hover) */}
      <RevealSection className="mt-24 md:mt-28">
        <section>
          <h2 className={`${GUTTER_L} ${GUTTER_R} mb-6 text-4xl md:text-[44px] font-light leading-[1.08]`}>
            Trusted by
          </h2>
          <div className="relative overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-40 bg-gradient-to-r from-black to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-40 bg-gradient-to-l from-black to-transparent" />

            <ul className="flex animate-carousel">
              {LOGOS_DOUBLED.map((logo, i) => (
                <li
                  key={`${logo.src}-${i}`}
                  aria-hidden={i >= CLIENT_LOGOS.length}
                  className="group flex h-[110px] w-[160px] shrink-0 items-center justify-center border-r border-neutral-200 bg-white p-5 md:h-[150px] md:w-[220px] md:p-7"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={i < CLIENT_LOGOS.length ? logo.alt : ''}
                    className={`max-h-full max-w-full object-contain transition-transform duration-700 ${EASE} motion-safe:group-hover:scale-105`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-24 mb-32 md:mt-28 md:mb-36`}>
        <section
          className={`${BOX_HOVER} flex flex-wrap items-center justify-between gap-8 border border-[#D7E1D9]/60 px-6 py-12 md:p-14`}
        >
          <h2 className="min-w-0 flex-[1_1_480px] text-4xl md:text-[44px] font-light leading-[1.08]">
            Need a clearer story?{' '}
            <span className="text-[#D7E1D9]">Let&apos;s talk.</span>
          </h2>
          <Link
            href="/contact?topic=strategic-communications"
            className="relative z-10 shrink-0 bg-[#D7E1D9] px-[34px] py-[18px] text-[17px] font-semibold text-[#2C3A40] transition-colors duration-300 hover:bg-white"
          >
            Contact us →
          </Link>
        </section>
      </RevealSection>
    </main>
  )
}

export default StrategicCommunicationsPage