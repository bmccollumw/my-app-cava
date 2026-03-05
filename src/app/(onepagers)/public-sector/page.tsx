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
              Cavazos supports public-sector programs that require disciplined
              execution, regulatory compliance, and strong coordination between
              government agencies, contractors, and the communities they serve.
            </p>

            <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
              <p>
                Our team provides strategic support across municipal, county, and
                infrastructure initiatives, helping public agencies and prime
                contractors successfully deliver complex programs.
              </p>

              <p>
                As part of this work, Cavazos partners with Tetra Tech as a
                strategic subcontractor supporting Harris County initiatives
                focused on disaster recovery, operational support, and program
                delivery. Through this partnership, Cavazos has provided
                staffing, analytical support, and outreach services for major
                initiatives including COVID response efforts, hurricane and storm
                recovery programs, and other county-led projects.
              </p>

              <p>
                In addition to these efforts, Cavazos has supported Harris County
                and City of Houston initiatives including Disparity Studies,
                public engagement campaigns, economic development outreach, and
                infrastructure-related communications. Through partnerships with
                Tetra Tech and other prime contractors, Cavazos delivers scalable
                staffing solutions, data-driven program support, and strategic
                communications that help public agencies serve their communities
                effectively.
              </p>
            </PageFadeIn>

          </div>
        </section>
      </PageFadeIn>

    </main>
  )
}