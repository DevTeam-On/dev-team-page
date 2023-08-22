import Container from '@/components/Container'
import ItemBenefits from '../ItemBenefits'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import ContainerBenefits from './ContainerBenefits'
import OutlineButton from '../OutlineButton'

export default function Benefits() {
  return (
    <Container>
      <div
        id="ItemBenefits"
        className="m-4 flex select-none flex-col items-center justify-center gap-24 border-2 border-yellow-800 p-8 laptop:flex-row laptop:justify-evenly laptop:p-24"
      >
        <div className="flex flex-col gap-4 text-center text-white laptop:max-w-[60%] laptop:text-start">
          <h1 className="font-mavenPro text-4xl font-semibold laptop:text-6xl">
            Mas por que a <b className="text-yellow-800">Dev Team</b>?
          </h1>
          <p className="font-titilliumWeb">
            Acreditamos nas ideias dos nossos clientes, vemos cada projeto como
            um <b className="text-yellow-800">sonho</b> de um indivíduo, então
            além de nosso profissionalismos com o desenvolvimento, também
            observamos essa parte, cujo é essencial para que um sistema ganhe
            vida, afinal o propósito do mesmo sempre será
            <b className="text-yellow-800"> ajudar</b>, e nós da Dev Team temos
            orgulho de saber que estamos ajudando com nosso conhecimento. <br />
            Além disso, desenvolvemos soluções para diversas áreas, sempre
            implementado funções lógicas e{' '}
            <b className="text-yellow-800">inovadoras</b> para alcançarmos
            resultados acima do esperado.
          </p>
          <div className="mt-8 flex justify-center laptop:justify-start">
            <OutlineButton
              text="Entrar em contato"
              icon={<MdKeyboardDoubleArrowRight size={24} color="#FFB22B" />}
            />
          </div>
        </div>

        <ContainerBenefits />
      </div>
    </Container>
  )
}
