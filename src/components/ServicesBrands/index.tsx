'use client'

import Image from 'next/image'

import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Expo from '@/assets/images/expo.png'
import GitHub from '@/assets/images/github.png'
import MercadoPago from '@/assets/images/mercado_pago.png'
import MySql from '@/assets/images/mysql.png'
import Next from '@/assets/images/next.png'
import Postgres from '@/assets/images/postgresql.png'
import ReactImage from '@/assets/images/react.png'
import Render from '@/assets/images/render.png'
import Stripe from '@/assets/images/stripe.png'
import Tailwind from '@/assets/images/tailwind.png'
import Vercel from '@/assets/images/vercel.png'
import Vite from '@/assets/images/vite.png'
import { container, itemImage } from './animation'
import Container from '../Container'

export function ServicesBrands() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const techs = [
    { name: 'Expo', image: Expo },
    { name: 'GitHub', image: GitHub },
    { name: 'MercadoPago', image: MercadoPago },
    { name: 'MySql', image: MySql },
    { name: 'Next', image: Next },
    { name: 'Postgres', image: Postgres },
    { name: 'ReactImage', image: ReactImage },
    { name: 'Render', image: Render },
    { name: 'Stripe', image: Stripe },
    { name: 'Tailwind', image: Tailwind },
    { name: 'Vercel', image: Vercel },
    { name: 'Vite', image: Vite }
  ]

  return (
    <Container>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="mt-36 flex w-full flex-wrap items-center justify-center gap-8 laptop:gap-24 "
      >
        {techs.map((item: any) => (
          <motion.div key={item.name} variants={itemImage}>
            <Image
              src={item.image}
              alt={item.name}
              className="aspect-auto w-[80px] laptop:w-[120px]"
            />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}
