import Image from 'next/image'
import Logo from '@/assets/images/DevTeamLogo.png'
import ItemsHeader from './ItemsHeader'

export default function HeaderComponent() {
  return (
    <nav className="fixed top-0 flex w-full items-center  justify-between border-b-2  border-yellow-800 bg-blue-200/20 px-24 py-4 backdrop-blur-sm">
      <a href="#">
        <Image
          src={Logo}
          width={130}
          height={130}
          alt="Logo de marca usada pela Dev Team"
        />
      </a>

      <ItemsHeader />
    </nav>
  )
}
