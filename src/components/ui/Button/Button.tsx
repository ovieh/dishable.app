import { type ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses =
      'font-semibold rounded-full transition-colors inline-flex items-center justify-center'

    const variantClasses = {
      primary: 'bg-rust text-white hover:bg-rust/90',
      secondary: 'bg-white text-darkgrey border-2 border-darkgrey hover:bg-darkgrey hover:text-white',
      outline: 'border-2 border-darkgrey text-darkgrey hover:bg-darkgrey hover:text-white',
    }

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
