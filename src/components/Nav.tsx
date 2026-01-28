'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type NavItem = { label: string; href: string }

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

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
      {/* Menu / Close  */}
      <div className="fixed top-0 right-0 z-[60] p-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="top-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cn(
            'text-2xl md:text-3xl font-bold lowercase transition-colors',
            open ? 'text-blue-600' : 'text-white',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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

      {/* Top sheet */}
      <div
        id="top-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed left-0 top-0 z-50 w-full',
          'h-[100vh] md:h-[50vh]',
          'bg-white',
          'transform transition-transform duration-300 ease-out',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-10">
          <nav className="mt-20 grid gap-6 md:grid-cols-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'group p-6 md:p-7',
                  'transition hover:bg-black/[0.03]',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                )}
              >
                <span className="block text-3xl md:text-4xl font-bold text-blue-600">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}