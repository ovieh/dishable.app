import type { IconType } from 'react-icons'

export interface IconProps {
  icon: IconType
  size?: number | string
  className?: string
  'aria-label'?: string
}

export const Icon = ({ icon: IconComponent, size = 24, className = '', ...props }: IconProps) => {
  return <IconComponent size={size} className={className} {...props} />
}
