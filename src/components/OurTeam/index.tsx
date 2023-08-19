import Container from '../Container'
import ContainerProfessionals from './ContainerProfessionals'

export default function OurTeam() {
  return (
    <Container>
      <div className="mb-36 mt-36 flex select-none flex-col">
        <div className="mb-24 flex flex-col gap-6 border-l-4 border-yellow-800 pl-6">
          <h1 className="font-mavenPro text-5xl font-semibold text-white">
            Nossa Equipe
          </h1>
          <p className="font-titilliumWeb text-base text-white">
            Nossa equipe comporta três profissionais
            <b className="text-yellow-800"> qualificados</b> para os serviços,
            todos com grandes feitos sua carreia e com grandes responsabilidades
            em suas histórias.
          </p>
        </div>

        <ContainerProfessionals />
      </div>
    </Container>
  )
}
