'use client'
import { item } from './animation'
import { ItemBenefitsProps } from './types'
import { motion } from 'framer-motion'

export default function ItemBenefits({ icon, text }: ItemBenefitsProps) {
  return (
    <motion.div
      variants={item}
      className="flex flex-row items-center gap-2 font-titilliumWeb text-white"
    >
      <div>{icon}</div>
      <div>{text}</div>
    </motion.div>
  )
}
