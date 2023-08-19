import Image from 'next/image'
import RenderGear from '@/assets/images/render_gear.png'
import ContainerItems from './ContainerItems'

export default function OurServices() {
  return (
    <div className="mt-48 flex w-full select-none flex-row items-center justify-evenly border-y-2 border-yellow-800 bg-blue-400 py-16">
      <div>
        <Image
          alt="Imagem ilustrativa de um engrenagem"
          width={450}
          height={450}
          src={RenderGear}
        />
      </div>

      <div className="flex flex-col items-start gap-16">
        <h1 className="font-mavenPro text-5xl font-semibold text-white">
          Nossos Serviços
        </h1>

        <ContainerItems />
      </div>
    </div>
  )
}
