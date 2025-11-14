import { Icon } from '../../ui/Icon/Icon'
import { MdRestaurant } from 'react-icons/md'

export interface LogoProps {
  className?: string
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Icon icon={MdRestaurant} size={32} className="text-rust" aria-label="Dishable logo" />
      <span className="text-2xl font-bold font-serif text-newsprint">Dishable</span>
    </div>
  )
}
