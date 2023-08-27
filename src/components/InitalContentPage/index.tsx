'use client'

import Image from 'next/image'
import RenderImage from '@/assets/images/render_logo.png'
import Container from '@/components/Container'
import { motion } from 'framer-motion'

export default function InitialContentPage() {
  return (
    <Container>
      <div className="flex h-screen select-none flex-col-reverse items-center justify-center p-6 laptop:mt-0 laptop:flex-row laptop:justify-evenly ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="flex max-w-[700px] flex-col gap-2 border-yellow-800 text-center laptop:gap-6 laptop:border-l-4 laptop:pl-6 laptop:text-start"
        >
          <h1 className="font-mavenPro text-4xl font-semibold text-white laptop:text-6xl">
            Nosso trabalho
          </h1>
          <p className="font-titilliumWeb text-base text-white">
            Nós da <b className="text-yellow-800">Dev Team</b> temos como foco
            ajudar você e seu negócio <b className="text-yellow-800">evoluir</b>
            !
            <br />
            Fazemos isso através de implementações sistemáticas que tem como
            funcionalidade promover aspectos como tecnologia, modernidade e
            acessibilidade para todos seus usuários.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20
          }}
        >
          <Image
            alt="Logo DevTeam 3D model"
            src={RenderImage}
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </Container>
  )
}
