import { Dispatch, SetStateAction } from 'react'

export type ItemsMenuBurgerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
