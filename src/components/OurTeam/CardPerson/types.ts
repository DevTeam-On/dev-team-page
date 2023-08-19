import { StaticImageData } from 'next/image'

export type CardPersonProps = {
  image: StaticImageData
  name: string
  description: string
  gitHub: string
  linkedin: string
}
