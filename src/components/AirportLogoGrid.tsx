import Image from 'next/image'

const AIRPORT_LOGOS = [
  { src: '/client-1.png',      alt: 'Tetra',                        filter: false },
  { src: '/client-1.gif',      alt: 'University of Houston',        filter: false },
  { src: '/api.png',           alt: 'American Petroleum Institute', filter: true  },
  { src: '/britishint.png',    alt: 'British International',        filter: false },
  { src: '/client-7.png',      alt: 'Harris County Texas',          filter: false },
  { src: '/har.png',           alt: 'HAR.com',                      filter: false },
  { src: '/utmb.png',          alt: 'UTMB',                         filter: false },
  { src: '/villageschool.png', alt: 'The Village School',           filter: false },
  { src: '/sgrr.webp',         alt: "Scott Gertner's Rhythm Room",  filter: false },
  { src: '/heb.png',           alt: 'H-E-B',                        filter: false },
  { src: '/mfah.avif',         alt: 'Museum of Fine Arts Houston',  filter: false },
]

const LOGOS_DOUBLED = [...AIRPORT_LOGOS, ...AIRPORT_LOGOS]

export default function AirportLogoGrid() {
  return (
    <>
      <style>{`
        .logo-tile {
          width: 100px;
          height: 75px;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .logo-tile {
            width: calc(100vw / 8);
            height: calc(100vw / 8 * 0.75);
          }
        }
      `}</style>

      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />

        <div className="flex animate-carousel">
          {LOGOS_DOUBLED.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="logo-tile flex items-center justify-center bg-white/8 border-r border-white/10 p-5"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                style={logo.filter ? {
                  filter: 'brightness(0) invert(1)',
                  WebkitFilter: 'brightness(0) invert(1)',
                } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}