import Image from 'next/image'
import RenderImage from '@/assets/images/render_logo.png'
import Container from '@/components/Container'

export default function InitialContentPage() {
  return (
    <Container>
      <div className="flex h-screen select-none flex-row items-center justify-evenly">
        <div className="flex w-[700px] flex-col gap-6 border-l-4 border-yellow-800 pl-6">
          <h1 className="font-mavenPro text-6xl font-semibold text-white">
            Nosso trabalho
          </h1>
          <p className="font-titilliumWeb text-base text-white">
            Nós da <b className="text-yellow-800">Dev Team</b> temos como foco
            ajudar você e seu negócio <b className="text-yellow-800">evoluir</b>
            !
            <br />
            Fazemos isso através de implementações sistemáticas que tem como
            funcionalidade promover aspectos como tecnologia, modernidade e
            acessibilidade para todos seus usuários.
          </p>
        </div>

        <div>
          <Image
            alt="Logo DevTeam 3D model"
            src={RenderImage}
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </Container>
  )
}
