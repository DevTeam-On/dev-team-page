import CardPerson from '../CardPerson'
import Roberto from '@/assets/images/roberto_felipe.jpg'
import Vonicius from '@/assets/images/vinicius_freitas.jpg'
import Felipe from '@/assets/images/felipe_moreira.jpg'

export default function ContainerProfessionals() {
  return (
    <div className="flex items-center justify-evenly">
      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Roberto Felipe"
        gitHub="https://github.com/RobertooFelipe"
        linkedin="https://www.linkedin.com/in/robertoofelipe/"
        image={Roberto}
      />

      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Vinicius Feitas"
        gitHub="https://github.com/RobertooFelipe"
        linkedin="https://www.linkedin.com/in/robertoofelipe/"
        image={Vonicius}
      />

      <CardPerson
        description="Desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Felipe Moreira"
        gitHub="https://github.com/RobertooFelipe"
        linkedin="https://www.linkedin.com/in/robertoofelipe/"
        image={Felipe}
      />
    </div>
  )
}
