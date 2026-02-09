'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'

type NavItem = { label: string; href: string }

const NAV: NavItem[] = [
  { label: 'joint venture partnerships', href: '/jvp' },
  { label: 'marketing solutions', href: '/marketing' },
  { label: 'diversity outreach', href: '/diversity' },
  { label: 'staffing', href: '/staffing' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

const CERTS = ['acdbe', 'mbe', 'w/dbe', 'hub']

function titleFromPath(pathname: string) {
  // normalize
  const path = pathname.split('?')[0].split('#')[0]
  if (path === '/') return 'home'

  // take last segment
  const seg = path.split('/').filter(Boolean).at(-1) ?? ''
  // simple prettifier: "joint-venture" -> "joint venture"
  return seg.replace(/[-_]/g, ' ')
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const pageTitle = useMemo(() => titleFromPath(pathname), [pathname])

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* TOP BAR (always visible) */}
      <div className="fixed top-0 left-0 right-0 z-[70] px-6 py-5">
        <div className="relative flex items-center justify-between">
          {/* Left: current page title */}
          <div className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            {pageTitle}
          </div>

          {/* Center: logo icon (clickable) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              aria-label="Go to home"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center"
            >
              <img
                src="/icon.png"
                alt="Cavazos logo"
                className="h-10 w-10 md:h-12 md:w-12"
              />
            </Link>
          </div>

          {/* Right: menu/close button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="top-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={cn(
              'text-2xl md:text-3xl font-bold lowercase transition-colors',
              open ? 'text-[#9E4A46]' : 'text-white',
              'focus:outline-none'
            )}
          >
            {open ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* FULL-SCREEN menu sheet */}
      <div
        id="top-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-50 bg-white',
          'transition-all duration-300 ease-out',
          open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="mx-auto h-full max-w-6xl overflow-y-auto px-6 py-10">
          <div className="grid min-h-full grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">
            {/* LEFT: nav */}
            <nav className="pt-20 md:pt-24">
              <ul className="space-y-6 md:space-y-8">
                {NAV.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group inline-block focus:outline-none"
                    >
                      <span className="block text-4xl md:text-5xl font-semibold tracking-tight text-[#9E4A46] transition-opacity group-hover:opacity-70">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: logo + certs + offices */}
            <aside className="relative pb-10 md:pb-0">
              <div className="flex justify-start md:justify-end pt-2 md:pt-24">
                <img
                  src="/icon.png"
                  alt="Cavazos logo icon"
                  className="h-28 w-28 md:h-36 md:w-36 lg:h-44 lg:w-44"
                />
              </div>

              <div className="mt-10 md:absolute md:bottom-10 md:right-0 md:text-right">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                  certifications
                </h3>

                <ul className="space-y-2">
                  {CERTS.map((c) => (
                    <li key={c} className="text-sm md:text-base font-medium text-[#9E4A46]">
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                  offices
                </div>
                <div className="mt-2 text-sm md:text-base font-semibold text-[#9E4A46]">
                  NYC &amp; HOUSTON
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
