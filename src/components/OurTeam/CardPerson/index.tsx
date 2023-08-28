'use client'

import FullButton from '@/components/FullButton'
import { CardPersonProps } from './types'
import { motion } from 'framer-motion'
import { item } from '../animation'

export default function CardPerson({
  image,
  name,
  description,
  gitHub,
  linkedin
}: CardPersonProps) {
  return (
    <motion.div
      variants={item}
      className="group relative rounded-xl bg-gradient-to-t from-yellow-800 to-transparent p-1 duration-300 ease-in-out hover:scale-105"
    >
      <div
        style={{ backgroundImage: `url('${image.src}')` }}
        className="flex h-[320px] w-[250px] items-end rounded-xl bg-cover bg-center p-4 brightness-[65%] laptop:h-[430px] laptop:w-[280px]"
      />
      <div className="hidden bg-black group-hover:block">
        <div className="absolute top-0 m-4 flex w-full flex-col items-start gap-4 font-jetBrainsMono text-white">
          {linkedin && <FullButton url={linkedin}>Linkedin</FullButton>}
          {gitHub && <FullButton url={gitHub}>GitHub</FullButton>}
        </div>
      </div>

      <div className="absolute bottom-0 m-4 flex flex-col gap-4 font-jetBrainsMono text-white">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-sm laptop:text-base">{description}</p>
      </div>
    </motion.div>
  )
}
