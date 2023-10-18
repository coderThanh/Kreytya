import { Footer } from '@/app/(components-server)/(foooter)/footer'
import Header from '@/app/(components-server)/(header)/header'
import { HomeContact } from '@/app/(components-server)/(home-contact)/home-contact'
import { HomeProject } from '@/app/(components-server)/(home-project)/home-project'
import { HomeTextRunning } from '@/app/(components-server)/(home-running)/home-running'
import { HomeWeDo } from '@/app/(components-server)/(home-we-do)/we-do'
import HomeWelcome from '@/app/(components-server)/(home-welcome)/home-welc'
import { HomeWhyUs } from '@/app/(components-server)/(home-why-us)/home-why-us'

export default function Home() {
  return (
    <>
      <Header isTransparent={true} />
      <HomeWelcome />
      <HomeWeDo />
      <HomeWhyUs />
      <HomeTextRunning />
      <HomeProject />
      <HomeContact />
      <Footer />
    </>
  )
}
