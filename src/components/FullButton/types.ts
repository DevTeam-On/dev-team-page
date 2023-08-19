import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type FullButtonProps = {
  children: React.ReactNode
  url: string
} & ButtonTypes
