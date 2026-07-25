import { motion } from 'framer-motion'
import { fadeUp } from '../hooks/useReveal'

export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display mt-4 text-display-lg text-ink">{title}</h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
    </motion.div>
  )
}
