'use client'

import { useState } from 'react'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'

const BG_IMAGE = '/airport.jpg'

// Brand colors (written out in classes below so Tailwind can see them)
// Teal:        #456672  — buttons, numbers, bands
// Light teal:  #7198A3  — labels on black
// Slate:       #2C3A40  — partnership card
// Sage:        #D7E1D9  — small details

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

const HoverLine = ({ color = 'bg-[#456672]' }: { color?: string }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 ${color} transition-transform duration-1000 ${EASE} group-hover/box:scale-x-100`}
  />
)

const STATS = [
  { label: 'IAH · 2023', value: '45M+', caption: 'passengers' },
  { label: 'HOU', value: '14M+', caption: 'passengers' },
  { label: 'IAH', value: '5', caption: 'terminals' },
  { label: 'Domination', value: '100%', caption: 'share-of-voice' },
]

const LOGOS = [
  { src: '/client-1.png', alt: 'Tetra' },
  { src: '/client-1.gif', alt: 'University of Houston' },
  { src: '/api.png', alt: 'American Petroleum Institute' },
  { src: '/britishint.png', alt: 'British International' },
  { src: '/client-7.png', alt: 'Harris County Texas' },
  { src: '/har.png', alt: 'HAR.com' },
  { src: '/utmb.png', alt: 'UTMB' },
  { src: '/villageschool.png', alt: 'The Village School' },
  { src: '/sgrr.webp', alt: "Scott Gertner's Rhythm Room" },
  { src: '/heb.png', alt: 'H-E-B' },
  { src: '/mfah.avif', alt: 'Museum of Fine Arts Houston' },
]

/* ---------- Big click-down card ---------- */
function InfoCard({
  id,
  eyebrow,
  stat,
  statCaption,
  title,
  children,
}: {
  id: string
  eyebrow: string
  stat: string
  statCaption: string
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${BOX_WRAP} min-w-0`}>
      <article className={`${BOX_HOVER} bg-white text-neutral-900`}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full min-h-[380px] flex-col justify-between gap-10 p-8 md:p-12 text-left"
        >
          {/* top row */}
          <span className="flex w-full items-start justify-between gap-6">
            <span className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#456672]">
              {eyebrow}
            </span>
            <span
              aria-hidden="true"
              className={`flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center border text-3xl font-light transition-[transform,background-color,border-color,color] duration-500 ${EASE} ${
                open
                  ? 'rotate-45 bg-[#456672] border-[#456672] text-white'
                  : 'border-neutral-300 group-hover/box:border-[#456672] group-hover/box:text-[#456672]'
              }`}
            >
              +
            </span>
          </span>

          {/* stat + title */}
          <span className="block">
            <span className="block text-7xl md:text-[104px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#456672]">
              {stat}
            </span>
            <span className="mt-3 block text-base md:text-lg text-neutral-600">
              {statCaption}
            </span>
            <span className="mt-8 block text-4xl md:text-[52px] font-light leading-[1.05] tracking-[-0.02em]">
              {title}
            </span>
          </span>
        </button>

        {/* expanding text */}
        <div
          id={`${id}-panel`}
          role="region"
          aria-hidden={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-700 ${EASE} ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-8 md:mx-12 border-t border-neutral-200 pt-8 pb-10 md:pb-12">
              {children}
            </div>
          </div>
        </div>

        <HoverLine />
      </article>
    </div>
  )
}

/* ---------- Partnership card that opens to the right ---------- */
function PartnershipCard() {
  const [open, setOpen] = useState(false)

  return (
    <section className="flex min-h-[460px] flex-col overflow-hidden bg-[#2C3A40] md:flex-row">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="partnership-panel"
        onClick={() => setOpen((o) => !o)}
        className={`group flex min-w-0 flex-col justify-between gap-8 p-8 md:p-14 text-left transition-[flex-basis] duration-700 ${EASE} md:shrink-0 ${
          open ? 'md:basis-[40%]' : 'md:basis-full'
        }`}
      >
        <span className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7198A3]">
          The partnership
        </span>

        <span
          className={`font-extrabold leading-[0.98] tracking-[-0.04em] transition-[font-size] duration-700 ${EASE} text-6xl ${
            open ? 'md:text-[64px]' : 'md:text-[132px]'
          }`}
        >
          Cavazos
          <br />
          <span className="font-light text-[#7198A3]">×</span> JCDecaux
        </span>

        <span className="inline-flex items-center gap-3 text-base font-medium text-[#D7E1D9]">
          <span className="relative pb-1">
            {open ? '← Close' : 'Read about the partnership →'}
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D7E1D9] transition-transform duration-700 ${EASE} group-hover:scale-x-100`}
            />
          </span>
        </span>
      </button>

      <div
        id="partnership-panel"
        aria-hidden={!open}
        className={`min-w-0 overflow-hidden bg-[#456672] transition-[flex-basis,max-height,opacity] duration-700 ${EASE} ${
          open
            ? 'max-h-[1000px] opacity-100 md:max-h-none md:basis-[60%]'
            : 'max-h-0 opacity-0 md:max-h-none md:basis-0'
        }`}
      >
        <div
          className={`flex h-full items-center p-8 md:p-14 md:w-[min(760px,55vw)] transition-transform duration-700 ${EASE} ${
            open ? 'translate-x-0' : 'md:translate-x-10'
          }`}
        >
          <p className="text-xl md:text-2xl leading-relaxed text-white">
            Together, we oversee one of the most dynamic airport media programs
            in the country, delivering premium digital, static, exterior, and
            private aviation advertising platforms across both airports. Our
            role ensures local market expertise, regulatory compliance, and
            strategic partnership execution, while JCDecaux brings global
            innovation and world-class media infrastructure. The result is a
            seamless, high-impact advertising ecosystem across Houston&apos;s
            gateway airports.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------- Logo board ---------- */
function LogoBoard() {
  return (
    <section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl md:text-[44px] font-light leading-[1.08]">
          Advertising partners
        </h2>
        <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7198A3]">
          IAH · HOU
        </p>
      </div>

      <ul className="grid grid-cols-3 gap-px border border-white/15 bg-white/15 md:grid-cols-6">
        {LOGOS.map((logo) => (
          <li
            key={logo.src}
            className="group flex aspect-[4/3] items-center justify-center bg-white p-5 md:p-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className={`max-h-full max-w-full object-contain transition-transform duration-700 ${EASE} motion-safe:group-hover:scale-105`}
            />
          </li>
        ))}

        {/* 12th tile — call to action */}
        <li className="group aspect-[4/3] bg-[#456672]">
          <a
            href="#advertise"
            className="flex h-full w-full flex-col justify-between p-4 md:p-6 text-white transition-colors duration-500 hover:bg-[#2C3A40]"
          >
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E1D9]">
              Your brand here
            </span>
            <span
              aria-hidden="true"
              className={`self-end text-3xl md:text-4xl font-light transition-transform duration-700 ${EASE} group-hover:translate-x-1`}
            >
              →
            </span>
          </a>
        </li>
      </ul>
    </section>
  )
}

/* ---------- Page ---------- */
export default function AirportAdvertisingOverviewPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* HERO — full-bleed photo, black panel covers bottom-left */}
      <div className="relative flex min-h-[100svh] flex-col justify-end md:min-h-[900px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-[center_45%]"
          style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent"
        />

        <PageFadeIn delay={0} className="relative w-full md:w-[min(900px,70%)]">
          <div className="bg-black pt-12 pb-28 pl-4 pr-6 sm:pl-6 sm:pr-14 md:pt-14 md:pb-32">
            <p className="mb-5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#7198A3]">
              Airport advertising · IAH &amp; HOU
            </p>
            <h1 className="mb-9 text-3xl md:text-[40px] font-light leading-[1.18] tracking-tight">
              Cavazos is proud to serve as the certified joint-venture partner
              with JCDecaux for the exclusive management of airport advertising
              at George Bush Intercontinental Airport (IAH) and William P. Hobby
              Airport (HOU).
            </h1>
            <a
              href="#advertise"
              className="inline-block bg-[#456672] px-8 py-[18px] text-[17px] font-medium text-white transition-colors duration-300 hover:bg-[#2C3A40]"
            >
              Advertise at IAH &amp; HOU →
            </a>
          </div>
        </PageFadeIn>
      </div>

      {/* STATS — board-style strip overlapping the photo */}
      <PageFadeIn delay={300} className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} relative z-10 -mt-[72px]`}>
        <section
          aria-label="Airport statistics"
          className={`${BOX_HOVER} grid grid-cols-2 bg-white text-neutral-900 md:grid-cols-4`}
        >
          {STATS.map((s, i) => (
            <div
              key={s.value}
              className={`px-6 py-8 md:px-8 md:py-9 border-neutral-200 ${
                i % 2 === 0 ? 'border-r' : ''
              } ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''}`}
            >
              <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {s.label}
              </p>
              <p className="text-5xl md:text-[64px] font-extrabold leading-none tracking-[-0.04em] text-[#456672]">
                {s.value}
              </p>
              <p className="mt-2.5 text-base text-neutral-700">{s.caption}</p>
            </div>
          ))}
          <HoverLine />
        </section>
      </PageFadeIn>

      {/* AUDIENCE + OPPORTUNITY — side-by-side click-down cards */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-32`}>
        <div className="grid items-start gap-6 md:grid-cols-2">
          <InfoCard
            id="audience"
            eyebrow="Who you reach"
            stat="45M+"
            statCaption="IAH passengers in 2023"
            title="The audience"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-700">
              Houston&apos;s airports offer unmatched access to influential
              travelers. IAH welcomed more than 45 million passengers in 2023,
              ranking among the busiest airports in the United States, while HOU
              served over 14 million passengers. As the energy capital of the
              world and home to numerous Fortune 500 companies, Houston attracts
              elite business travelers, decision-makers, and international
              audiences.
            </p>
          </InfoCard>

          <InfoCard
            id="opportunity"
            eyebrow="What you can own"
            stat="100%"
            statCaption="share-of-voice opportunities"
            title="The opportunity"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-700">
              With five terminals at IAH, expansive digital networks, 100%
              share-of-voice domination opportunities, private aviation media,
              and high-dwell gate environments, brands can achieve full market
              domination or target specific traveler segments with precision.
              Few environments deliver this level of scale, prestige, and
              captive attention.
            </p>
          </InfoCard>
        </div>
      </RevealSection>

      {/* PARTNERSHIP — card that opens to the right */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-32`}>
        <PartnershipCard />
      </RevealSection>

      {/* LOGOS — board of tiles */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-24 md:mt-32`}>
        <LogoBoard />
      </RevealSection>

      {/* CTA (bottom) */}
      <RevealSection className={`${BOX_WRAP} ${GUTTER_L} ${GUTTER_R} mt-24 mb-32 md:mt-28 md:mb-36`}>
        <section
          id="advertise"
          className={`${BOX_HOVER} scroll-mt-28 flex flex-wrap items-center justify-between gap-8 bg-[#456672] px-6 py-12 md:p-14`}
        >
          <div className="min-w-0 flex-[1_1_560px]">
            <h2 className="mb-4 text-4xl md:text-[44px] font-light leading-[1.08]">
              Advertise at IAH &amp; HOU
            </h2>
            <p className="text-lg md:text-[19px] leading-relaxed text-white/95">
              If you are interested in learning how airport advertising at IAH
              and HOU can elevate your brand presence, we invite you to connect
              with our team. Whether you are seeking full airport domination,
              premium digital placements, or strategic private aviation media,
              Cavazos and JCDecaux are ready to build a program tailored to your
              objectives. Contact us to begin the conversation.
            </p>
          </div>

          <a
            href="/contact"
            className="relative z-10 shrink-0 bg-white px-[34px] py-[18px] text-[17px] font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#D7E1D9]"
          >
            Contact us →
          </a>

          <HoverLine color="bg-white" />
        </section>
      </RevealSection>
    </main>
  )
}