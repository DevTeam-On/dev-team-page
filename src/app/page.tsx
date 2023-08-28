import BaseBoard from '@/components/Baseboard'
import Benefits from '@/components/Benefits'
import { ServicesBrands } from '@/components/ServicesBrands'
import InitialContentPage from '@/components/InitalContentPage'
import OurClients from '@/components/OurClients'
import OurServices from '@/components/OurServices'
import OurTeam from '@/components/OurTeam'

export default function Home() {
  return (
    <>
      <InitialContentPage />
      <Benefits />
      <ServicesBrands />
      <OurServices />
      <OurTeam />
      <OurClients />
      <BaseBoard />
    </>
  )
}
