'use client'
import { ItemBenefitsProps } from './types'
import { motion } from 'framer-motion'

export default function ItemBenefits({ icon, text }: ItemBenefitsProps) {
  const item = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }

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
