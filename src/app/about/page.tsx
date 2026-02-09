export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-backdrop.jpg')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Content wrapper */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-32 text-white">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          About
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
          Sample content for now. This section will explain who we are, what we do,
          and the value we bring to partners.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              focus
            </h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>• joint venture partnerships</li>
              <li>• marketing solutions</li>
              <li>• diversity outreach</li>
              <li>• staffing</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              approach
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              We align on goals, build a clear plan, move fast, and measure outcomes.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
