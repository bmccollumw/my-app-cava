import Link from 'next/link'
import { cn } from '@/lib/cn'

export default function TopBarCenterLogo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-[65]',
        'flex justify-center',
        'pt-6 sm:pt-8',
        'pointer-events-none'
      )}
    >
      <Link
        href="/"
        aria-label="Go to home"
        className="pointer-events-auto inline-flex"
      >
        <img
          src="/icon.png"
          alt="Cavazos logo"
          className={cn(
            'h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16',
            'transition-transform duration-700 ease-in-out',
            'hover:rotate-180',
            className
          )}
        />
      </Link>
    </div>
  )
}