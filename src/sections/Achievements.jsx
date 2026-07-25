import { motion } from 'framer-motion'
import { Trophy, Star, Users, Zap } from 'lucide-react'
import { achievements } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp, stagger } from '../hooks/useReveal'

const categoryConfig = {
  Hackathons: { icon: Trophy, color: '#660033', bg: 'rgba(102,0,51,0.08)' },
  'Open Source': { icon: Star, color: '#469110', bg: 'rgba(70,145,16,0.08)' },
  Leadership: { icon: Users, color: '#E673AC', bg: 'rgba(230,115,172,0.1)' },
}

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line py-32 md:py-44">
      <div className="container-edit">
        <SectionTitle
          eyebrow="Recognition"
          title="Achievements"
          description="Hackathons, open source, and the moments that pushed the work further."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1, 0.08)}
          className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {achievements.map((a) => {
            const cfg = categoryConfig[a.category] || categoryConfig.Hackathons
            const Icon = cfg.icon
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-line bg-card p-8 transition-shadow duration-500"
                style={{ '--hover-shadow': `0 25px 60px -30px ${cfg.color}50` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 25px 60px -30px ${cfg.color}50`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: cfg.color }}>{a.category}</span>
                </div>
                <h3 className="font-display mt-6 text-2xl text-ink">{a.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{a.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{a.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
