'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'

// true in the browser, false during server render (avoids hydration mismatch)
const useIsClient = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

/**
 * Phones only: soft black fades at the top and bottom of the screen,
 * so text dissolves line by line as it scrolls in and out.
 * Stays invisible until the visitor starts scrolling, so the first
 * screen loads clean.
 *
 * Rendered into <body> (portal) so it stays pinned to the screen even
 * though the page-transition wrapper uses a CSS transform.
 */
export default function EdgeFade() {
  const isClient = useIsClient()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      el.style.opacity = String(Math.min(1, window.scrollY / 120))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isClient])

  if (!isClient) return null

  return createPortal(
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-0 transition-opacity duration-300 md:hidden motion-reduce:hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[18vh] bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[14vh] bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>,
    document.body
  )
}