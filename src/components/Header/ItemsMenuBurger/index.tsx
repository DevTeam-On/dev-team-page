'use client'
import Image from 'next/image'
import RenderImage from '@/assets/images/render_logo.png'
import { IoMdClose } from 'react-icons/io'

export default function ItemsMenuBurger() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-evenly bg-black/90 backdrop-blur-sm">
      <IoMdClose
        size={30}
        color="#fff"
        className="fixed right-5 top-5"
        onClick={() => alert('Fechou')}
      />
      <Image
        alt="Logo DevTeam 3D model"
        src={RenderImage}
        width={150}
        height={150}
      />
      <ul className="flex list-none flex-col items-center justify-center gap-4 font-mavenPro text-2xl">
        <li className="cursor-pointer text-yellow-800 transition-colors duration-300 ease-in hover:text-yellow-700">
          Início
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Serviços
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Sobre Nós
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Contato
        </li>
        <li className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800">
          Nossos projetos
        </li>
      </ul>
    </div>
  )
}