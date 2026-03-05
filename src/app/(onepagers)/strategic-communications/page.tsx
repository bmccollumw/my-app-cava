import PageFadeIn from '@/components/PageFadeIn'
import type { FC } from 'react'

const BG_IMAGE = '/strategic-marketing.jpg'

const CLIENT_LOGOS = [
  { src: '/client-1.gif',  alt: 'Client A', filter: false },
  { src: '/client-2.gif',  alt: 'Client B', filter: true  },
  { src: '/client-1.png',  alt: 'Client 1', filter: false },
  { src: '/client-2.png',  alt: 'Client 2', filter: true  },
  { src: '/client-3.png',  alt: 'Client 3', filter: false },
  { src: '/client-4.png',  alt: 'Client 4', filter: true  },
  { src: '/client-5.png',  alt: 'Client 5', filter: true  },
  { src: '/client-6.png',  alt: 'Client 6', filter: true  },
  { src: '/client-7.png',  alt: 'Client 7', filter: false },
  { src: '/client-8.png',  alt: 'Client 8', filter: true  },
  { src: '/client-9.png',  alt: 'Client 9', filter: true  },
  { src: '/client-10.png', alt: 'Client 10', filter: false },
]

const LOGOS_DOUBLED = [...CLIENT_LOGOS, ...CLIENT_LOGOS]

const StrategicCommunicationsPage: FC = () => {
  return (
    <main
      className="relative min-h-screen w-full text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <PageFadeIn delay={0}>
        <section className="relative pt-40 pb-32">
          <div className="ml-6 md:ml-12 lg:ml-16 lg:mr-16">
            <div className="max-w-4xl">
              <p className="text-3xl md:text-5xl font-light leading-tight text-white/95">
                For more than 22 years, Cavazos has delivered strategic public relations,
                marketing, and public affairs counsel that helps organizations build
                meaningful relationships and measurable impact.
              </p>

              <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
                <p>
                  Our communications practice spans corporate positioning, brand development,
                  media relations, crisis and issues management, stakeholder communications,
                  and integrated marketing strategy. We help clients clarify their narrative,
                  strengthen their reputation, and align messaging across channels to support
                  business and organizational objectives. From large-scale public initiatives
                  to corporate campaigns, our team develops cohesive programs that connect
                  strategy, communications, and execution.
                </p>
                <p>
                  Cavazos has supported municipal agencies, regional planning efforts, airport
                  concessions, infrastructure programs, and Fortune 500 companies with strategic
                  communications and public engagement initiatives. Our approach blends
                  data-informed strategy with real-world implementation experience, ensuring
                  that communications efforts drive measurable outcomes. Whether advising
                  leadership, launching new initiatives, or managing complex issues, Cavazos
                  delivers clarity, consistency, and results.
                </p>
              </PageFadeIn>
            </div>
          </div>

          <PageFadeIn delay={500} className="mt-16">
            <p className="text-xs uppercase tracking-[0.25em] text-white/35 mb-6 ml-6 md:ml-12 lg:ml-16">
              Trusted by
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
              <div className="flex animate-carousel">
                {LOGOS_DOUBLED.map((logo, i) => (
                  <div
                    key={`${logo.src}-${i}`}
                    className="flex-shrink-0 flex items-center justify-center bg-white/8 border-r border-white/10 p-5"
                    style={{ width: 'calc(100vw / 8)', height: 'calc(100vw / 8 * 0.75)' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200 ${
                        logo.filter ? 'filter brightness-0 invert' : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </PageFadeIn>

        </section>
      </PageFadeIn>

    </main>
  )
}

export default StrategicCommunicationsPage