'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export default function PageFadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const [hydrated, setHydrated] = useState(false)
  const [ready, setReady] = useState(false)

  // 1) Wait for hydration
  useEffect(() => {
    setHydrated(true)
  }, [])

  // 2) Then start the delayed reveal
  useEffect(() => {
    if (!hydrated) return
    const t = setTimeout(() => setReady(true), delay)
    return () => clearTimeout(t)
  }, [delay, hydrated])

  return (
    <div
      className={cn(
        // Prevent any pre-hydration flash
        !hydrated ? 'opacity-0' : 'transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]',
        hydrated && (ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'),
        className
      )}
    >
      {children}
    </div>
  )
}