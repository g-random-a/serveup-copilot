import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-medium font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 max-w-sm w-full',
  {
    variants: {
      intent: {
        primary: 'bg-cyan text-white hover:bg-cyan focus:ring-cyan',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
      },
      size: {
        small: 'px-2.5 py-1.5',
        medium: 'px-3 py-2',
        large: 'px-3 py-3',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
)

const CustomButton: React.FC<
  VariantProps<typeof buttonStyles> & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ intent, size, className, ...props }) => {
  return (
    <button className={clsx(buttonStyles({ intent, size }), className)} {...props} type="button" />
  )
}

export default CustomButton
