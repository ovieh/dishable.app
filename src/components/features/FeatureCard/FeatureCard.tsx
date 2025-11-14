import { Card } from '../../ui/Card/Card'
import { Icon } from '../../ui/Icon/Icon'
import type { IconType } from 'react-icons'

export interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
  className?: string
}

export const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <Card padding="lg" className={`border border-darkgrey/10 ${className}`}>
      <div className="w-12 h-12 bg-rust/10 rounded-lg flex items-center justify-center mb-6">
        <Icon icon={icon} size={24} className="text-rust" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-serif font-bold mb-4">{title}</h3>
      <p className="text-darkgrey">{description}</p>
    </Card>
  )
}
