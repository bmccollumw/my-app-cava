import Link from 'next/link'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import EdgeFade from '@/components/EdgeFade'

// Brand colors (written out in classes below so Tailwind can see them)
// Brick red: #984E4A — this page's color (from the logo): panel, accents, CTA
// Soft red:  #E7B8B4 — labels on black
// Each "What we do" tile uses the color of the page it links to.

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
  'text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E7B8B4]'

const CERTS = ['ACDBE', 'MBE', 'W/DBE', 'HUB']

// "What we do" — add, remove or rename services here.
// `tile` = background + text color, matching each practice page.
const SERVICES = [
  {
    title: 'Partnerships',
    blurb: 'Joint ventures & subcontracting',
    href: '/partnerships',
    tile: 'bg-[#702B36] text-white',
  },
  {
    title: 'Airport advertising',
    blurb: 'JV partner at Bush & Hobby',
    href: '/airport',
    tile: 'bg-[#456672] text-white',
  },
  {
    title: 'Public sector',
    blurb: 'Staffing & program management',
    href: '/public-sector',
    tile: 'bg-[#2C3A40] text-white border-t-[6px] border-[#F1CF9D]',
  },
  {
    title: 'Strategic communications',
    blurb: 'PR, marketing & public affairs',
    href: '/strategic-communications',
    tile: 'bg-[#D7E1D9] text-[#2C3A40]',
  },
  {
    title: 'Diversity outreach',
    blurb: 'Grassroots, in-language engagement',
    href: '/diversity-outreach',
    tile: 'bg-[#F1CF9D] text-[#2C3A40]',
  },
  {
    title: 'Web development & engineering',
    blurb: 'Websites, web apps & digital platforms',
    href: '/contact', // change to the new page once it exists
    tile: 'bg-[#7198A3] text-neutral-950',
    isNew: true,
  },
]

const OUTCOMES = [
  'Participation goals met',
  'Stronger community engagement',
  'Measurable outcomes, award to completion',
]

const num = (i: number) => String(i + 1).padStart(2, '0')

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <EdgeFade />

      {/* Brick red panel — starts below the top bar so the red logo stays
          visible, and ends behind the certifications box */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[96px] h-[620px] md:top-[120px] md:h-[780px] bg-[#984E4A]"
      />

      {/* Black diagonal over the left part of the red (desktop only) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[120px] hidden h-[780px] bg-black md:block"
        style={{ clipPath: 'polygon(0 0, 50% 0, 30% 100%, 0 100%)' }}
      />

      {/* HERO — huge 2002 + headline */}
      <PageFadeIn delay={0}>
        <section
          className={`relative ${GUTTER_L} ${GUTTER_R} flex flex-wrap items-end gap-x-16 gap-y-10 pt-36 md:pt-44`}
        >
          <p aria-hidden="true" className="flex shrink-0 flex-col">
            <span className={`mb-2 ${LABEL}`}>Founded</span>
            <span className="text-[120px] md:text-[260px] font-extrabold leading-[0.8] tracking-[-0.06em]">
              2002
            </span>
          </p>
          <h1 className="mb-2 min-w-0 flex-[1_1_420px] text-4xl md:text-[52px] font-light leading-[1.06] tracking-[-0.02em]">
            The certified partner behind{' '}
            <strong className="font-extrabold">complex public contracts.</strong>
          </h1>
        </section>
      </PageFadeIn>

      {/* CERTIFIED — stacked certifications + intro, in a white box */}
      <RevealSection
        className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-16 md:mr-0 md:mt-24 md:w-[min(1180px,88%)]`}
      >
        <section
          className={`${BOX_HOVER} flex flex-wrap items-start gap-x-[72px] gap-y-10 bg-white px-6 py-12 text-neutral-900 md:p-14`}
        >
          <div className="shrink-0">
            <p className="mb-4 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#984E4A]">
              Certified
            </p>
            <p
              aria-hidden="true"
              className="text-5xl md:text-[64px] font-extrabold leading-[1.02] tracking-[-0.035em]"
            >
              {CERTS.map((c, i) => (
                <span
                  key={c}
                  className={`block ${i === CERTS.length - 1 ? 'text-[#984E4A]' : ''}`}
                >
                  {c}
                </span>
              ))}
            </p>
          </div>
          <p className="min-w-0 flex-[1_1_480px] text-xl md:text-[26px] font-light leading-[1.42]">
            Cavazos is a certified strategic partner specializing in joint
            venture and subcontracting roles on complex public-sector and
            private sector contracts. Founded in 2002, the firm has built a
            reputation for disciplined execution, compliance, and seamless
            collaboration with prime contractors and government agencies.
          </p>
        </section>
      </RevealSection>

      {/* STATEMENT */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-28 md:mt-36`}>
        <p
          aria-hidden="true"
          className="text-5xl md:text-[96px] font-extrabold leading-none tracking-[-0.045em]"
        >
          <span className="block">Mobilize quickly.</span>
          <span className="block">Integrate smoothly.</span>
          <span className="block text-[#984E4A]">Execute reliably.</span>
        </p>
      </RevealSection>

      {/* WHAT WE DO — one tile per practice, in that page's color */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-28 md:mt-36`}>
        <section>
          <h2 className="mb-7 text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.015em]">
            What we do
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <li key={s.title} className={BOX_WRAP}>
                <Link
                  href={s.href}
                  className={`${BOX_HOVER} ${s.tile} flex min-h-[220px] md:min-h-[260px] flex-col justify-between p-7 md:p-8`}
                >
                  <span className="flex items-center justify-between text-[13px] font-semibold">
                    <span>{num(i)}</span>
                    {s.isNew ? (
                      <span className="bg-neutral-950 px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-white">
                        New
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className={`text-lg transition-transform duration-500 ${EASE} group-hover/box:translate-x-1`}
                      >
                        →
                      </span>
                    )}
                  </span>
                  <span>
                    <span className="mb-3 block text-[28px] md:text-[34px] leading-[1.1]">
                      {s.title}
                    </span>
                    <span className="text-base leading-snug opacity-85">{s.blurb}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </RevealSection>

      {/* WHAT PRIMES GET + second paragraph */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-28 md:mt-36`}>
        <section className="flex flex-wrap gap-x-20 gap-y-12 border-t border-white/25 pt-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <p className={`mb-5 ${LABEL}`}>What primes get</p>
            <ol>
              {OUTCOMES.map((o, i) => (
                <li
                  key={o}
                  className="flex items-baseline gap-5 border-b border-white/25 py-4 md:py-[18px]"
                >
                  <span className="text-sm font-semibold text-[#E7B8B4]">{num(i)}</span>
                  <span className="text-2xl md:text-[28px] font-light">{o}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="min-w-0 flex-[1_1_560px] text-lg md:text-[19px] leading-relaxed text-white/90">
            As an ACDBE, MBE, W/DBE, and HUB-certified business, Cavazos
            strengthens proposals and delivers results across aviation,
            municipal, and county initiatives. We serve as the Joint Venture
            Partner for the advertising concession at Houston&apos;s Bush and
            Hobby Airports and support regional and municipal programs through
            staffing, program management, strategic communications, and web
            development and engineering. Cavazos is built to mobilize quickly,
            integrate smoothly, and execute reliably. We help primes meet
            participation goals, enhance community engagement, and deliver
            measurable outcomes from award through completion.
          </p>
        </section>
      </RevealSection>

      {/* CTA */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-24 mb-32 md:mt-28 md:mb-36`}>
        <section
          className={`${BOX_HOVER} flex flex-wrap items-center justify-between gap-8 bg-[#984E4A] px-6 py-12 md:p-14`}
        >
          <h2 className="min-w-0 flex-[1_1_480px] text-4xl md:text-[44px] font-light leading-[1.08]">
            Bidding on something complex?{' '}
            <strong className="font-bold">Bring us in early.</strong>
          </h2>
          <Link
            href="/contact"
            className="relative z-10 shrink-0 bg-white px-[34px] py-[18px] text-[17px] font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#F3D9D7]"
          >
            Contact us →
          </Link>
        </section>
      </RevealSection>
    </main>
  )
}