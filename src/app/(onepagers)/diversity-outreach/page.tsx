import PageFadeIn from '@/components/PageFadeIn'

const BG_IMAGE = '/diversity-background.jpg'

export default function DiversityOutreachPage() {
  return (
    <main
      className="relative min-h-screen w-full text-white bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <PageFadeIn delay={0}>
        <section className="relative pt-40 pb-32">
          <div className="ml-6 md:ml-12 lg:ml-16">

            <p className="max-w-4xl text-3xl md:text-5xl font-light leading-tight text-white/95">
              Cavazos specializes in building authentic connections between
              organizations and the communities they serve—through localized,
              grassroots engagement and culturally informed communications that
              ensure programs reach the audiences they are intended to serve.
            </p>

            <PageFadeIn delay={300} className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-white/80">
              <p>
                Our diversity outreach practice is rooted in localization,
                grassroots engagement, and culturally informed communications
                that ensure programs reach the audiences they are intended to
                serve. We work closely with public agencies, infrastructure
                initiatives, and corporate partners to design outreach
                strategies that are inclusive, accessible, and results-driven.
              </p>

              <p>
                Cavazos has supported disparity studies, census outreach
                efforts, economic development initiatives, infrastructure
                planning, and disaster recovery programs that require thoughtful
                engagement across Hispanic/Latinx, African American, Asian, and
                other diverse communities.
              </p>

              <p>
                Our team understands that effective outreach is not simply
                translation. It requires trusted relationships, in-language
                messaging, and consistent presence within communities. We
                leverage established networks, community leaders, media
                channels, and stakeholder partnerships to ensure information is
                delivered clearly and credibly.
              </p>

              <p>
                From public affairs and community meetings to media engagement
                and stakeholder communications, Cavazos designs outreach
                programs that align with contract compliance requirements while
                strengthening long-term community trust. Our approach balances
                strategy with on-the-ground execution, helping organizations
                meet participation goals, expand engagement, and create
                measurable impact across diverse populations.
              </p>
            </PageFadeIn>

          </div>
        </section>
      </PageFadeIn>

    </main>
  )
}