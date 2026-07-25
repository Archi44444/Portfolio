import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFine) return

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', move)

    let raf
    const render = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.25
      pos.current.y += (target.current.y - pos.current.y) * 0.25
      if (dotRef.current) {
        dotRef.current.style.setProperty('--x', `${pos.current.x - 5}px`)
        dotRef.current.style.setProperty('--y', `${pos.current.y - 5}px`)
      }
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    const grow = () => dotRef.current?.style.setProperty('--scale', '3.2')
    const shrink = () => dotRef.current?.style.setProperty('--scale', '1')

    const interactive = 'a, button, [data-cursor="grow"]'
    const attach = () => {
      document.querySelectorAll(interactive).forEach((el) => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }
    attach()
    const observer = new MutationObserver(attach)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        transform: 'translate(var(--x, -10px), var(--y, -10px)) scale(var(--scale, 1))',
        transition: 'scale 0.25s cubic-bezier(0.16,1,0.3,1)',
      }}
    />
  )
}
