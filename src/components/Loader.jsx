import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setProgress(Math.round(t * 100))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = ''
      const t = setTimeout(onDone, 700)
      return () => clearTimeout(t)
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [visible, onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: '#FDF8F5' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <span className="eyebrow">Archita Mitra</span>
            <div
              className="font-display text-display-md tabular-nums"
              style={{
                background: 'linear-gradient(135deg, #660033 0%, #E673AC 60%, #469110 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {String(progress).padStart(2, '0')}
            </div>
            <div className="h-px w-40 overflow-hidden" style={{ background: '#e8d5dc' }}>
              <motion.div
                className="h-full"
                style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #660033, #E673AC)' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
