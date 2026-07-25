import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({
  as = 'button',
  href,
  target,
  rel,
  onClick,
  children,
  variant = 'solid',
  className = '',
  icon = null,
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.setProperty('--tx', `${x * 0.3}px`)
    el.style.setProperty('--ty', `${y * 0.3}px`)
  }

  const handleLeave = () => {
    ref.current?.style.setProperty('--tx', '0px')
    ref.current?.style.setProperty('--ty', '0px')
  }

  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-all duration-300 ease-editorial'

  const solidStyle = {
    background: '#660033',
    color: '#FDF8F5',
  }
  const outlineStyle = {
    border: '1.5px solid rgba(102,0,51,0.5)',
    color: '#1a0a0f',
  }

  const Comp = motion[as === 'a' ? 'a' : 'button']

  return (
    <Comp
      ref={ref}
      href={as === 'a' ? href : undefined}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={e => {
        if (variant === 'solid') e.currentTarget.style.background = '#4a0025'
        else {
          e.currentTarget.style.borderColor = '#660033'
          e.currentTarget.style.background = 'rgba(102,0,51,0.05)'
        }
      }}
      data-cursor="grow"
      className={`${base} ${className}`}
      style={{
        ...(variant === 'solid' ? solidStyle : outlineStyle),
        transform: 'translate(var(--tx, 0), var(--ty, 0))',
        transition: 'transform 0.2s ease-out, background-color 0.3s, border-color 0.3s',
      }}
    >
      <span>{children}</span>
      {icon}
    </Comp>
  )
}
