import Image from 'next/image'
import ClientSoSeu from '@/assets/images/client_soseu.png'
import FullButton from '../FullButton'

export default function OurClients() {
  return (
    <div className="flex w-full flex-col items-center gap-8 laptop:gap-24">
      <h1 className="font-mavenPro text-2xl font-semibold text-white laptop:text-5xl">
        Nossos Clientes
      </h1>
      <div className="flex flex-col items-center justify-center gap-12">
        <Image
          src={ClientSoSeu}
          width={150}
          height={150}
          alt="Cliente plataforma Só Seu"
        />
        <FullButton url="https://soseu.com.br/">Visualizar</FullButton>
      </div>
    </div>
  )
}
