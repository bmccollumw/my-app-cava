'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

const NAV: NavItem[] = [
  {
    label: 'joint venture partnerships',
    children: [
      { label: 'airport advertising', href: '/airport-advertising' },
      { label: 'staffing', href: '/staffing' },
    ],
  },
  { label: 'marketing solutions', href: '/marketing' },
  { label: 'diversity outreach', href: '/diversity' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

const CERTS = ['acdbe', 'mbe', 'w/dbe', 'hub']

function titleFromPath(pathname: string) {
  const path = pathname.split('?')[0].split('#')[0]
  if (path === '/') return 'home'
  const seg = path.split('/').filter(Boolean).at(-1) ?? ''
  return seg.replace(/[-_]/g, ' ').toLowerCase()
}

export default function NavNotHome() {
  const [open, setOpen] = useState(false)
  const [jvpOpen, setJvpOpen] = useState(false)
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

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close submenu whenever main menu closes
  useEffect(() => {
    if (!open) setJvpOpen(false)
  }, [open])

  return (
    <>
      {/* TOP BAR (sits below the menu overlay when open) */}
      <header className="fixed top-0 left-0 right-0 z-[60] px-6 pt-12 pb-4">
        <div className="relative flex items-center justify-between text-white">
          {/* Left: dynamic lowercase page title */}
          <div className="text-2xl md:text-3xl font-bold lowercase">{pageTitle}</div>

          {/* Center: logo centered, won’t block clicks */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" aria-label="Go to home" className="pointer-events-auto inline-flex">
              <img
                src="/icon.png"
                alt="Cavazos logo"
                className="h-14 w-14 md:h-18 md:w-18 lg:h-26 lg:w-26"
              />
            </Link>
          </div>

          {/* Right: menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="secondary-menu"
            aria-label="Open menu"
            className={cn(
              'text-2xl md:text-3xl font-bold lowercase transition-opacity',
              open ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
          >
            menu
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[80] transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* FULL-SCREEN MENU */}
      <div
        id="secondary-menu"
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
        {/* Close button INSIDE the menu overlay */}
        <div className="fixed top-0 right-0 z-[110] p-6">
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

            {/* LEFT NAV LINKS */}
            <nav className="pt-20 md:pt-24">
              <ul className="space-y-8 md:space-y-10">
                {NAV.map((item) => {
                  const hasChildren = !!item.children?.length

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
                    <li key={item.label}>
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => setJvpOpen((v) => !v)}
                            aria-expanded={jvpOpen}
                            aria-controls="secondary-jvp-submenu"
                            className={cn('group inline-block text-left focus:outline-none', 'py-1')}
                          >
                            <span className="block text-4xl md:text-5xl font-semibold tracking-tight text-[#9E4A46] transition-opacity group-hover:opacity-70">
                              {item.label}
                            </span>
                            <Underline />
                          </button>

                          {/* Animated submenu */}
                          <div
                            id="secondary-jvp-submenu"
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
                                  className={cn('group block focus:outline-none', 'py-2')}
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
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* RIGHT INFO COLUMN */}
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
