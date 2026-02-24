import TopBarRightMenu from "@/components/TopBarRight"
import TopBarCenterLogo from "@/components/TopBarCenter"
import TopBarLeft from "@/components/TopBarLeft"
import TopSectionTitle from "@/components/TopSectionTitle"

const NAV = [
  { label: 'joint venture partnerships', href: '/projects' },
  { label: 'marketing solutions', href: '/marketing' },
  { label: 'diversity outreach', href: '/diversity' },
  { label: 'staffing', href: '/staffing' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBarRightMenu />
      <TopBarCenterLogo />
      <TopBarLeft nav={NAV} />
      {children}
    </>
  )
}
