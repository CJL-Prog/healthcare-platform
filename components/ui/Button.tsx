import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-900 to-blue-600 text-white hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50',
    ghost: 'text-blue-900 hover:bg-gray-100',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg font-semibold',
  }

  return (
    <button
      className={`rounded-lg transition-all duration-300 font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button