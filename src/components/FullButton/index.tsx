import { FullButtonProps } from './types'
import Link from 'next/link'

export default function FullButton({
  children,
  url,
  ...rest
}: FullButtonProps) {
  return (
    <Link href={url}>
      <button
        {...rest}
        className="flex items-center justify-between gap-4 rounded-3xl bg-yellow-800 px-8 py-2 font-jetBrainsMono text-lg text-blue-400 duration-300 ease-in-out hover:scale-105"
      >
        {children}
      </button>
    </Link>
  )
}
