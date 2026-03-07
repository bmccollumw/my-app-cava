'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type NavItem = { label: string; href: string }

function normalize(path: string) {
  const base = path.split('?')[0].split('#')[0]
  return base !== '/' ? base.replace(/\/+$/, '') : '/'
}

export default function TopBarLeft({ nav }: { nav: NavItem[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 10)
    return () => window.clearTimeout(t)
  }, [])

  const current = normalize(pathname)
  const match = nav.find((item) => normalize(item.href) === current)

  const fallback =
    current === '/'
      ? 'home'
      : (current.split('/').filter(Boolean).at(-1) ?? 'home')
          .replace(/[-_]/g, ' ')
          .toLowerCase()

  const title = (match?.label ?? fallback).toLowerCase()

  const handleBack = () => {
    if (window.history.length > 1) router.back()
    else router.push('/')
  }

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      className={[
        'fixed top-0 left-0 z-[60]',
        'px-4 sm:px-6 pt-7 sm:pt-8',
        'inline-flex items-center gap-2 sm:gap-3',
        'text-white font-bold lowercase',
        // Smaller on mobile to avoid overlapping center logo
        'text-base sm:text-xl md:text-3xl',
        'group select-none',
        'transition-all duration-500 ease-out',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
      ].join(' ')}
    >
      {/* Arrow */}
      <span
        aria-hidden="true"
        className="
          relative -top-[1px]
          text-white/85
          transition-transform duration-200 ease-out
          group-hover:-translate-x-0.5
        "
      >
        ←
      </span>

      {/* Title */}
      <span className="relative">
        {title}

        {/* luxury underline */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-0 -bottom-1 h-px w-full
            origin-left scale-x-0 opacity-0
            transition-all duration-300 ease-out
            group-hover:scale-x-100 group-hover:opacity-100
            bg-white/85
          "
        />
      </span>
    </button>
  )
}