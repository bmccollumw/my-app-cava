import { twMerge } from 'tailwind-merge'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={twMerge(
        'w-full px-6 py-4',
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl justify-between text-l tracking-widest text-white/60">
        <span>acdbe</span>
        <span>mbe</span>
        <span>w/dbe</span>
        <span>hub</span>
      </div>
    </footer>
  )
}
