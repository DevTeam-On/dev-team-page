'use client'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsCheckLg } from 'react-icons/bs'
import ItemBenefits from '../../ItemBenefits'
import { container } from './animation'

export default function ContainerBenefits() {
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
      className="flex flex-col items-start justify-start gap-3"
    >
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            <b className="text-yellow-800">Reuniões</b> para acompanhar o
            desenvolvimento.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            <b className="text-yellow-800">100% de participação</b> na decisão
            de modelos.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Produto eficaz com <b className="text-yellow-800">suporte rápido</b>
            .
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Entregas <b className="text-yellow-800">documentadas</b> e
            <b className="text-yellow-800"> organizadas</b>.
          </p>
        }
      />
      <ItemBenefits
        icon={<BsCheckLg size={35} color="#67A950" />}
        text={
          <p>
            Ferramentas <b className="text-yellow-800">competitivas</b> com o
            mercado tecnológico.
          </p>
        }
      />
    </motion.div>
  )
}
