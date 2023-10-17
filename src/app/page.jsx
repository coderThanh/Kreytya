import Header from '@/app/(components-server)/(header)/header'
import { HomeProject } from '@/app/(components-server)/(home-project)/home-project'
import { HomeTextRunning } from '@/app/(components-server)/(home-running)/home-running'
import { HomeWeDo } from '@/app/(components-server)/(home-we-do)/we-do'
import HomeWelcome from '@/app/(components-server)/(home-welcome)/home-welc'
import { HomeWhyUs } from '@/app/(components-server)/(home-why-us)/home-why-us'
import Gap from '@/components/gap'

export default function Home() {
  return (
    <>
      <Header isTransparent={true} />
      <HomeWelcome />
      <HomeWeDo />
      <HomeWhyUs />
      <div className="mb-120" />
      <HomeTextRunning />
      <HomeTextRunning isRunToLeft={false} />
      <div className="mb-80" />
      <HomeProject />
      <div id="current"></div>
      <Gap large={2000} />
    </>
  )
}
