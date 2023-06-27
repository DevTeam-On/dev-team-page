import Image from 'next/image'
import Logo from '@/assets/images/DevTeamLogo.png'

export default function HeaderComponent() {
  return (
    <header className="fixed top-0 flex w-full items-center  justify-between border-b-2  border-yellow-800 bg-blue-200 px-12 py-4">
      <div>
        <Image
          src={Logo}
          width={120}
          height={120}
          alt="Logo de marca usada pela Dev Team"
        />
      </div>
      <div className="flex justify-center">
        <ul className="bg flex list-none space-x-16 text-center">
          <li className="cursor-pointer text-yellow-800 transition-colors hover:text-gray-400">
            Início
          </li>
          <li className="cursor-pointer text-gray-50 transition-colors hover:text-yellow-800">
            Serviços
          </li>
          <li className="cursor-pointer text-gray-50 transition-colors hover:text-yellow-800">
            Sobre Nós
          </li>
          <li className="cursor-pointer text-gray-50 transition-colors hover:text-yellow-800">
            Contato
          </li>
          <li className="cursor-pointer text-gray-50 transition-colors hover:text-yellow-800">
            Nossos projetos
          </li>
        </ul>
      </div>
    </header>
  )
}
