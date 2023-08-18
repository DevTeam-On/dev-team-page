import { BsCheckLg } from 'react-icons/bs'
import ItemBenefits from '../ItemBenefits'

export default function ContainerBenefits() {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            <b className="text-yellow-800">Reuniões</b> para acompanhar o
            desenvolvimento.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            <b className="text-yellow-800">100% de participação</b> na decisão
            de modelos.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Produto eficaz com <b className="text-yellow-800">suporte rápido</b>
            .
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Entregas <b className="text-yellow-800">documentadas</b> e
            <b className="text-yellow-800"> organizadas</b>.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Ferramentas <b className="text-yellow-800">competitivas</b> com o
            mercado tecnológico.
          </p>
        }
      />
    </div>
  )
}
