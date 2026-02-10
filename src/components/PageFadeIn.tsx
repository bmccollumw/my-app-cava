'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export default function PageFadeIn({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={cn(
        'transition-all duration-700 ease-out',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      )}
    >
      {children}
    </div>
  )
}
