'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

const NAV: NavItem[] = [
  {
    label: 'partnerships',
    children: [
      {label: 'partnership overview', href: '/partnerships'},
      { label: 'airport advertising', href: '/airport' },
      { label: 'public sector', href: '/public-sector' },
    ],
  },
  { label: 'strategic communications', href: '/strategic-communications' },
  { label: 'diversity outreach', href: '/diversity-outreach' },
  { label: 'about', href: 'about' },
  { label: 'contact', href: '/contact' },
]

const CERTS = ['acdbe', 'mbe', 'w/dbe', 'hub']

export default function TopBarRightMenu() {
  const [open, setOpen] = useState(false)
  const [jvpOpen, setJvpOpen] = useState(false)

  /* Close on ESC */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Close submenu when menu closes */
  useEffect(() => {
    if (!open) setJvpOpen(false)
  }, [open])

  const Underline = () => (
    <span
      aria-hidden="true"
      className={cn(
        'mt-4 block h-[2px] w-0 bg-[#9E4A46]',
        'opacity-0',
        'transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'group-hover:w-28 group-hover:opacity-100',
        'group-focus-visible:w-28 group-focus-visible:opacity-100'
      )}
    />
  )

  return (
    <>
      {/* =======================================================
          FIXED TOP-RIGHT MENU BUTTON (viewport-anchored)
         ======================================================= */}
      <div className="fixed top-0 right-0 z-[70] p-6 sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label="Open menu"
          className={cn(
            'text-2xl md:text-3xl font-bold lowercase text-white',
            'transition-opacity duration-300',
            open ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
        >
          menu
        </button>
      </div>

      {/* =======================================================
          BACKDROP
         ======================================================= */}
      <div
        className={cn(
          'fixed inset-0 z-[80]',
          'transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* =======================================================
          FULL-SCREEN MENU OVERLAY
         ======================================================= */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-[100] bg-white',
          'transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        {/* CLOSE BUTTON — same viewport padding as menu button */}
        <div className="fixed top-0 right-0 z-[110] p-6 sm:p-8">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-2xl md:text-3xl font-bold lowercase text-[#9E4A46]"
          >
            close
          </button>
        </div>

        <div className="mx-auto h-full max-w-6xl overflow-y-auto px-6 py-10">
          <div className="grid min-h-full grid-cols-1 gap-10 md:grid-cols-[1fr_320px]">

            {/* ================= LEFT NAV ================= */}
            <nav className="pt-20 md:pt-24">
              <ul className="space-y-8 md:space-y-10">
                {NAV.map((item) => {
                  const hasChildren = !!item.children?.length

                  return (
                    <li key={item.label}>
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => setJvpOpen((v) => !v)}
                            aria-expanded={jvpOpen}
                            aria-controls="jvp-submenu"
                            className="group inline-block py-1 text-left focus:outline-none"
                          >
                            <span className="block text-4xl md:text-5xl font-semibold tracking-tight text-[#9E4A46] transition-opacity group-hover:opacity-70">
                              {item.label}
                            </span>
                            <Underline />
                          </button>

                          {/* SUBMENU */}
                          <div
                            id="jvp-submenu"
                            className={cn(
                              'mt-5 pl-3 md:pl-4 overflow-hidden',
                              'transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                              jvpOpen
                                ? 'max-h-56 opacity-100 translate-y-0'
                                : 'max-h-0 opacity-0 -translate-y-1'
                            )}
                          >
                            <div className="space-y-3">
                              {item.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="group block py-2 focus:outline-none"
                                >
                                  <span className="inline-block text-2xl md:text-3xl font-semibold tracking-tight text-[#9E4A46] transition-all duration-300 group-hover:opacity-70 group-hover:translate-x-1 group-hover:tracking-wide">
                                    {child.label}
                                  </span>

                                  <span
                                    aria-hidden="true"
                                    className={cn(
                                      'mt-2 block h-[1px] w-0 bg-[#9E4A46]/70',
                                      'opacity-0',
                                      'transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                                      'group-hover:w-24 group-hover:opacity-100'
                                    )}
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={() => setOpen(false)}
                          className="group inline-block focus:outline-none"
                        >
                          <span className="block text-4xl md:text-5xl font-semibold tracking-tight text-[#9E4A46] transition-opacity group-hover:opacity-70">
                            {item.label}
                          </span>
                          <Underline />
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* ================= RIGHT INFO ================= */}
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
