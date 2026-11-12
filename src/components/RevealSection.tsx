'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

/* ---------- Tuning ---------- */

// How much of the screen (at the top and bottom) a section takes to fully
// fade in or out. Bigger = slower, more gradual fade.
const FADE_ZONE_PHONE = 0.45 // 45% of the screen height
const FADE_ZONE_DESKTOP = 0.35

// How quickly the fade catches up to your scroll (0–1).
// Smaller = slower, softer, more "floaty". 1 = follows instantly.
const SMOOTHING = 0.06

// How far a section drifts up as it fades in (px)
const DRIFT = 32

const clamp = (n: number) => Math.min(1, Math.max(0, n))

/**
 * Scroll fade — on all screen sizes.
 * A section gradually fades in as it rises from the bottom of the screen and
 * gradually fades out as it leaves through the top. The fade eases toward
 * your scroll position, so it feels slow and soft rather than switching.
 * Reduced motion: always visible, no animation.
 */
export default function RevealSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isPhone = window.matchMedia('(max-width: 767px)')
    if (reduceMotion.matches) return

    let frame = 0
    let opacity = -1 // -1 = not measured yet
    let drift = 0
    let targetOpacity = 0
    let targetDrift = DRIFT

    const measure = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const zone = vh * (isPhone.matches ? FADE_ZONE_PHONE : FADE_ZONE_DESKTOP)

      const enter = clamp((vh - r.top) / zone) // rising in from the bottom
      const exit = clamp(r.bottom / zone) // leaving through the top

      targetOpacity = Math.min(enter, exit)
      targetDrift = (1 - enter) * DRIFT
    }

    const paint = () => {
      el.style.opacity = opacity.toFixed(3)
      el.style.transform = `translateY(${drift.toFixed(1)}px)`
    }

    const tick = () => {
      opacity += (targetOpacity - opacity) * SMOOTHING
      drift += (targetDrift - drift) * SMOOTHING
      paint()

      const settled =
        Math.abs(targetOpacity - opacity) < 0.002 &&
        Math.abs(targetDrift - drift) < 0.1

      if (settled) {
        opacity = targetOpacity
        drift = targetDrift
        paint()
        frame = 0
      } else {
        frame = requestAnimationFrame(tick)
      }
    }

    const onScroll = () => {
      measure()
      if (!frame) frame = requestAnimationFrame(tick)
    }

    // First paint: start invisible, then ease in to wherever it should be
    measure()
    opacity = 0
    drift = DRIFT
    paint()
    frame = requestAnimationFrame(tick)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      el.style.opacity = ''
      el.style.transform = ''
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 will-change-[opacity,transform]',
        // reduced motion: always visible, no animation
        'motion-reduce:opacity-100',
        className
      )}
    >
      {children}
    </div>
  )
}