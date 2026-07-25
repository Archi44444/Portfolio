import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled ? 'border-b border-line backdrop-blur-xl' : 'bg-transparent'
        }`}
        style={scrolled ? { background: 'rgba(253,248,245,0.75)' } : {}}
      >
        <nav className="container-edit flex h-20 items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); go('#home') }} className="font-display text-lg tracking-tight text-ink" data-cursor="grow">
            Archita<span style={{ color: '#E673AC' }}>.</span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href) }}
                  className="link-underline pb-1 text-sm font-medium text-ink/80 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('#contact') }}
            data-cursor="grow"
            className="hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-canvas transition-colors md:inline-flex"
            style={{ background: '#660033' }}
            onMouseEnter={e => e.currentTarget.style.background = '#4a0025'}
            onMouseLeave={e => e.currentTarget.style.background = '#660033'}
          >
            Let&rsquo;s talk <ArrowUpRight size={15} />
          </a>

          <button
            className="grid h-10 w-10 place-items-center md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center"
            style={{ background: '#FDF8F5' }}
          >
            <ul className="container-edit flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); go(l.href) }}
                    className="font-display text-4xl text-ink"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
