import TopBarRightMenu from "@/components/TopBarRight"
import TopBarCenterLogo from "@/components/TopBarCenter"
import TopBarLeft from "@/components/TopBarLeft"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBarRightMenu />
      <TopBarCenterLogo />
      <TopBarLeft />
      {children}
    </>
  )
}
