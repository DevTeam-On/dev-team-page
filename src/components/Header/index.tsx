'use client'

import Image from 'next/image'
import Logo from '@/assets/images/DevTeamLogo.png'
import ItemsHeader from './ItemsHeader'
import Container from '@/components/Container'
import ItemsMenuBurger from './ItemsMenuBurger'
import { useState } from 'react'

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 z-10 w-full select-none border-b-2 border-yellow-800 bg-blue-200/20 px-8 py-4 backdrop-blur-sm tablet:px-24">
        <Container>
          <div className="flex items-center justify-between">
            <a href="#">
              <Image
                src={Logo}
                width={130}
                height={130}
                alt="Logo de marca usada pela Dev Team"
              />
            </a>

            <ItemsHeader setIsOpen={setIsOpen} />
          </div>
        </Container>
      </nav>
      <ItemsMenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
