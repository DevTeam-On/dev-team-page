'use client'

import { RiMenu4Fill } from 'react-icons/ri'
import { ItemsHeaderProps } from './types'
import Link from 'next/link'

export default function ItemsHeader({ setIsOpen }: ItemsHeaderProps) {
  return (
    <>
      <div className="hidden justify-center font-titilliumWeb tablet:flex">
        <ul className="bg flex list-none space-x-16 text-center ">
          <Link href={'#'}>
            <li className="cursor-pointer text-yellow-800 transition-colors duration-300 ease-in hover:text-yellow-700">
              Início
            </li>
          </Link>
          <Link href={'#OurServices'}>
            <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
              Serviços
            </li>
          </Link>
          <Link href={'#ItemBenefits'}>
            <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
              Sobre Nós
            </li>
          </Link>
          <Link href={'#OurClients'}>
            <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
              Nossos projetos
            </li>
          </Link>
          <Link href={'#Baseboard'}>
            <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
              Contato
            </li>
          </Link>
        </ul>
      </div>

      <div className="tablet:hidden">
        <RiMenu4Fill
          size={35}
          color="#fff"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        />
      </div>
    </>
  )
}
