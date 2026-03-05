import PageFadeIn from '@/components/PageFadeIn'

const BG_IMAGE = '/public-backdrop.jpg'

export default function StaffingOverviewPage() {
  return (
    <main
      className="relative min-h-screen w-full text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <PageFadeIn delay={0}>
        <section className="relative pt-40 pb-32">
          <div className="ml-6 md:ml-12 lg:ml-16">

            <p className="max-w-4xl text-3xl md:text-5xl font-light leading-tight text-white/95">
              Cavazos partners with Tetra Tech as a strategic subcontractor
              supporting Harris County initiatives that strengthen community
              resilience, equity, and operational delivery.
            </p>

            <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
              <p>
                Through this partnership, Cavazos provides talent acquisition,
                analytical support, outreach, and program management services
                for large-scale public sector projects. Our role ensures that
                government initiatives are executed efficiently, compliantly,
                and with meaningful engagement across diverse communities.
              </p>

              <p>
                Cavazos has supported Harris County and City of Houston
                initiatives including Disparity Studies, public engagement
                campaigns, economic development outreach, and
                infrastructure-related communications. Our expertise in
                multicultural outreach and government relations ensures that
                programs reach underserved communities while maintaining
                regulatory compliance and measurable impact.
              </p>

              <p>
                Through our partnership with Tetra Tech and other prime
                contractors, Cavazos delivers scalable staffing solutions,
                data-driven program support, and strategic communications that
                help public agencies serve their communities effectively. We
                remain committed to pursuing new public-sector opportunities
                that require trusted local leadership, certified participation,
                and disciplined execution.
              </p>
            </PageFadeIn>

          </div>
        </section>
      </PageFadeIn>

    </main>
  )
}