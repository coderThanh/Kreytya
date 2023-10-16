import Header from '@/app/(components-server)/(header)/header'
import { HomeWeDo } from '@/app/(components-server)/(home-we-do)/we-do'
import HomeWelcome from '@/app/(components-server)/(home-welcome)/home-welc'
import Gap from '@/components/gap'

export default function Home() {
  return (
    <>
      <Header isTransparent={true} />
      <HomeWelcome />
      <HomeWeDo />
      <div id="current"></div>
      <Gap large={2000} />
    </>
  )
}
