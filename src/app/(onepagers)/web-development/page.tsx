'use client'

import Link from 'next/link'
import { useState } from 'react'
import PageFadeIn from '@/components/PageFadeIn'
import RevealSection from '@/components/RevealSection'
import EdgeFade from '@/components/EdgeFade'

// Brand colors (written out in classes below so Tailwind can see them)
// Light teal: #7198A3 — this page's color: accents, active states
// Soft teal:  #A9C3CA — labels on black
// Teal:       #456672 — numbers on white
// Slate:      #2C3A40 — code editor, device frame

// Page margins — match the top bar exactly
const GUTTER_L = 'ml-4 sm:ml-6'
const GUTTER_R = 'mr-6 sm:mr-8'

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

const KICKER = 'mb-4 text-xs md:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#A9C3CA]'
const H2 = 'mb-5 text-4xl md:text-[56px] font-light leading-[1.04] tracking-[-0.025em]'
const SUB = 'max-w-[520px] text-lg md:text-[19px] leading-relaxed text-white/80'

const CONTACT_HREF = '/contact?topic=web-development'

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const COLORS = [
  { name: 'Light teal', hex: '#7198A3', ink: '#111111' },
  { name: 'Brick red', hex: '#984E4A', ink: '#ffffff' },
  { name: 'Cream', hex: '#F1CF9D', ink: '#2C3A40' },
  { name: 'Slate', hex: '#2C3A40', ink: '#ffffff' },
  { name: 'Sage', hex: '#D7E1D9', ink: '#2C3A40' },
] as const

type DeviceId = 'desktop' | 'tablet' | 'phone'
const DEVICES: Record<DeviceId, { label: string; w: string; h: number; r: number; cols: number }> = {
  desktop: { label: 'Desktop', w: '100%', h: 420, r: 6, cols: 3 },
  tablet: { label: 'Tablet', w: '62%', h: 450, r: 22, cols: 2 },
  phone: { label: 'Phone', w: '38%', h: 480, r: 34, cols: 1 },
}

type BlockId = 'hero' | 'services' | 'news' | 'map' | 'form' | 'translate'
const BLOCKS: { id: BlockId; label: string; note: string; h: number; bg?: string; ink?: string }[] = [
  { id: 'hero', label: 'Hero banner', note: 'designed for your brand', h: 110 }, // uses the chosen color
  { id: 'services', label: 'Services', note: 'what you offer', h: 70, bg: '#D7E1D9', ink: '#2C3A40' },
  { id: 'news', label: 'News & updates', note: 'posts your team edits', h: 64, bg: '#F1CF9D', ink: '#2C3A40' },
  { id: 'map', label: 'Locations map', note: 'find an office', h: 90, bg: '#456672', ink: '#ffffff' },
  { id: 'form', label: 'Contact form', note: 'saved to a database', h: 70, bg: '#984E4A', ink: '#ffffff' },
  { id: 'translate', label: 'Language switch', note: 'English / Español', h: 50, bg: '#2C3A40', ink: '#ffffff' },
]

const DESIGN_STEPS = [
  { title: 'We design it with you', body: 'Layouts and visuals made for your brand — you review and comment before we build.' },
  { title: 'We build and launch it', body: 'One project fee covers design, build and launch.' },
  { title: 'We keep it fresh', body: 'Choose a monthly care plan, or call us for edits whenever you need them.' },
]

const A11Y_CHECKS = ['Readable contrast', 'Large, clear text', 'Big tap targets', 'Visible keyboard focus']

const STEPS = [
  {
    title: 'Discover',
    body: 'We learn your goals, audiences and requirements — including accessibility and procurement needs — and turn them into a clear plan.',
  },
  {
    title: 'Design',
    body: 'No designer on your team? We design your site with you — clickable designs you can review before a line of code is written.',
  },
  {
    title: 'Build',
    body: 'Modern, fast code — tested on every device and checked for accessibility as we go.',
  },
  {
    title: 'Launch & support',
    body: 'We launch and train your team. After that, pick a monthly care plan or call us for edits as you need them.',
  },
]

const SERVICES = [
  { title: 'Websites', blurb: 'Fast, accessible sites for agencies and businesses.' },
  { title: 'Web apps', blurb: 'Custom tools, dashboards and intake forms.' },
  { title: 'Digital platforms', blurb: 'Portals and content systems your team can update.' },
  { title: 'Care & support', blurb: 'A monthly care plan — or edits as you need them.' },
]

const num = (i: number) => String(i + 1).padStart(2, '0')

/* Animations used only on this page (typing code, blocks popping in, panels sliding) */
const PAGE_CSS = `
@keyframes wd-type { from { width: 0 } to { width: 100% } }
.wd-ln { display: block; overflow: hidden; white-space: nowrap; width: 0; animation: wd-type 800ms steps(30, end) forwards; }
@keyframes wd-blink { 50% { opacity: 0 } }
.wd-cur { display: inline-block; width: 10px; height: 1.2em; background: #7198A3; vertical-align: -0.2em; animation: wd-blink 1s steps(1) infinite; }
@keyframes wd-pop { from { opacity: 0; transform: translateY(14px) scale(.97) } to { opacity: 1; transform: none } }
.wd-pop { animation: wd-pop 550ms cubic-bezier(.22,1,.36,1) both; }
@keyframes wd-slide { from { opacity: 0; transform: translateX(32px) } to { opacity: 1; transform: none } }
.wd-slide { animation: wd-slide 600ms cubic-bezier(.22,1,.36,1) both; }
@media (prefers-reduced-motion: reduce) {
  .wd-ln { animation: none; width: 100%; }
  .wd-cur { animation: none; }
  .wd-pop, .wd-slide { animation: none; }
}
`

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentPage() {
  const [colorIdx, setColorIdx] = useState(0)
  const [title, setTitle] = useState('')
  const [device, setDevice] = useState<DeviceId>('desktop')
  const [blocks, setBlocks] = useState<BlockId[]>(['hero', 'services'])
  const [a11y, setA11y] = useState(false)
  const [step, setStep] = useState(0)

  const color = COLORS[colorIdx]
  const headline = title.trim() || 'Your headline here'
  const headlineInCode = headline.length > 18 ? `${headline.slice(0, 18)}…` : headline
  const dev = DEVICES[device]
  const colorFade = { transition: 'background-color 700ms cubic-bezier(0.22,1,0.36,1), color 700ms' }

  const toggleBlock = (id: BlockId) =>
    setBlocks((cur) => (cur.includes(id) ? cur.filter((b) => b !== id) : [...cur, id]))

  const pill = (on: boolean) =>
    `min-h-11 border-[1.5px] px-[18px] py-2.5 text-[15px] transition-all duration-400 ${EASE} ${
      on
        ? 'border-[#7198A3] bg-[#7198A3] text-neutral-950'
        : 'border-white/40 bg-transparent text-white hover:border-white'
    }`

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <style>{PAGE_CSS}</style>
      <EdgeFade />

      {/* ============ 1. HERO — code types, preview reacts ============ */}
      <PageFadeIn delay={0}>
        <section className={`${GUTTER_L} ${GUTTER_R} pt-36 md:pt-44`}>
          <p className={KICKER}>Web development &amp; engineering · New</p>
          <h1 className="max-w-[1100px] text-4xl md:text-[68px] font-light leading-[1.03] tracking-[-0.03em]">
            We write the code.{' '}
            <strong className="font-extrabold">You get a site that works.</strong>
          </h1>
          <p className="mt-6 text-base md:text-[17px] text-white/60">
            Don&apos;t take our word for it — every section below is something you can try. ↓
          </p>
        </section>
      </PageFadeIn>

      <PageFadeIn delay={250} className={`${GUTTER_L} ${GUTTER_R} mt-12 md:mt-14`}>
        <section
          aria-label="Live demo: code and preview"
          className="grid shadow-[0_40px_90px_rgba(0,0,0,0.5)] md:grid-cols-2"
        >
          {/* Code editor */}
          <div
            aria-hidden="true"
            className="min-h-[300px] overflow-x-auto bg-[#2C3A40] px-6 py-7 font-mono text-[13px] leading-[1.9] text-[#D7E1D9] md:min-h-[440px] md:px-8 md:text-base"
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-[#D7E1D9]/60">page.tsx</p>
            <span className="wd-ln" style={{ animationDelay: '0.2s' }}>
              <span className="text-[#F1CF9D]">export default</span> function Home() {'{'}
            </span>
            <span className="wd-ln" style={{ animationDelay: '1s' }}>
              &nbsp;&nbsp;return (
            </span>
            <span className="wd-ln" style={{ animationDelay: '1.8s' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#7198A3]">Hero</span> color=
              <span className="text-[#F1CF9D]">&quot;{color.hex}&quot;</span>
            </span>
            <span className="wd-ln" style={{ animationDelay: '2.6s' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title=
              <span className="text-[#F1CF9D]">&quot;{headlineInCode}&quot;</span> /&gt;
            </span>
            <span className="wd-ln" style={{ animationDelay: '3.4s' }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#7198A3]">Services</span> accessible /&gt;
            </span>
            <span className="wd-ln" style={{ animationDelay: '4.2s' }}>
              &nbsp;&nbsp;)<span className="wd-cur" />
            </span>
          </div>

          {/* Live preview */}
          <div className="flex flex-col bg-white text-neutral-900">
            <div className="flex items-center gap-2 border-b border-[#d5dde0] bg-[#E9EEEF] px-4 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#984E4A]" />
              <span className="h-3 w-3 rounded-full bg-[#F1CF9D]" />
              <span className="h-3 w-3 rounded-full bg-[#7198A3]" />
              <span className="ml-3.5 text-[13px] text-neutral-600">Live preview</span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6" aria-live="polite">
              <div
                className="flex min-h-[150px] flex-col justify-center px-5 py-4"
                style={{ backgroundColor: color.hex, color: color.ink, ...colorFade }}
              >
                <span className="break-words text-2xl md:text-[30px] font-bold leading-[1.1]">{headline}</span>
                <span
                  aria-hidden="true"
                  className="mt-3 h-[30px] w-[120px] opacity-90"
                  style={{ backgroundColor: color.ink, ...colorFade }}
                />
              </div>
              <div aria-hidden="true" className="grid grid-cols-3 gap-2.5">
                <span className="h-16 bg-[#eef2f3]" />
                <span className="h-16 bg-[#eef2f3]" />
                <span className="h-16 bg-[#eef2f3]" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3.5 border-t border-neutral-200 px-6 py-4">
              <div role="group" aria-label="Preview color" className="flex flex-wrap items-center gap-2.5">
                <span className="w-[92px] text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">
                  Color
                </span>
                {COLORS.map((c, i) => (
                  <button
                    key={c.hex}
                    type="button"
                    aria-label={c.name}
                    aria-pressed={i === colorIdx}
                    onClick={() => setColorIdx(i)}
                    className={`h-11 w-11 border-[3px] transition-[border-color] duration-300 ${
                      i === colorIdx ? 'border-neutral-900' : 'border-white hover:border-neutral-300'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
              <label className="flex items-center gap-2.5">
                <span className="w-[92px] shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-600">
                  Headline
                </span>
                <input
                  type="text"
                  maxLength={40}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type your own headline…"
                  className="min-w-0 flex-1 border-0 border-b-2 border-neutral-300 bg-transparent py-2 text-base outline-none transition-colors duration-300 focus:border-neutral-900"
                />
              </label>
            </div>
          </div>
        </section>
      </PageFadeIn>

      {/* ============ 2. RESPONSIVE — resize the device ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-32 md:mt-44`}>
        <section className="flex flex-wrap items-center gap-x-[72px] gap-y-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <p className={KICKER}>Mobile-first</p>
            <h2 className={H2}>
              Looks right on <strong className="font-extrabold">every screen.</strong>
            </h2>
            <p className={`${SUB} mb-8`}>
              Most visits happen on a phone. Switch devices and watch the same page rearrange
              itself.
            </p>
            <div role="group" aria-label="Device" className="flex flex-wrap gap-2">
              {(Object.keys(DEVICES) as DeviceId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={id === device}
                  onClick={() => setDevice(id)}
                  className={pill(id === device)}
                >
                  {DEVICES[id].label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex h-[440px] min-w-0 flex-[1_1_560px] items-center justify-center border border-white/10 bg-[#0f1416] md:h-[520px]">
            <div
              aria-hidden="true"
              className="flex flex-col gap-2.5 overflow-hidden border-[10px] border-[#2C3A40] bg-white p-3.5"
              style={{
                width: dev.w,
                minWidth: 150,
                height: dev.h,
                maxHeight: '92%',
                borderRadius: dev.r,
                transition:
                  'width 800ms cubic-bezier(0.22,1,0.36,1), height 800ms cubic-bezier(0.22,1,0.36,1), border-radius 800ms',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="h-3 w-[70px] bg-[#2C3A40]" />
                <span className="h-3 w-6 bg-[#c9d3d6]" />
              </div>
              <div className="h-[110px] shrink-0" style={{ backgroundColor: color.hex, ...colorFade }} />
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${dev.cols}, minmax(0, 1fr))` }}>
                <span className="h-[70px] bg-[#F1CF9D]" />
                <span className="h-[70px] bg-[#D7E1D9]" />
                <span className="h-[70px] bg-[#984E4A]" />
              </div>
              <span className="h-2 w-[90%] shrink-0 bg-[#e3e8ea]" />
              <span className="h-2 w-[70%] shrink-0 bg-[#e3e8ea]" />
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ============ 3. BUILD A PAGE — pick blocks ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-32 md:mt-44`}>
        {/* Phone: text, blocks, preview, steps. Desktop: preview left, text + steps right */}
        <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-x-[72px]">
          <div className="min-w-0 lg:col-start-2 lg:row-start-1">
            <p className={KICKER}>Designed with you</p>
            <h2 className={H2}>
              No designer? <strong className="font-extrabold">You have one now.</strong>
            </h2>
            <p className={`${SUB} mb-8`}>
              Most teams don&apos;t have a designer on staff — so we design your site with you,
              then build it. Tap a few pieces to sketch your page. This is how every project
              starts.
            </p>
            <div role="group" aria-label="Page blocks" className="flex flex-wrap gap-2">
              {BLOCKS.map((b) => {
                const on = blocks.includes(b.id)
                return (
                  <button
                    key={b.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleBlock(b.id)}
                    className={`min-h-11 border-[1.5px] px-[18px] py-2.5 text-[15px] transition-all duration-400 ${EASE} ${
                      on
                        ? 'border-white bg-white text-neutral-950'
                        : 'border-white/40 bg-transparent text-white hover:border-white'
                    }`}
                  >
                    <span aria-hidden="true">{on ? '✓ ' : '+ '}</span>
                    {b.label}
                  </button>
                )
              })}
            </div>

          </div>
          <div
            aria-live="polite"
            className="flex min-h-[420px] min-w-0 flex-col self-center lg:col-start-1 lg:row-span-2 lg:row-start-1 gap-3 bg-white p-6 text-neutral-900 md:min-h-[480px]"
          >
            <div aria-hidden="true" className="flex items-center justify-between pb-1.5">
              <span className="h-3.5 w-[90px] bg-[#2C3A40]" />
              <span className="flex gap-2">
                <span className="h-[9px] w-10 bg-[#c9d3d6]" />
                <span className="h-[9px] w-10 bg-[#c9d3d6]" />
              </span>
            </div>

            {blocks.map((id) => {
              const b = BLOCKS.find((x) => x.id === id)!
              const bg = b.id === 'hero' ? color.hex : b.bg
              const ink = b.id === 'hero' ? color.ink : b.ink
              return (
                <div
                  key={b.id}
                  className="wd-pop flex items-center justify-between gap-3 px-[18px] py-3.5"
                  style={{ minHeight: b.h, backgroundColor: bg, color: ink, ...colorFade }}
                >
                  <span className="text-[15px] font-semibold">{b.label}</span>
                  <span className="text-[13px] opacity-75">{b.note}</span>
                </div>
              )
            })}

            {blocks.length === 0 && (
              <p className="m-auto text-base text-neutral-500">Pick a block to start your page →</p>
            )}
          </div>

          {/* How it works after the sketch */}
          <ol className="min-w-0 border-t border-white/20 lg:col-start-2">
            {DESIGN_STEPS.map((d, i) => (
              <li key={d.title} className="flex gap-4 border-b border-white/20 py-4">
                <span className="w-6 shrink-0 pt-1 text-sm font-semibold text-[#7198A3]">{num(i)}</span>
                <span>
                  <span className="block text-lg font-semibold">{d.title}</span>
                  <span className="text-[15px] leading-normal text-white/70">{d.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      </RevealSection>

      {/* ============ 4. ACCESSIBILITY — before / after ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-32 md:mt-44`}>
        <section className="flex flex-wrap items-center gap-x-[72px] gap-y-12">
          <div className="min-w-0 flex-[1_1_380px]">
            <p className={KICKER}>Accessible by default</p>
            <h2 className={H2}>
              Built for <strong className="font-extrabold">everyone.</strong>
            </h2>
            <p className={`${SUB} mb-8`}>
              Public agencies need sites everyone can use. Flip the switch to see the difference
              accessibility makes.
            </p>
            <button
              type="button"
              role="switch"
              aria-checked={a11y}
              onClick={() => setA11y((v) => !v)}
              className="inline-flex min-h-11 items-center gap-3.5 text-lg"
            >
              <span
                aria-hidden="true"
                className={`relative h-[34px] w-16 rounded-full transition-colors duration-400 ${
                  a11y ? 'bg-[#7198A3]' : 'bg-white/25'
                }`}
              >
                <span
                  className={`absolute top-1 h-[26px] w-[26px] rounded-full bg-white transition-[left] duration-400 ${EASE} ${
                    a11y ? 'left-[34px]' : 'left-1'
                  }`}
                />
              </span>
              Accessibility {a11y ? 'on' : 'off'}
            </button>
          </div>

          <div className="flex min-w-0 flex-[1_1_560px] flex-wrap gap-4">
            {/* Sample card — "inaccessible" vs "accessible" */}
            <div aria-hidden="true" className="min-h-[300px] flex-[1_1_300px] bg-white p-8">
              <p
                className="mb-3 font-bold transition-all duration-600"
                style={{ fontSize: a11y ? 30 : 18, color: a11y ? '#111' : '#bdbdbd' }}
              >
                Apply for a permit
              </p>
              <p
                className="mb-6 leading-normal transition-all duration-600"
                style={{ fontSize: a11y ? 19 : 12, color: a11y ? '#333' : '#c8c8c8' }}
              >
                Submit your application online and track its status anytime.
              </p>
              <span
                className="inline-block font-semibold transition-all duration-600"
                style={{
                  padding: a11y ? '16px 26px' : '6px 10px',
                  fontSize: a11y ? 19 : 12,
                  backgroundColor: a11y ? '#2C3A40' : '#e6e6e6',
                  color: a11y ? '#fff' : '#f4f4f4',
                  outline: a11y ? '3px solid #7198A3' : 'none',
                  outlineOffset: 3,
                }}
              >
                Start application
              </span>
            </div>

            <ul className="min-w-0 flex-[1_1_240px]" aria-label="Accessibility checklist">
              {A11Y_CHECKS.map((label) => (
                <li
                  key={label}
                  className={`flex items-center gap-3.5 border-b border-white/20 py-4 text-lg transition-colors duration-500 ${
                    a11y ? 'text-white' : 'text-white/45'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-[26px] w-[26px] items-center justify-center rounded-full text-[15px] text-neutral-950 transition-colors duration-500 ${
                      a11y ? 'bg-[#7198A3]' : 'bg-neutral-600'
                    }`}
                  >
                    {a11y ? '✓' : '✕'}
                  </span>
                  {label}
                  <span className="sr-only">{a11y ? '(passing)' : '(failing)'}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealSection>

      {/* ============ 5. PROCESS — click a step ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-32 md:mt-44`}>
        <section>
          <p className={KICKER}>How we work · click a step</p>
          <div aria-hidden="true" className="h-1 bg-white/15">
            <div
              className={`h-full bg-[#7198A3] transition-[width] duration-700 ${EASE}`}
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          <div role="tablist" aria-label="Process steps" className="grid grid-cols-2 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                id={`wd-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={i === step}
                aria-controls="wd-step-panel"
                onClick={() => setStep(i)}
                className={`py-5 pr-5 text-left transition-colors duration-400 ${
                  i === step ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                <span
                  className={`mb-1.5 block text-sm font-semibold ${
                    i <= step ? 'text-[#7198A3]' : 'text-white/40'
                  }`}
                >
                  {num(i)}
                </span>
                <span className={`block text-2xl md:text-[28px] ${i === step ? 'font-semibold' : 'font-light'}`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          <div
            key={step}
            id="wd-step-panel"
            role="tabpanel"
            aria-labelledby={`wd-tab-${step}`}
            className="wd-slide mt-3 flex flex-wrap items-center gap-x-[72px] gap-y-6 bg-white px-6 py-10 text-neutral-900 md:px-14 md:py-12"
          >
            <p
              aria-hidden="true"
              className="text-7xl md:text-[110px] font-extrabold leading-[0.9] tracking-[-0.05em] text-[#7198A3]"
            >
              {num(step)}
            </p>
            <p className="min-w-0 flex-[1_1_420px] text-xl md:text-[22px] leading-normal text-neutral-700">
              {STEPS[step].body}
            </p>
          </div>
        </section>
      </RevealSection>

      {/* ============ 6. WHAT WE BUILD ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-32 md:mt-44`}>
        <section>
          <p className={KICKER}>What we build</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className={`flex min-h-[220px] flex-col justify-between bg-white p-8 text-neutral-900 transition-[transform,box-shadow] duration-500 ${EASE} motion-safe:hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]`}
              >
                <span className="text-sm font-semibold text-[#456672]">{num(i)}</span>
                <span>
                  <span className="mb-2.5 block text-[28px] leading-[1.15]">{s.title}</span>
                  <span className="text-[15px] leading-normal text-neutral-600">{s.blurb}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </RevealSection>

      {/* ============ CTA — in the color the visitor picked ============ */}
      <RevealSection className={`${GUTTER_L} ${GUTTER_R} mt-28 mb-32 md:mt-36 md:mb-36`}>
        <section
          className="flex flex-wrap items-center justify-between gap-8 px-6 py-12 md:p-14"
          style={{ backgroundColor: color.hex, color: color.ink, ...colorFade }}
        >
          <h2 className="min-w-0 flex-[1_1_480px] text-4xl md:text-[44px] font-light leading-[1.08]">
            Liked building that? <strong className="font-extrabold">Let&apos;s build the real one.</strong>
          </h2>
          <Link
            href={CONTACT_HREF}
            className="shrink-0 bg-neutral-950 px-[34px] py-[18px] text-[17px] font-medium text-white transition-colors duration-300 hover:bg-neutral-800"
          >
            Start a project →
          </Link>
        </section>
      </RevealSection>
    </main>
  )
}