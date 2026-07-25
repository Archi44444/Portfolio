import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/portfolioData'
import MagneticButton from '../components/MagneticButton'
import profileImg from '../assets/profile.jpg'

const roleChips = profile.roles

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32">
      {/* Background accent blob */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #E673AC 0%, #660033 60%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #469110 0%, transparent 70%)' }}
      />

      <div className="container-edit grid flex-1 grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: headline */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Portfolio — {new Date().getFullYear()}
          </motion.span>

          <h1 className="font-display mt-6 text-hero text-ink">
            {['Building', 'products', 'people', 'actually', 'enjoy', 'using.'].map((word, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {roleChips.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted">{r}</span>
                {i < roleChips.length - 1 && <span className="h-1 w-1 rounded-full" style={{ background: '#E673AC', opacity: 0.5 }} />}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted"
          >
            I&rsquo;m Archita — a CSE student at Techno Main Salt Lake, designing and
            shipping full-stack, AI-powered products from Kolkata.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              variant="solid"
              icon={<ArrowUpRight size={16} />}
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              icon={<Download size={15} />}
            >
              Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: signature composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-md lg:block"
        >
          <FloatingComposition />
        </motion.div>
      </div>

      {/* Mobile portrait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="container-edit mt-10 lg:hidden"
      >
        <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-[2rem] border border-line" style={{ boxShadow: '0 20px 60px -20px rgba(102,0,51,0.2)' }}>
          <img src={profileImg} alt="Archita Mitra" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(102,0,51,0.15), transparent)' }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="container-edit flex items-center justify-between border-t border-line py-6"
      >
        <span className="text-xs text-muted">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-ink" />
        </motion.span>
      </motion.div>
    </section>
  )
}

function FloatingComposition() {
  return (
    <div className="relative h-full w-full">
      {/* Portrait card */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-8 top-0 aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-card"
        style={{ boxShadow: '0 30px 80px -30px rgba(102,0,51,0.3)' }}
      >
        <img src={profileImg} alt="Archita Mitra" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(102,0,51,0.2) 0%, transparent 50%)' }} />
      </motion.div>

      {/* Floating chip: role */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-6 top-10 rounded-2xl border border-line bg-card px-4 py-3"
        style={{ boxShadow: '0 20px 50px -25px rgba(102,0,51,0.3)' }}
      >
        <p className="font-display text-2xl text-ink">2+</p>
        <p className="text-[11px] uppercase tracking-widest text-muted">Years learning</p>
      </motion.div>

      {/* Floating chip: stack */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 rounded-2xl border border-line bg-card px-4 py-4"
        style={{ boxShadow: '0 20px 50px -25px rgba(102,0,51,0.3)' }}
      >
        {['React', 'FastAPI', 'AI'].map((t) => (
          <span key={t} className="rounded-full px-3 py-1.5 text-[11px] font-medium text-ink" style={{ background: 'rgba(102,0,51,0.06)' }}>
            {t}
          </span>
        ))}
      </motion.div>

      {/* Floating status */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute -bottom-6 left-2 flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2.5"
        style={{ boxShadow: '0 20px 50px -25px rgba(102,0,51,0.3)' }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full" style={{ background: '#469110', opacity: 0.4 }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#469110' }} />
        </span>
        <span className="text-xs font-medium text-ink">Open to opportunities</span>
      </motion.div>
    </div>
  )
}
