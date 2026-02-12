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
        // Anchor to viewport top center
        'fixed inset-x-0 top-0 z-[65]',

        // Layout
        'flex justify-center',

        // Padding from top (responsive, consistent)
        'pt-6 sm:pt-8',

        // Allow clicks only on the logo itself
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
            // Clean responsive sizing
            'h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16',
            className
          )}
        />
      </Link>
    </div>
  )
}
