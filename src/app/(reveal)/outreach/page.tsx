import Reveal from '@/components/RevealSection'

export default function DiversityOutreachPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/diversity.jpg')" }}
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
                  Diversity outreach built on trust, clarity, and follow-through.
                </h1>

                <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/85">
                  We help organizations connect with communities authentically—through structured
                  outreach, partner engagement, and communication that’s culturally aware and action-oriented.
                </p>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 2 — WHAT WE DO */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">what we do</h2>

                <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
                  End-to-end outreach support that helps teams communicate clearly, show up consistently,
                  and build lasting relationships.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      title: 'community partnerships',
                      body: 'Identify and collaborate with trusted orgs, leaders, and stakeholders aligned to your goals.',
                    },
                    {
                      title: 'event + engagement strategy',
                      body: 'Plan and execute moments that bring people together—purposefully and respectfully.',
                    },
                    {
                      title: 'messaging + materials',
                      body: 'Create culturally aware copy and collateral that’s consistent, accessible, and clear.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        focus area
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

          {/* PANEL 3 — HOW WE WORK */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-6xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">how we work</h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    {
                      step: '01',
                      title: 'listen + align',
                      body: 'Clarify outcomes, timelines, and stakeholders—then confirm what success looks like.',
                    },
                    {
                      step: '02',
                      title: 'build the plan',
                      body: 'Develop an outreach roadmap with partners, tactics, and messaging that fits the context.',
                    },
                    {
                      step: '03',
                      title: 'execute + report',
                      body: 'Show up consistently, track progress, and document learnings you can build on.',
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                        step {s.step}
                      </div>
                      <div className="mt-4 text-lg md:text-xl font-semibold text-white">
                        {s.title}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">{s.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 h-px w-full max-w-6xl bg-white/15" />
              </div>
            </Reveal>
          </section>

          {/* PANEL 4 — WHY IT MATTERS */}
          <section className="min-h-screen flex items-center snap-start">
            <Reveal className="w-full">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-semibold text-white">why it matters</h2>

                <p className="mt-6 text-white/80 leading-relaxed">
                  Outreach isn’t a checkbox. When it’s done with respect and consistency, it creates
                  trust, participation, and better outcomes for both organizations and communities.
                </p>

                <ul className="mt-8 space-y-3 text-sm md:text-base text-white/80">
                  <li>• stronger stakeholder trust and long-term relationships</li>
                  <li>• higher turnout, engagement, and follow-through</li>
                  <li>• clearer documentation and measurable progress</li>
                </ul>

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
                    want to build a stronger outreach plan?
                  </h2>

                  <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                    Share your goal, audience, and timeline—then we’ll recommend a practical approach
                    that’s respectful, realistic, and effective.
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
