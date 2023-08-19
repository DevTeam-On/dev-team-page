import { BsCheckLg } from 'react-icons/bs'
import ItemBenefits from '../../ItemBenefits'

export default function ContainerItems() {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Desenvolvimento de Websites</p>}
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Desenvolvimento de Sistemas Internos</p>}
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Desenvolvimento de Softwares</p>}
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Desenvolvimento de Aplicações para Dispositivos Móveis</p>}
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Banco de Dados e Integração de APIs</p>}
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={<p>Design de Aplicações</p>}
      />
    </div>
  )
}
