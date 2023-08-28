import Image from 'next/image'
import RenderGear from '@/assets/images/render_gear.png'
import ContainerItems from './ContainerItems'
import Container from '../Container'

export default function OurServices() {
  return (
    <div
      id="OurServices"
      className="mt-48 flex w-full select-none justify-evenly border-y-2 border-yellow-800 bg-blue-400 py-16"
    >
      <Container>
        <div className="flex w-full flex-col-reverse items-center justify-evenly gap-12 laptop:flex-row laptop:gap-36">
          <div>
            <Image
              alt="Imagem ilustrativa de um engrenagem"
              className="h-[220px] w-[250px] laptop:h-[360px] laptop:w-[400px]"
              src={RenderGear}
            />
          </div>

          <div className="flex flex-col  items-center gap-8 laptop:items-start laptop:gap-16">
            <h1 className="font-mavenPro text-4xl font-semibold text-white laptop:text-6xl">
              Nossos Serviços
            </h1>
            <ContainerItems />
          </div>
        </div>
      </Container>
    </div>
  )
}
