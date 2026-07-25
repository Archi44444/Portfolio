import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useReveal'

const highlights = ['React', 'AI', 'Full Stack', 'UI Engineering']
const highlightColors = ['#660033', '#E673AC', '#469110', '#00520A']

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="font-display text-display-md text-ink">
      {val}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="container-edit py-32 md:py-44">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="lg:col-span-4"
        >
          <span className="eyebrow">About</span>
          <h2 className="font-display mt-4 text-display-lg text-ink">
            A little&nbsp;more<br />about me.
          </h2>
        </motion.div>

        <div className="lg:col-span-8">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="max-w-2xl text-xl leading-relaxed text-ink/90 md:text-2xl"
          >
            I&rsquo;m a second-year Computer Science student who likes turning
            rough ideas into products with clean interfaces and useful AI underneath.
            Most of my recent work sits at the intersection of{' '}
            <span style={{ color: '#E673AC' }}>retrieval-augmented generation, full-stack React apps,</span>{' '}
            and interfaces that don&rsquo;t make people think twice.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger(0.2, 0.08)}
            className="mt-10 flex flex-wrap gap-3"
          >
            {highlights.map((h, i) => (
              <motion.span
                key={h}
                variants={fadeUp}
                className="rounded-full border px-5 py-2 text-sm font-medium text-canvas cursor-default"
                style={{ background: highlightColors[i], borderColor: highlightColors[i] }}
              >
                {h}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger(0.3, 0.1)}
            className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp}>
                <Counter to={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
