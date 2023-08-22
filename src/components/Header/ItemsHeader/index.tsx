'use client'
import { motion } from 'framer-motion'
import { RiMenu4Fill } from 'react-icons/ri'
import { ItemsHeaderProps } from './types'
import Link from 'next/link'
import { container, item } from '../animation'

export default function ItemsHeader({ setIsOpen }: ItemsHeaderProps) {
  return (
    <>
      <div className="hidden justify-center font-titilliumWeb tablet:flex">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="bg flex list-none space-x-16 text-center "
        >
          <Link href={'#'}>
            <motion.li
              variants={item}
              className="cursor-pointer text-yellow-800 transition-colors duration-300 ease-in hover:text-yellow-700"
            >
              Início
            </motion.li>
          </Link>
          <Link href={'#OurServices'}>
            <motion.li
              variants={item}
              className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
            >
              Serviços
            </motion.li>
          </Link>
          <Link href={'#ItemBenefits'}>
            <motion.li
              variants={item}
              className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
            >
              Sobre Nós
            </motion.li>
          </Link>
          <Link href={'#OurClients'}>
            <motion.li
              variants={item}
              className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
            >
              Nossos projetos
            </motion.li>
          </Link>
          <Link href={'#Baseboard'}>
            <motion.li
              variants={item}
              className="cursor-pointer text-gray-50 transition-colors duration-300 ease-in hover:text-yellow-800"
            >
              Contato
            </motion.li>
          </Link>
        </motion.ul>
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
