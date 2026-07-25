import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line py-14">
      <div className="container-edit flex flex-col gap-10">
        <p className="font-display text-3xl leading-tight text-ink md:text-5xl">
          Let&rsquo;s build something <span style={{
            background: 'linear-gradient(135deg, #660033, #E673AC)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>remarkable.</span>
        </p>
        <div className="flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} {profile.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline pb-1 text-ink">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline pb-1 text-ink">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="link-underline pb-1 text-ink">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
