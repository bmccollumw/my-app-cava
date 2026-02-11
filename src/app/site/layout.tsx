import NavNotHome from '@/components/NavNotHome'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavNotHome />
      {children}
    </>
  )
}
