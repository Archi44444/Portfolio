import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolioData'
import MagneticButton from '../components/MagneticButton'
import SectionTitle from '../components/SectionTitle'
import { fadeUp } from '../hooks/useReveal'

const socials = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail, value: profile.email, color: '#660033' },
  { label: 'GitHub', href: profile.github, icon: GithubIcon, value: 'Archi44444', color: '#469110' },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, value: 'archita-m', color: '#E673AC' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-line py-32 md:py-44">
      <div className="container-edit grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="Contact"
            title="Let's build something remarkable."
            description="Have a role, a project, or just an idea worth talking through? My inbox is open."
          />

          <div className="mt-12 flex flex-col gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                data-cursor="grow"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between border-b border-line py-4 group"
              >
                <span className="flex items-center gap-3 text-ink transition-colors duration-300 group-hover:text-[var(--color)]" style={{ '--color': s.color }}>
                  <span style={{ color: s.color }}><s.icon size={17} /></span>
                  <span className="font-medium">{s.label}</span>
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  {s.value} <ArrowUpRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

function Field({ label, value, onChange, placeholder, type = 'text', textarea = false }) {
  const Comp = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest text-muted">{label}</span>
      <Comp
        type={!textarea ? type : undefined}
        rows={textarea ? 4 : undefined}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full resize-none border-b bg-transparent pb-3 text-lg text-ink placeholder:text-muted/60 focus:outline-none transition-colors duration-300"
        style={{ borderColor: '#e8d5dc' }}
        onFocus={e => e.currentTarget.style.borderColor = '#660033'}
        onBlur={e => e.currentTarget.style.borderColor = '#e8d5dc'}
      />
    </label>
  )
}
