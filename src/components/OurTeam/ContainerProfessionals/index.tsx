'use client'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CardPerson from '../CardPerson'
import Roberto from '@/assets/images/roberto_felipe.jpg'
import Vinicius from '@/assets/images/vinicius_freitas.jpg'
import Felipe from '@/assets/images/felipe_moreira.jpg'
import Adrian from '@/assets/images/adrian_moretti.png'
import { container } from '../animation'

export default function ContainerProfessionals() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-center gap-8 laptop:flex-row laptop:justify-evenly"
    >
      <CardPerson
        description="CEO e fundador da DevTeam, desenvolvedor FullStack e product manager da equipe. Responsável pela gestão, design e desenvolvimento."
        name="Roberto Felipe"
        gitHub="https://github.com/RobertooFelipe"
        linkedin="https://www.linkedin.com/in/robertoofelipe/"
        image={Roberto}
      />

      <CardPerson
        description="CEO e fundador da DevTeam, desenvolvedor Front End de sistemas e aplicações."
        name="Felipe Moreira"
        gitHub="https://github.com/FeMoreira07"
        linkedin="https://www.linkedin.com/in/felipe-moreira-1b8677230/"
        image={Felipe}
      />

      <CardPerson
        description="Tech Lead da equipe, responsável por gerenciar e conduzir a parte técnica dos projetos."
        name="Vinicius Freitas"
        gitHub="https://github.com/viniciusFreitas00"
        linkedin="https://www.linkedin.com/in/vinicius-freire-de-freitas-94105a20b/"
        image={Vinicius}
      />
    </motion.div>
  )
}
