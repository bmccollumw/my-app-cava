export default function AirportAdvertisingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/airport.jpg')" }}
        aria-hidden="true"
      />

      {/* Brand overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Optional subtle gradient for a premium feel */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/65"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-20">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            airport advertising
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/85">
            Premium placements in high-traffic terminals—built for attention, brand recall, and
            measurable impact. Below is placeholder copy to hold the layout while you finalize your
            offering and case studies.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90">
              terminal dominations
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90">
              digital + static
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90">
              brand storytelling
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90">
              reporting + insights
            </span>
          </div>
        </section>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-white/15" />

        {/* Two-column sections */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              placements &amp; formats
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              A flexible mix of high-visibility inventory designed around passenger flow and dwell
              time. This is filler text—replace with your specific airports, vendors, and inventory
              types.
            </p>

            <ul className="mt-6 space-y-3 text-white/85">
              <li>• digital screens (concourse + baggage claim)</li>
              <li>• large-format walls &amp; wraps</li>
              <li>• gate-area takeovers</li>
              <li>• wayfinding-adjacent placements</li>
            </ul>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              how we run it
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              A streamlined process that keeps creative, approvals, and deployment tight. Replace
              this copy with your real SOP once ready.
            </p>

            <ol className="mt-6 space-y-3 text-white/85">
              <li>1) discovery + airport inventory match</li>
              <li>2) creative system + specs alignment</li>
              <li>3) production + approvals</li>
              <li>4) launch + reporting cadence</li>
            </ol>
          </div>
        </section>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-white/15" />

        {/* Metrics / proof */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { k: 'audience', v: 'high-intent travelers' },
            { k: 'value', v: 'premium attention' },
            { k: 'reporting', v: 'clear performance readouts' },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                {item.k}
              </div>
              <div className="mt-4 text-lg md:text-xl font-semibold text-white">
                {item.v}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Placeholder copy—swap in real metrics, case studies, and airport-specific wins when
                you’re ready.
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            ready to plan a placement?
          </h2>
          <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
            Add a short line here about timelines, budget ranges, or what you need from the client.
            This is filler content for now—keep it simple and confident.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              contact us
            </a>
            <a
              href="/marketing"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              view marketing solutions
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
