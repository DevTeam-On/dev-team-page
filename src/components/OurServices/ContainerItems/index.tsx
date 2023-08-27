'use client'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsCheckLg } from 'react-icons/bs'
import ItemBenefits from '../../ItemBenefits'

export default function ContainerItems() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-start justify-start gap-3"
    >
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Desenvolvimento de <b className="text-yellow-800">Websites</b>
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Desenvolvimento de{' '}
            <b className="text-yellow-800">Sistemas Internos</b>
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Desenvolvimento de <b className="text-yellow-800">Softwares</b>
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Desenvolvimento de{' '}
            <b className="text-yellow-800">
              Aplicações para Dispositivos Móveis
            </b>
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Banco de Dados e Integração de{' '}
            <b className="text-yellow-800">APIs</b>
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            <b className="text-yellow-800">Design</b> de Aplicações
          </p>
        }
      />
    </motion.div>
  )
}
