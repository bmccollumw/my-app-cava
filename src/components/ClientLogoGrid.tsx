'use client'

import Image from 'next/image'

type Logo = {
  src: string
  alt: string
  name: string
  description?: string
}

export default function ClientLogoGrid({
  logos,
  cols = 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4',
}: {
  logos: Logo[]
  cols?: string
}) {
  return (
    <div className={`grid ${cols} gap-6 md:gap-8`}>
      {logos.map((logo) => (
        <div key={logo.src} className="group relative">
          <div
            className="
              aspect-[4/3]
              rounded-xl
              border border-white/10
              bg-white/5
              backdrop-blur-sm
              flex items-center justify-center
              overflow-hidden
            "
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={320}
              height={240}
              className="
                h-full w-full object-contain
                p-6
                opacity-80
                grayscale
                transition duration-300
                group-hover:opacity-100
                group-hover:grayscale-0
              "
            />
          </div>

          {/* Tooltip */}
          <div
            className="
              pointer-events-none
              absolute left-0 top-full mt-3
              w-[min(320px,90vw)]
              rounded-xl
              border border-white/10
              bg-black/75
              backdrop-blur-md
              px-4 py-3
              text-left
              opacity-0 translate-y-1
              transition duration-200 ease-out
              group-hover:opacity-100 group-hover:translate-y-0
            "
            role="tooltip"
            aria-hidden="true"
          >
            <div className="text-white/90 text-sm font-semibold lowercase">
              {logo.name}
            </div>
            {logo.description ? (
              <div className="mt-1 text-white/70 text-sm leading-relaxed">
                {logo.description}
              </div>
            ) : (
              <div className="mt-1 text-white/50 text-sm leading-relaxed">
                {/* optional fallback */}
                past client
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}