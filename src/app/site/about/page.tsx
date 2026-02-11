'use client'

import { useEffect, useState } from 'react'
import NavNotHome from '@/components/NavNotHome'

export default function AboutPage() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // next paint -> triggers transition
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <NavNotHome />

      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-backdrop.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Content: left-aligned container */}
      <section className="relative pt-40 pb-32">
        <div className="ml-6 md:ml-12 lg:ml-16">
          {/* HERO (fade in) */}
          <p
            className={[
              'max-w-4xl',
              'text-3xl md:text-5xl',
              'font-light leading-tight',
              'text-white/95',
              'transition-all duration-700 ease-out',
              ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
            ].join(' ')}
          >
            Cavazos Communications was established in 2002 as a firm dedicated to
            reaching multi-cultural audiences and under-served communities through
            focused engagement and communications utilizing localization and
            grassroots outreach on a national, regional and local level.
          </p>

          {/* BODY */}
          <div className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
            <p>
              Cavazos is the Joint Venture Partner and local agency of record for the
              Houston Airport Systems (HAS) and JCDecaux North America for
              Out-of-Home Media advertising sales at Bush (IAH) and Hobby (HOU)
              Airports.
            </p>

            <p>
              We offer a broad range of public relations, public affairs, advertising,
              brand management, marketing services, and talent acquisition, with
              special expertise in integrating messages in-culture and finding a
              common ground for engagement.
            </p>

            <p>
              Cavazos also specializes in talent acquisition for various staffing
              needs. We offer opportunities to professionals for full-time and
              temporary positions in analytical research, quality assurance,
              accounting, data analysis, auditing, and healthcare—providing
              experienced professionals who consistently meet compliance deadlines.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
