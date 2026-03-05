'use client'

import PageFadeIn from '@/components/PageFadeIn'
import { useState } from 'react'

const BG_IMAGE = '/contact-background.jpg'

const TOPICS = [
  { value: 'airport-advertising', label: 'Airport Advertising' },
  { value: 'marketing-solutions', label: 'Marketing Solutions' },
  { value: 'staffing-partnership', label: 'Staffing Partnership' },
  { value: 'general-inquiry', label: 'General Inquiry' },
]

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main
      className="relative min-h-screen w-full text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

      <PageFadeIn delay={0}>
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — editorial header */}
            <PageFadeIn delay={100}>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-6">
                  Get in touch
                </p>
                <h1 className="text-4xl md:text-6xl font-light leading-[1.1] text-white">
                  Let's build<br />
                  <span className="italic text-white/60">something</span><br />
                  together.
                </h1>
                <div className="mt-10 w-12 h-px bg-white/30" />
                <p className="mt-8 text-white/55 leading-relaxed text-sm md:text-base max-w-sm">
                  Whether you're exploring a partnership, advertising opportunity,
                  or long-term collaboration — we're ready to listen.
                </p>
              </div>
            </PageFadeIn>

            {/* Right — form */}
            <PageFadeIn delay={250}>
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="text-2xl font-light text-white/90">Thank you.</p>
                  <p className="mt-3 text-white/50 text-sm">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form
                  className="space-y-8"
                  method="POST"
                  action="/api/contact"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Topic
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setSelectedTopic(t.value)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                            selectedTopic === t.value
                              ? 'bg-white text-black border-white'
                              : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="topic" value={selectedTopic} required />
                  </div>

                  <div className="group">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Email
                    </p>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/25 outline-none focus:border-white/60 transition-colors duration-200 text-base"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Message
                    </p>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project, timeline, or goals…"
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/25 outline-none resize-none focus:border-white/60 transition-colors duration-200 text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <span>Send message</span>
                    <span className="w-8 h-px bg-white/40 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
                  </button>

                </form>
              )}
            </PageFadeIn>

          </div>
        </div>
      </PageFadeIn>

    </main>
  )
}