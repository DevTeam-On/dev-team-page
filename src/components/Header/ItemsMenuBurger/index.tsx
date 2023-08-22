'use client'
import Image from 'next/image'
import RenderImage from '@/assets/images/DevTeamLogo.png'
import { IoMdClose } from 'react-icons/io'
import { ItemsMenuBurgerProps } from './types'
import Link from 'next/link'
import { container, item } from '../animation'
import { motion } from 'framer-motion'

export default function ItemsMenuBurger({
  isOpen,
  setIsOpen
}: ItemsMenuBurgerProps) {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed left-0 right-0 top-0 z-20 h-screen select-none flex-col items-center justify-evenly bg-black/90 backdrop-blur-sm`}
    >
      <IoMdClose
        size={30}
        color="#fff"
        className="fixed right-5 top-5 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
      <Image
        alt="Logo DevTeam 3D model"
        src={RenderImage}
        width={150}
        height={150}
      />
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex list-none flex-col items-center justify-center gap-4 font-mavenPro text-2xl"
      >
        <Link onClick={() => setIsOpen(false)} href={'#'}>
          <motion.li
            variants={item}
            className="cursor-pointer text-yellow-800 transition-colors duration-300 ease-in hover:text-yellow-700"
          >
            Início
          </motion.li>
        </Link>
        <Link onClick={() => setIsOpen(false)} href={'#OurServices'}>
          <motion.li
            variants={item}
            className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
          >
            Serviços
          </motion.li>
        </Link>
        <Link onClick={() => setIsOpen(false)} href={'#ItemBenefits'}>
          <motion.li
            variants={item}
            className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
          >
            Sobre Nós
          </motion.li>
        </Link>
        <Link onClick={() => setIsOpen(false)} href={'#Baseboard'}>
          <motion.li
            variants={item}
            className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
          >
            Contato
          </motion.li>
        </Link>
        <Link onClick={() => setIsOpen(false)} href={'#OurClients'}>
          <motion.li
            variants={item}
            className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
          >
            Nossos projetos
          </motion.li>
        </Link>
      </motion.ul>
    </div>
  )
}
