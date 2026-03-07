import PageFadeIn from '@/components/PageFadeIn'
import TopBarRightMenu from '@/components/TopBarRight'

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#9E4A46]">

      {/* Video fades in after a beat — bg-[#9E4A46] shows instantly underneath */}
      <PageFadeIn delay={200} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{
            WebkitMaskImage: 'url(/cavazos-clean.png)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            WebkitMaskSize: 'min(100vw, 1250px)',
            maskImage: 'url(/logo-mask-1.png)',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: 'min(100vw, 1250px)',
          }}
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </PageFadeIn>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Nav */}
      <div className="relative z-20">
        <TopBarRightMenu />
      </div>

    </main>
  )
}