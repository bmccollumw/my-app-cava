import Reveal from '@/components/RevealSection'

export default function StaffingPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/staffing.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/70"
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
                  Specialized staffing built for operational excellence.
                </h1>

                <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/85">
                  Cavazos Collective delivers targeted talent acquisition and staffing support
                  across critical functions—helping teams stay compliant, responsive, and fully
                  resourced.
                </p>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 2 — PARTNERSHIP */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-5xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  partnership spotlight
                </h2>

                <div className="mt-8 max-w-3xl space-y-4">
                  <p className="text-base md:text-lg leading-relaxed text-white/85">
                    Cavazos Collective is a proud{' '}
                    <span className="font-semibold text-white">W/DBE</span> partner to{' '}
                    <span className="font-semibold text-white">Tetra Technologies</span>,
                    providing specialized staffing solutions that support the company’s
                    operational and workforce needs.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed text-white/70">
                    Through this partnership, we help drive diverse talent acquisition and
                    workforce excellence across Tetra’s projects and services—aligning the
                    right people to the right roles with speed and care.
                  </p>
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 3 — CAPABILITIES */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  what we support
                </h2>

                <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
                  Flexible staffing coverage designed to meet the pace of operations—without
                  sacrificing quality, documentation, or compliance.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      title: 'analytical + operational roles',
                      body: 'Research, analysis, and operational support aligned to evolving project needs and timelines.',
                    },
                    {
                      title: 'quality + compliance support',
                      body: 'QA-minded placements built around accuracy, documentation, and deadline-driven environments.',
                    },
                    {
                      title: 'accounting + admin coverage',
                      body: 'Reliable back-office staffing that keeps workflows stable and teams focused on delivery.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        capability
                      </div>
                      <div className="mt-4 text-lg md:text-xl font-semibold text-white">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 4 — TRUST */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  why teams trust us
                </h2>

                <div className="mt-8 space-y-5 text-white/80 leading-relaxed">
                  <p>
                    We combine clear role definition, careful screening, and responsive
                    coordination to place talent that fits both the work and the culture.
                  </p>

                  <ul className="space-y-3 text-sm md:text-base">
                    <li>• fast, structured sourcing and candidate shortlists</li>
                    <li>• documentation-aware placements for deadline-driven teams</li>
                    <li>• partnership-first communication and workforce continuity</li>
                  </ul>
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 5 — CTA */}
          <section className="min-h-screen flex items-center pb-24 snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    need staffing support?
                  </h2>

                  <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                    Share the role type, timing, and location—our team will recommend an
                    approach and move quickly to source qualified candidates.
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
