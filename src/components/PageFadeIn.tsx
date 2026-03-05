'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

export default function PageFadeIn({
  children,
  delay = 0,
  className,
  waitForImage,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  waitForImage?: string
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (!waitForImage) {
      t = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(t)
    }

    const img = new Image()

    const show = () => {
      t = setTimeout(() => setVisible(true), delay)
    }

    // naturalWidth > 0 means already cached and decoded
    img.onload = show
    img.onerror = show // fade in anyway on error
    img.src = waitForImage

    // Check after setting src — if it was cached, naturalWidth is already set
    if (img.complete && img.naturalWidth > 0) {
      show()
    }

    return () => clearTimeout(t)
  }, [delay, waitForImage])

  return (
    <div
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        className
      )}
    >
      {children}
    </div>
  )
}