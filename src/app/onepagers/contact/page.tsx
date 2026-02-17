import PageFadeIn from '@/components/PageFadeIn'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* Centered content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <PageFadeIn delay={0}>
          <section className="w-full max-w-xl rounded-3xl border border-white/15 bg-white/5 p-8 md:p-10 backdrop-blur-sm">

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              start a conversation
            </h1>

            <p className="mt-4 text-white/75 leading-relaxed">
              Tell us what you’re exploring and how we can help.  
              Our team will follow up shortly.
            </p>

            {/* FORM */}
            <form
              className="mt-8 space-y-6"
              method="POST"
              action="/api/contact"   /* future backend route */
            >
              {/* Topic dropdown */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  topic
                </label>

                <select
                  name="topic"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none backdrop-blur-sm
                             focus:border-white/40 focus:bg-white/15"
                >
                  <option value="" disabled selected className="text-black">
                    select a topic
                  </option>
                  <option value="airport advertising" className="text-black">
                    airport advertising
                  </option>
                  <option value="marketing solutions" className="text-black">
                    marketing solutions
                  </option>
                  <option value="staffing partnership" className="text-black">
                    staffing partnership
                  </option>
                  <option value="general inquiry" className="text-black">
                    general inquiry
                  </option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur-sm
                             focus:border-white/40 focus:bg-white/15"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, or goals…"
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur-sm
                             focus:border-white/40 focus:bg-white/15"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                send message
              </button>
            </form>
          </section>
        </PageFadeIn>
      </div>
    </main>
  )
}
