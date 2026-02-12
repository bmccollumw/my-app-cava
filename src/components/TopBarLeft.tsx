'use client'

import { usePathname } from 'next/navigation'

function titleFromPath(pathname: string) {
  const path = pathname.split('?')[0].split('#')[0]
  if (path === '/') return 'home'

  const seg = path.split('/').filter(Boolean).at(-1) ?? ''
  return seg.replace(/[-_]/g, ' ').toLowerCase()
}

export default function TopBarLeft() {
  const pathname = usePathname()
  const title = titleFromPath(pathname)

  return (
    <div className="fixed top-0 left-0 z-[60] px-6 pt-8 text-2xl md:text-3xl font-bold lowercase text-white">
      {title}
    </div>
  )
}
