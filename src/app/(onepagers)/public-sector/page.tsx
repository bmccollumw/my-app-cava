import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import EdgeFade from '@/components/EdgeFade'

const BG_IMAGE = '/public-backdrop.jpg'

// Brand colors (written out in classes below so Tailwind can see them)
// Slate: #2C3A40 — cards, bands, numbers
// Cream: #F1CF9D — labels, accents, buttons

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

// The three services — wording taken from the page copy
const SERVICES = [
  { n: '01', title: 'Scalable staffing solutions' },
  { n: '02', title: 'Data-driven program support' },
  { n: '03', title: 'Strategic communications' },
]

const PROGRAMS = [
  'COVID response',
  'Hurricane & storm recovery',
  'Disparity Studies',
  'Public engagement campaigns',
  'Economic development outreach',
  'Infrastructure communications',
]

export default function StaffingOverviewPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <EdgeFade />

      {/* HERO — statement on black */}
      <PageFadeIn delay={0}>
        <section className={`${GUTTER_L} ${GUTTER_R} pt-36 pb-12 md:pt-44 md:pb-16`}>
          <p className={`mb-5 ${LABEL}`}>Public sector</p>
          <h1 className="max-w-[1180px] text-3xl md:text-[52px] font-light leading-[1.14] tracking-[-0.02em]">
            Cavazos supports public-sector programs that require disciplined
            execution, regulatory compliance, and strong coordination between
            government agencies, contractors, and the communities they serve.
          </h1>
        </section>
      </PageFadeIn>

      {/* SKYLINE BAND + three service cards overlapping it */}
      <div className={`${GUTTER_L} ${GUTTER_R}`}>
        <PageFadeIn delay={300}>
          <div
            aria-hidden="true"
            className="h-[280px] md:h-[520px] bg-cover bg-[center_45%]"
            style={{ backgroundImage: `url('${BG_IMAGE}')` }}
          />
        </PageFadeIn>

        <RevealSection className="relative -mt-16 md:-mt-[180px] px-4 md:px-10">
          <ul className="grid gap-4 md:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.n} className={BOX_WRAP}>
                <div
                  className={`${BOX_HOVER} flex min-h-[240px] md:min-h-[300px] flex-col justify-between bg-white p-8 text-neutral-900 md:px-9 md:py-10 transition-colors duration-500 ${EASE} group-hover/box:bg-[#2C3A40] group-hover/box:text-white`}
                >
                  <span
                    className={`text-5xl md:text-[64px] font-extrabold leading-none tracking-[-0.04em] text-[#2C3A40] transition-colors duration-500 ${EASE} group-hover/box:text-[#F1CF9D]`}
                  >
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`my-7 block h-1.5 w-12 origin-left bg-[#F1CF9D] transition-transform duration-700 ${EASE} group-hover/box:scale-x-[2]`}
                  />
                  <h2 className="text-2xl md:text-[30px] font-normal leading-[1.15]">
                    {s.title}
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        </RevealSection>
      </div>

      {/* STORY — three paragraphs as labelled columns */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-32`}>
        <section className="grid gap-12 border-t border-white/25 pt-12 md:grid-cols-3">
          <div>
            <p className={`mb-3.5 ${LABEL}`}>What we do</p>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/90">
              Our team provides strategic support across municipal, county, and
              infrastructure initiatives, helping public agencies and prime
              contractors successfully deliver complex programs.
            </p>
          </div>

          <div>
            <p className={`mb-3.5 ${LABEL}`}>With Tetra Tech</p>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/90">
              As part of this work, Cavazos partners with Tetra Tech as a
              strategic subcontractor supporting Harris County initiatives
              focused on disaster recovery, operational support, and program
              delivery. Through this partnership, Cavazos has provided staffing,
              analytical support, and outreach services for major initiatives
              including COVID response efforts, hurricane and storm recovery
              programs, and other county-led projects.
            </p>
          </div>

          <div>
            <p className={`mb-3.5 ${LABEL}`}>Across Houston</p>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/90">
              In addition to these efforts, Cavazos has supported Harris County
              and City of Houston initiatives including Disparity Studies, public
              engagement campaigns, economic development outreach, and
              infrastructure-related communications. Through partnerships with
              Tetra Tech and other prime contractors, Cavazos delivers scalable
              staffing solutions, data-driven program support, and strategic
              communications that help public agencies serve their communities
              effectively.
            </p>
          </div>
        </section>
      </RevealSection>

      {/* PROGRAM TAGS */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-20 md:mt-24`}>
        <section className={`${BOX_HOVER} bg-white px-6 py-10 text-neutral-900 md:px-14 md:py-12`}>
          <p className="mb-6 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2C3A40]">
            Selected programs
          </p>
          <ul aria-label="Selected programs" className="flex flex-wrap gap-3">
            {PROGRAMS.map((name) => (
              <li
                key={name}
                className={`bg-[#2C3A40] px-5 py-3.5 text-lg md:text-xl text-white transition-colors duration-500 ${EASE} hover:bg-[#F1CF9D] hover:text-[#2C3A40]`}
              >
                {name}
              </li>
            ))}
          </ul>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-20 mb-32 md:mt-24 md:mb-36`}>
        <section
          className={`${BOX_HOVER} flex flex-wrap items-center justify-between gap-8 bg-[#2C3A40] px-6 py-12 md:p-14`}
        >
          <h2 className="min-w-0 flex-[1_1_480px] text-4xl md:text-[44px] font-light leading-[1.08]">
            Delivering a public program?{' '}
            <span className="text-[#F1CF9D]">Let&apos;s talk.</span>
          </h2>
          <Link
            href="/contact?topic=public-sector"
            className="relative z-10 shrink-0 bg-[#F1CF9D] px-[34px] py-[18px] text-[17px] font-semibold text-[#2C3A40] transition-colors duration-300 hover:bg-white"
          >
            Contact us →
          </Link>
        </section>
      </RevealSection>
    </main>
  )
}