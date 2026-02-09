import type { ReactNode } from 'react'
import Secondarynav from '@/components/Secondarynav'

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Secondarynav />
      {children}
    </div>
  )
}
