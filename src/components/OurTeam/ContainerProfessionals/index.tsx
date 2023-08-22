import CardPerson from '../CardPerson'
import Roberto from '@/assets/images/roberto_felipe.jpg'
import Vinicius from '@/assets/images/vinicius_freitas.jpg'
import Felipe from '@/assets/images/felipe_moreira.jpg'

export default function ContainerProfessionals() {
  return (
    <div className="flex flex-col items-center gap-8 laptop:flex-row laptop:justify-evenly">
      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Roberto Felipe"
        gitHub="https://github.com/RobertooFelipe"
        linkedin="https://www.linkedin.com/in/robertoofelipe/"
        image={Roberto}
      />

      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Vinicius Freitas"
        gitHub="https://github.com/viniciusFreitas00"
        linkedin="https://www.linkedin.com/in/vinicius-freire-de-freitas-94105a20b/"
        image={Vinicius}
      />

      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Felipe Moreira"
        gitHub="https://github.com/FeMoreira07"
        linkedin="https://www.linkedin.com/in/felipe-moreira-1b8677230/"
        image={Felipe}
      />
    </div>
  )
}
