import { OutlineButtonProps } from './types'

export default function OutlineButton({ icon, text }: OutlineButtonProps) {
  return (
    <button className="flex items-center justify-between gap-4 rounded border-2 border-yellow-800 bg-transparent px-8 py-2 font-titilliumWeb text-lg duration-300 ease-in-out hover:scale-105">
      <p>{text}</p>
      {icon}
    </button>
  )
}
