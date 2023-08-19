import { ItemBenefitsProps } from './types'

export default function ItemBenefits({ icon, text }: ItemBenefitsProps) {
  return (
    <div className="flex flex-row gap-2 font-titilliumWeb text-white">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  )
}
