import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, stagger } from '../hooks/useReveal'

const groupColors = {
  Frontend: '#660033',
  Backend: '#E673AC',
  Languages: '#469110',
  'AI / ML': '#00520A',
  Cloud: '#660033',
  Tools: '#E673AC',
}

export default function Skills() {
  const groups = Object.entries(skills)

  return (
    <section id="skills" className="border-t border-line py-32 md:py-44">
      <div className="container-edit">
        <SectionTitle
          eyebrow="Toolbox"
          title="Skills & stack"
          description="The languages, frameworks and tools I reach for most, grouped by where they live in a product."
        />

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items], gi) => {
            const color = groupColors[group] || '#660033'
            return (
              <motion.div
                key={group}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: gi * 0.05 }}
              >
                <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: `${color}30` }}>
                  <h3 className="font-display text-lg text-ink">{group}</h3>
                  <span className="font-mono text-xs" style={{ color }}>{String(items.length).padStart(2, '0')}</span>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stagger(0.1, 0.05)}
                  className="mt-5 flex flex-wrap gap-2.5"
                >
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      variants={fadeUp}
                      whileHover={{ y: -3, backgroundColor: color, color: '#FDF8F5', borderColor: color }}
                      transition={{ duration: 0.25 }}
                      className="cursor-default rounded-full border bg-card px-4 py-2 text-sm font-medium text-ink"
                      style={{ borderColor: `${color}25` }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
