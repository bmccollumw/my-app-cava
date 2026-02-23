import Reveal from '@/components/RevealSection'

export default function MarketingPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/marketing.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"
        aria-hidden="true"
      />

      {/* Scroll container with snap */}
      <div className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <div className="ml-6 md:ml-12 lg:ml-16 pr-6 md:pr-12 lg:pr-16">
          {/* PANEL 1 */}
          <section className="min-h-screen flex items-center pt-24 snap-start">
            <Reveal className="w-full">
              <div className="max-w-5xl">
                <h1 className="text-3xl md:text-5xl font-light leading-tight text-white/95">
                  Marketing that moves people — and proves it works.
                </h1>
              </div>
            </Reveal>
          </section>

          {/* PANEL 2 */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-3xl">
                <p className="text-base md:text-lg leading-relaxed text-white/85">
                  We build culturally aware campaigns, brand systems, and strategic messaging that
                  connect with real audiences across digital, physical, and community spaces.
                </p>
                <div className="mt-10 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 3 */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">what we do</h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      title: 'brand strategy',
                      body: 'Positioning, voice, and visual direction that create clarity and long-term recognition.',
                    },
                    {
                      title: 'campaign creative',
                      body: 'Integrated concepts and production built to perform across media, moments, and audiences.',
                    },
                    {
                      title: 'community engagement',
                      body: 'Authentic outreach that builds trust, participation, and meaningful connection.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        service
                      </div>
                      <div className="mt-4 text-lg md:text-xl font-semibold text-white">
                        {item.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 4 */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">why it matters</h2>

                <p className="mt-6 text-white/80 leading-relaxed">
                  Attention is fragmented. Trust is earned slowly. Our work focuses on clarity,
                  cultural understanding, and measurable outcomes — so brands don’t just appear,
                  they resonate.
                </p>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 5 */}
          <section className="min-h-screen flex items-center pb-24 snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <div className="rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    let’s build something that lasts.
                  </h2>

                  <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                    Tell us what you’re working toward — we’ll help shape the strategy, message,
                    and creative needed to get there.
                  </p>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                    >
                      start a conversation
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
