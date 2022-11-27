import React from 'react'

export interface ButtonProps extends React.ComponentPropsWithRef<React.ElementType> {
  component?: React.ElementType
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(
  ({ children, variant = 'secondary', size = 'sm', fullWidth = false, component, ...props }, ref) => {
    const Component = component ?? 'button'
    return (
      <Component className={`${base} ${buttonVariant[variant]} ${buttonSize[size]} ${withFullWidth(fullWidth)}`} ref={ref} {...props}>
        {children}
      </Component>
    )
  },
)

const base = 'rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed'

const buttonVariant = {
  primary:
    'bg-gray-700 text-white hover:bg-gray-900 border border-transparent focus:ring-gray-700 font-medium shadow-xs disabled:bg-gray-300',
  secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-300 font-medium disabled:bg-gray-100 disabled:text-gray-400',
}

const buttonSize = {
  sm: 'px-4 py-1',
  md: 'px-6 py-2',
  lg: 'px-8 py-3',
}

const withFullWidth = (fullWidth: boolean) => (fullWidth ? 'w-full' : 'w-fit')

Button.defaultProps = {
  component: 'button',
  variant: 'secondary',
  size: 'md',
  fullWidth: false,
}

Button.displayName = 'Button'

export default Button
