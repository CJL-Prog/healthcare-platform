import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export default function Card({ 
  children, 
  className = '', 
  hover = false, 
  gradient,
  onClick,
  style
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg ${
        hover ? 'hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' : ''
      } ${gradient ? 'relative overflow-hidden' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 hover:opacity-5 transition-opacity`} />
      )}
      {children}
    </div>
  )
}