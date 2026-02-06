'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type NavItem = { label: string; href: string }

const NAV: NavItem[] = [
  { label: 'joint venture partnerships', href: '/projects' },
  { label: 'marketing solutions', href: '/contact' },
  { label: 'diversity outreach', href: '/about' },
  { label: 'staffing', href: '/projects' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

const CERTS = ['certification one', 'certification two', 'certification three', 'certification four']

export default function Nav() {
  const [open, setOpen] = useState(false)

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
      {/* Menu / Close button */}
      <div className="fixed top-0 right-0 z-[60] p-6">
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

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* FULL-SCREEN menu */}
      <div
        id="top-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-50 bg-white',
          'transform transition-transform duration-300 ease-out',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto h-full max-w-6xl px-6 py-10">
          {/* Two-column layout */}
          <div className="grid h-full grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">
            {/* LEFT: nav */}
            <nav className="pt-20 md:pt-24">
              <ul className="space-y-6 md:space-y-7">
                {NAV.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'group inline-block',
                        'focus:outline-none'
                      )}
                    >
                      <span
                        className={cn(
                          'block font-semibold tracking-tight',
                          'text-4xl md:text-5xl',
                          'text-[#9E4A46]',
                          'transition-opacity group-hover:opacity-70'
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: logo + certs + offices */}
            <aside className="relative pt-6 md:pt-24">
              {/* Logo icon */}
              <div className="mb-10 flex justify-start md:justify-end">
                {/* Replace with your actual logo icon path */}
                <img
                  src="/icon.png"
                  alt="Logo"
                  className="mb-16 h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40"
                />
              </div>

              {/* Bottom-right block */}
              <div className="md:absolute md:bottom-10 md:right-0">
                <div className="text-right">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
                    certifications
                  </h3>

                  <ul className="space-y-2">
                    {CERTS.map((c) => (
                      <li key={c} className="text-base md:text-lg font-medium text-[#9E4A46]">
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-black/50">
                    offices
                  </div>
                  <div className="mt-2 text-base md:text-lg font-semibold text-[#9E4A46]">
                    NYC &amp; HOUSTON
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
