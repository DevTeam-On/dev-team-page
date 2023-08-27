'use client'
import { ItemBenefitsProps } from './types'
import { motion } from 'framer-motion'

export default function ItemBenefits({ icon, text }: ItemBenefitsProps) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div
      variants={item}
      className="flex flex-row gap-2 font-titilliumWeb text-white"
    >
      <div>{icon}</div>
      <div>{text}</div>
    </motion.div>
  )
}
