import type { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
  border?: boolean
}

export const Card = ({
  children,
  padding = 'md',
  shadow = false,
  border = false,
  className = '',
  ...props
}: CardProps) => {
  const baseClasses = 'rounded-2xl bg-white'

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const shadowClass = shadow ? 'shadow-lg' : ''
  const borderClass = border ? 'border border-darkgrey/20' : ''

  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClass} ${borderClass} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
