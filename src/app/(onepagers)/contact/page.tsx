'use client'

import { useState } from 'react'
import PageFadeIn from '@/components/PageFadeIn'
import { CONTACT_TOPICS, DEFAULT_TOPIC, topicById } from '@/lib/contactTopics'
import type { ContactTopicId } from '@/lib/contactTopics'

// Page margins — match the top bar exactly
const GUTTER_L = 'ml-4 sm:ml-6'
const GUTTER_R = 'mr-6 sm:mr-8'

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

// How long the color change takes when a topic is picked
const COLOR_MS = 800

const LABEL = 'block text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600'

const FIELD = [
  'w-full bg-transparent border-0 border-b-2 border-neutral-300 px-0 pt-2.5 pb-3',
  'text-lg md:text-xl text-neutral-900 placeholder:text-neutral-400 outline-none',
  `transition-colors duration-500 ${EASE} focus:border-neutral-900`,
].join(' ')

export default function ContactPage() {
  const [topicId, setTopicId] = useState<ContactTopicId>(DEFAULT_TOPIC)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const topic = topicById(topicId) ?? CONTACT_TOPICS[CONTACT_TOPICS.length - 1]
  const colorTransition = { transition: `background-color ${COLOR_MS}ms cubic-bezier(0.22,1,0.36,1)` }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: topicId,
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          message: data.get('message'),
          website: data.get('website'), // honeypot — stays empty for real people
        }),
      })

      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong. Please try again.')

      form.reset()
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Colored panel — changes to the chosen topic's page color.
          Starts below the top bar so the logo stays visible. Desktop only. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-[120px] hidden md:block"
        style={{
          backgroundColor: topic.color,
          clipPath: 'polygon(46% 0, 100% 0, 100% 100%, 26% 100%)',
          ...colorTransition,
        }}
      />

      <div
        className={`relative ${GUTTER_L} ${GUTTER_R} flex min-h-screen flex-wrap items-center gap-x-16 gap-y-12 pt-36 pb-24 md:pt-44`}
      >
        {/* LEFT — headline */}
        <PageFadeIn delay={0} className="min-w-0 flex-[1_1_420px]">
          <p className="mb-5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-[76px] font-light leading-[1.02] tracking-[-0.03em]">
            Let&apos;s build
            <br />
            <em className="italic">something</em>
            <br />
            <strong className="font-extrabold">together.</strong>
          </h1>
          <p className="mt-9 max-w-[400px] text-lg leading-relaxed text-white/75">
            Whether you&apos;re exploring a partnership, advertising opportunity,
            or long-term collaboration — we&apos;re ready to listen.
          </p>
        </PageFadeIn>

        {/* RIGHT — white form card */}
        <PageFadeIn delay={250} className="w-full min-w-0 max-w-[620px] flex-[1_1_520px]">
          <section
            aria-label="Contact form"
            className="border-t-8 bg-white px-6 py-10 text-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:border-t-0 md:p-12"
            style={{ borderTopColor: topic.color, transition: `border-color ${COLOR_MS}ms` }}
          >
            {submitted ? (
              <PageFadeIn delay={0} className="py-12 text-center">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  role="img"
                  aria-label="Message sent"
                  className="mx-auto mb-6"
                >
                  <circle cx="44" cy="44" r="42" fill={topic.color} />
                  <path
                    d="M27 45 L39 57 L62 32"
                    fill="none"
                    stroke={topic.ink}
                    strokeWidth="6"
                    strokeLinecap="square"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                  >
                    {/* draws the checkmark */}
                    <animate
                      attributeName="stroke-dashoffset"
                      from="60"
                      to="0"
                      begin="0.25s"
                      dur="0.7s"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.22 1 0.36 1"
                      keyTimes="0;1"
                    />
                  </path>
                </svg>
                <p className="mb-2 text-3xl font-light">Thank you.</p>
                <p className="mb-7 text-neutral-600">We&apos;ll be in touch shortly.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="min-h-11 text-[15px] underline underline-offset-4"
                >
                  Send another
                </button>
              </PageFadeIn>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                {/* Topic */}
                <fieldset className="mb-9">
                  <legend className={`mb-3.5 ${LABEL}`}>What can we help with?</legend>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_TOPICS.map((t) => {
                      const on = t.id === topicId
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setTopicId(t.id)}
                          className={`inline-flex min-h-11 items-center gap-2.5 border-[1.5px] px-4 py-2.5 text-[15px] transition-[background-color,color,border-color] duration-500 ${EASE} ${
                            on ? '' : 'border-neutral-300 bg-white text-neutral-900 hover:border-neutral-500'
                          }`}
                          style={
                            on
                              ? { backgroundColor: t.color, borderColor: t.color, color: t.ink }
                              : undefined
                          }
                        >
                          <span
                            aria-hidden="true"
                            className="h-2.5 w-2.5 outline outline-1 outline-black/15"
                            style={{ backgroundColor: t.color }}
                          />
                          {t.label}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                {/* Name + company */}
                <div className="mb-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={LABEL}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={120}
                      placeholder="Your name"
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={LABEL}>
                      Company <span className="font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={160}
                      placeholder="Company"
                      className={FIELD}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label htmlFor="email" className={LABEL}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@company.com"
                    className={FIELD}
                  />
                </div>

                {/* Message */}
                <div className="mb-9">
                  <label htmlFor="message" className={LABEL}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={5000}
                    placeholder="Tell us about your project, timeline, or goals…"
                    className={`${FIELD} resize-none`}
                  />
                </div>

                {/* Honeypot — hidden from people, bots fill it in */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                {error && (
                  <p role="alert" className="mb-5 text-[15px] text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex min-h-[52px] items-center gap-3.5 px-7 py-4 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: topic.color, color: topic.ink, ...colorTransition }}
                >
                  {loading ? 'Sending…' : 'Send message'}
                  <span
                    aria-hidden="true"
                    className={`transition-transform duration-500 ${EASE} group-hover:translate-x-1`}
                  >
                    →
                  </span>
                </button>
              </form>
            )}
          </section>
        </PageFadeIn>
      </div>
    </main>
  )
}