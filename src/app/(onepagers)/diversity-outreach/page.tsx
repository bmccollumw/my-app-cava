import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import EdgeFade from '@/components/EdgeFade'

// Brand colors (written out in classes below so Tailwind can see them)
// Cream: #F1CF9D — flat background panel, labels, accents, button
// Slate: #2C3A40 — text on cream, programs box text

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
  'text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#F1CF9D]'

// Wording taken from the page copy
const COMMUNITIES = [
  'Hispanic/Latinx',
  'African American',
  'Asian',
  'Other diverse communities',
]

const PILLARS = [
  'Trusted relationships',
  'In-language messaging',
  'Consistent presence',
]

const PROGRAMS = [
  'Disparity studies',
  'Census outreach',
  'Economic development',
  'Infrastructure planning',
  'Disaster recovery',
]

const num = (i: number) => String(i + 1).padStart(2, '0')

export default function DiversityOutreachPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <EdgeFade />

      {/* Flat cream panel — starts below the top bar so the white menu text stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[96px] h-[760px] md:top-[120px] md:h-[820px] bg-[#F1CF9D]"
      />

      {/* Black diagonal over the left part of the cream (desktop only) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[120px] hidden h-[820px] bg-black md:block"
        style={{ clipPath: 'polygon(0 0, 34% 0, 14% 100%, 0 100%)' }}
      />

      {/* HERO — headline in slate on cream */}
      <PageFadeIn delay={0}>
        <section className="relative flex min-h-[856px] flex-col justify-center pt-[96px] md:min-h-[940px] md:pt-[120px]">
          <div className={`${GUTTER_L} ${GUTTER_R} py-12 md:ml-[34%]`}>
            <p className="mb-6 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2C3A40]">
              Diversity outreach
            </p>
            <h1 className="max-w-[900px] text-3xl md:text-[46px] font-light leading-[1.16] tracking-[-0.015em] text-[#2C3A40]">
              Cavazos specializes in building{' '}
              <span className="font-semibold">authentic connections</span>{' '}
              between organizations and the communities they serve—through
              localized, grassroots engagement and culturally informed
              communications that ensure programs reach the audiences they are
              intended to serve.
            </h1>
          </div>
        </section>
      </PageFadeIn>

      {/* PRACTICE — paragraph left, communities right */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-20 md:mt-24`}>
        <section className="flex flex-wrap items-start gap-x-20 gap-y-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <p className={`mb-3.5 ${LABEL}`}>Our practice</p>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/90">
              Our diversity outreach practice is rooted in localization,
              grassroots engagement, and culturally informed communications that
              ensure programs reach the audiences they are intended to serve. We
              work closely with public agencies, infrastructure initiatives, and
              corporate partners to design outreach strategies that are
              inclusive, accessible, and results-driven.
            </p>
          </div>

          <div className="min-w-0 flex-[1_1_560px]">
            <p className={`mb-3.5 ${LABEL}`}>Communities we engage</p>
            <ul aria-label="Communities we engage" className="border-t border-white/25">
              {COMMUNITIES.map((name) => (
                <li
                  key={name}
                  className="border-b border-white/25 py-5 text-3xl md:py-6 md:text-[44px] font-light leading-tight tracking-[-0.015em]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealSection>

      {/* STATEMENT — "not simply translation" + three pillars */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-28 md:mt-36`}>
        <section>
          <p
            aria-hidden="true"
            className="max-w-[1100px] text-4xl md:text-[72px] font-extrabold leading-[1.02] tracking-[-0.035em]"
          >
            Effective outreach is{' '}
            <span className="text-[#F1CF9D]">not simply translation.</span>
          </p>

          <ol aria-label="What effective outreach requires" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
            {PILLARS.map((name, i) => (
              <li key={name} className="border-t-2 border-[#F1CF9D] pt-5">
                <span className="mb-3 block text-sm font-semibold text-[#F1CF9D]">{num(i)}</span>
                <span className="block text-2xl md:text-[30px] font-light leading-[1.15]">{name}</span>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-[900px] text-lg md:text-[19px] leading-relaxed text-white/90">
            Our team understands that effective outreach is not simply
            translation. It requires trusted relationships, in-language
            messaging, and consistent presence within communities. We leverage
            established networks, community leaders, media channels, and
            stakeholder partnerships to ensure information is delivered clearly
            and credibly.
          </p>
        </section>
      </RevealSection>

      {/* PROGRAMS — white box */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-28 md:mt-36`}>
        <section className={`${BOX_HOVER} bg-white px-6 py-12 text-neutral-900 md:p-14`}>
          <p className="mb-8 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2C3A40]">
            Programs we&apos;ve supported
          </p>
          <ol aria-label="Programs" className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5">
            {PROGRAMS.map((name, i) => (
              <li key={name} className="border-t-2 border-[#2C3A40] pt-4">
                <span className="mb-2.5 block text-sm font-semibold text-[#2C3A40]">{num(i)}</span>
                <span className="text-xl md:text-2xl leading-tight">{name}</span>
              </li>
            ))}
          </ol>
          <p className="max-w-[980px] text-lg md:text-[19px] leading-relaxed text-neutral-700">
            Cavazos has supported disparity studies, census outreach efforts,
            economic development initiatives, infrastructure planning, and
            disaster recovery programs that require thoughtful engagement across
            Hispanic/Latinx, African American, Asian, and other diverse
            communities.
          </p>
        </section>
      </RevealSection>

      {/* ON THE GROUND — quiet */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-28`}>
        <section className="border-t border-white/25 pt-12">
          <p className={`mb-3.5 ${LABEL}`}>Strategy and execution</p>
          <p className="max-w-[900px] text-lg md:text-[19px] leading-relaxed text-white/90">
            From public affairs and community meetings to media engagement and
            stakeholder communications, Cavazos designs outreach programs that
            align with contract compliance requirements while strengthening
            long-term community trust. Our approach balances strategy with
            on-the-ground execution, helping organizations meet participation
            goals, expand engagement, and create measurable impact across
            diverse populations.
          </p>
        </section>
      </RevealSection>

      {/* CTA — cream band */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-24 mb-32 md:mt-28 md:mb-36`}>
        <section
          className={`${BOX_HOVER} flex flex-wrap items-center justify-between gap-8 bg-[#F1CF9D] px-6 py-12 text-[#2C3A40] md:p-14`}
        >
          <h2 className="min-w-0 flex-[1_1_480px] text-4xl md:text-[44px] font-light leading-[1.08]">
            Need to reach every community?{' '}
            <strong className="font-bold">Let&apos;s talk.</strong>
          </h2>
          <Link
            href="/contact"
            className="relative z-10 shrink-0 bg-[#2C3A40] px-[34px] py-[18px] text-[17px] font-medium text-white transition-colors duration-300 hover:bg-black"
          >
            Contact us →
          </Link>
        </section>
      </RevealSection>
    </main>
  )
}