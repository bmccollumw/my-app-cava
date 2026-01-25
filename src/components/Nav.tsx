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

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Menu/Close Button (top-right) */}
      <div className="fixed top-0 right-0 z-50 p-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="top-menu"
          className={cn(
            'inline-flex items-center gap-2 rounded-xl',
            // ✅ when menu is open, invert styling so it works on white sheet
            open
              ? 'border border-black/15 bg-black/5 text-black hover:bg-black/10'
              : 'border border-white/20 bg-white/10 text-white hover:bg-white/15',
            'backdrop-blur transition'
          )}
        >
          {/* ✅ label switches */}
          <span className="text-sm font-medium">{open ? 'Close' : 'Menu'}</span>

          {/* ✅ icon switches */}
          <span aria-hidden className="text-lg leading-none">
            {open ? '×' : '☰'}
          </span>
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
          // ✅ full width + half height on md+, full height on mobile
          'h-[100vh] md:h-[50vh]',
          // ✅ white background
          'bg-white text-black border-b border-black/10',
          'transform transition-transform duration-300 ease-out',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-6">
          {/* ✅ remove the separate Close button (menu button stays top-right) */}
          <div className="flex items-center justify-between">
            <div className="text-black/70 text-sm tracking-widest">NAVIGATION</div>
            <div className="text-xs text-black/40">Press ESC to close</div>
          </div>

          <nav className="mt-8 grid gap-3 md:grid-cols-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'group rounded-2xl border border-black/10 bg-black/[0.03] p-5 text-black',
                  'hover:bg-black/[0.06] transition'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-semibold">{item.label}</span>
                  <span className="text-black/40 group-hover:text-black transition">→</span>
                </div>
                <div className="mt-2 text-sm text-black/50">
                  Go to {item.label.toLowerCase()}
                </div>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 text-xs text-black/40">
            Click outside the menu to close.
          </div>
        </div>
      </div>
    </>
  )
}