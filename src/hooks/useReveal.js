// Shared Framer Motion variants for consistent, restrained reveal animation
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.08) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}
