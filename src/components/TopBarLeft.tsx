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
        'inline-flex items-start gap-2 sm:gap-3',
        'text-white font-bold lowercase',
        'text-base sm:text-xl md:text-3xl',
        'max-w-[33vw] sm:max-w-[40vw] md:max-w-none',
        'group select-none overflow-hidden',
        'transition-all duration-500 ease-out',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
      ].join(' ')}
    >
      {/* Arrow — never truncated */}
      <span
        aria-hidden="true"
        className="
          relative top-[2px] flex-shrink-0
          text-white/85
          transition-transform duration-200 ease-out
          group-hover:-translate-x-0.5
        "
      >
        ←
      </span>

      {/* Title */}
      <span className="relative inline-block pb-3 overflow-visible flex-shrink min-w-0">
        <span className="block truncate">{title}</span>
        <span
          aria-hidden="true"
          className="
            absolute bottom-0 left-0 h-[2px] w-0 bg-white
            opacity-0
            transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:w-full group-hover:opacity-100
          "
        />
      </span>
    </button>
  )
}