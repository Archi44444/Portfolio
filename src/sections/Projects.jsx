import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { projects } from '../data/portfolioData'
import SectionTitle from '../components/SectionTitle'
import { fadeUp } from '../hooks/useReveal'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-32 md:py-44">
      <div className="container-edit">
        <SectionTitle
          eyebrow="Selected Work"
          title="Featured projects"
          description="A handful of full-stack and AI-driven products I've designed, built, and shipped — from RAG assistants to outreach automation."
        />
      </div>

      <div className="mt-24 flex flex-col gap-0">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

function ProjectRow({ project, reversed }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="group border-b border-line"
    >
      <div className="container-edit grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16">
        {/* Visual */}
        <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}>
          <div
            className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-line transition-shadow duration-500"
            style={{
              boxShadow: '0 20px 60px -20px rgba(102,0,51,0.12)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 30px 80px -20px ${project.accentColor}40`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 20px 60px -20px rgba(102,0,51,0.12)'}
          >
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
            />
            {/* Subtle tint overlay on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 60%)` }}
            />
          </div>
        </div>

        {/* Copy */}
        <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-4" style={{ color: project.accentColor }}>
            <span className="font-mono text-sm opacity-60">{project.index}</span>
            <span className="h-px flex-1 max-w-16 opacity-25" style={{ background: project.accentColor }} />
            <span className="text-sm opacity-60">{project.year}</span>
          </div>

          <h3 className="font-display mt-6 text-4xl text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium text-ink transition-all duration-200 cursor-default"
                style={{ borderColor: `${project.accentColor}35` }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = project.accentColor
                  e.currentTarget.style.color = '#FDF8F5'
                  e.currentTarget.style.borderColor = project.accentColor
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = ''
                  e.currentTarget.style.color = ''
                  e.currentTarget.style.borderColor = `${project.accentColor}35`
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="grow"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink link-underline pb-1"
            >
              <GithubIcon size={16} /> Source
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                data-cursor="grow"
                className="inline-flex items-center gap-2 text-sm font-medium pb-1 link-underline"
                style={{ color: project.accentColor }}
              >
                Live demo <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
