import Nav from '@/components/Nav'

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#9E4A46]">
      {/* Main nav (fixed in your Nav component) */}
      <Nav />

      {/* Masked background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          WebkitMaskImage: 'url(/logo-mask-1.png)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          WebkitMaskSize: 'min(90vw, 1100px)',

          maskImage: 'url(/logo-mask-1.png)',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'min(90vw, 1100px)',
        }}
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>

      {/* Optional: subtle dark overlay to improve contrast of Nav text */}
      <div className="absolute inset-0 bg-black/10" />
    </main>
  )
}
