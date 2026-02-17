import Reveal from '@/components/RevealSection'

export default function AirportAdvertisingPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/airport.jpg')" }}
        aria-hidden="true"
      />

      {/* Brand overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Subtle gradient for a premium feel */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/65"
        aria-hidden="true"
      />

      {/* Scroll container with snap */}
      <div className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div className="ml-6 md:ml-12 lg:ml-16 pr-6 md:pr-12 lg:pr-16">
          {/* PANEL 1 — HERO */}
          <section className="min-h-screen flex items-center pt-24 snap-start">
            <Reveal className="w-full">
              <div className="max-w-5xl">
                <h1 className="text-3xl md:text-5xl font-light leading-tight text-white/95">
                  Selling Houston’s International Airports’ Advertising since 2010
                </h1>
              </div>
            </Reveal>
          </section>

          {/* PANEL 2 — SUB HERO + CHIPS */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-5xl">
                <div className="max-w-3xl space-y-3">
                  <p className="text-base md:text-lg leading-relaxed text-white/85">
                    Cavazos serves as the Joint Venture Partner and local agency of record for Houston
                    Airport System (HAS), supporting Out-of-Home advertising sales in partnership with{' '}
                    <span className="font-semibold text-white">JCDecaux North America</span>.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed text-white/70">
                    From premium terminal placements to measurable reporting, we help brands show up in
                    high-attention environments—where travelers spend time, notice, and remember.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {['terminal dominations', 'digital + static', 'brand storytelling', 'reporting + insights'].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 3 — PROS */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  why airport advertising works
                </h2>

                <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
                  Airports deliver a unique combination of attention, dwell time, and premium context.
                  Here are a few reasons brands keep investing in terminal media.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      title: 'high dwell time',
                      body: 'Travelers spend extended time in concourses, gates, and baggage claim—giving media more chances to land.',
                    },
                    {
                      title: 'premium environment',
                      body: 'Airport placements signal scale and credibility—ideal for brands seeking trust, visibility, and recall.',
                    },
                    {
                      title: 'measurable impact',
                      body: 'Campaigns can include reporting, flight & passenger context, and performance readouts aligned to objectives.',
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        benefit
                      </div>
                      <div className="mt-4 text-lg md:text-xl font-semibold text-white">
                        {c.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{c.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 4 — CTA */}
          <section className="min-h-screen flex items-center pb-24 snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    ready to plan a placement?
                  </h2>

                  <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                    Tell us your goals, timeline, and budget range—we’ll recommend formats and placements
                    that match your audience and objectives.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/site/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                    >
                      contact us
                    </a>

                    <a
                      href="/site/marketing"
                      className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      view marketing solutions
                    </a>
                  </div>
                </div>

                <div className="h-16" />
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </main>
  )
}
