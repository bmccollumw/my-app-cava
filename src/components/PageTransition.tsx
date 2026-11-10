'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

// Must match the .animate-page-out duration in globals.css
const EXIT_MS = 900

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [leavingFrom, setLeavingFrom] = useState<string | null>(null)
  const leavingRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Whenever the page changes (link, back button, browser back/forward),
  // clear the fade-out state so the new page always fades IN.
  useEffect(() => {
    leavingRef.current = false
    setLeavingFrom(null)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Let new-tab clicks, right-clicks, etc. behave normally
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const a = (e.target as HTMLElement).closest('a')
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return

      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin) return     // external link
      if (url.pathname === window.location.pathname) return // same page / #anchor
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      e.preventDefault()
      if (leavingRef.current) return
      leavingRef.current = true

      setLeavingFrom(window.location.pathname)
      timerRef.current = setTimeout(() => {
        router.push(url.pathname + url.search + url.hash)
      }, EXIT_MS)
    }

    // Capture phase so this runs before Next's <Link> handles the click
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  const leaving = leavingFrom === pathname

  return (
    <div key={pathname} className={leaving ? 'animate-page-out' : 'animate-page-in'}>
      {children}
    </div>
  )
}