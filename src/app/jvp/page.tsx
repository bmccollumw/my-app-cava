export default function JointVenturePartners() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jv-background.jpg')" }}
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Page content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Joint Venture Partners
        </h1>
      </section>

    </main>
  )
}
