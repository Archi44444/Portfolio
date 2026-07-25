import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp } from '../hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const trackRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      )
    }, trackRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="border-t border-line py-32 md:py-44">
      <div className="container-edit">
        <SectionTitle
          eyebrow="Journey"
          title="Experience & timeline"
          description="Community, open source, and coursework — the threads running alongside every project."
        />

        <div ref={trackRef} className="relative mt-24 max-w-3xl">
          <div className="absolute left-[7px] top-1 h-full w-px" style={{ background: '#e8d5dc' }} />
          <div ref={lineRef} className="absolute left-[7px] top-1 w-px" style={{ height: '0%', background: 'linear-gradient(to bottom, #660033, #E673AC)' }} />

          <div className="flex flex-col gap-16">
            {experience.map((e) => (
              <motion.div
                key={e.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-canvas" style={{ borderColor: '#660033' }} />
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#E673AC' }}>{e.period}</p>
                <h3 className="font-display mt-2 text-2xl text-ink md:text-3xl">{e.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{e.org}</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/80">{e.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
