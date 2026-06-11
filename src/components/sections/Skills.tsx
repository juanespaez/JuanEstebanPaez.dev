import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '@/context/LanguageContext'
import { useGSAPScrollReveal } from '@/hooks/useGSAPScrollReveal'
import { useCardTilt } from '@/hooks/useCardTilt'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SKILL_CATEGORIES } from '@/data'

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const { t } = useLanguage()
  const prefersReduced = useReducedMotion()

  const titleRef = useGSAPScrollReveal<HTMLHeadingElement>({ direction: 'right', distance: 50, start: 'top 88%' })
  const gridRef = useRef<HTMLDivElement>(null)

  // Deal-from-deck entrance: cards start stacked at the grid center like a
  // fanned deck, then fly out to their slots in 3D. After landing, each card
  // gets an endless gentle float so the grid never sits perfectly still.
  useGSAP((_, contextSafe) => {
    const grid = gridRef.current
    const cards = gsap.utils.toArray<HTMLElement>('.skill-card')
    if (!grid || cards.length === 0) return

    if (prefersReduced) {
      gsap.set(cards, { opacity: 1, clearProps: 'all' })
      return
    }

    const gridRect = grid.getBoundingClientRect()
    const centerX = gridRect.left + gridRect.width / 2
    const centerY = gridRect.top + gridRect.height / 2

    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect()
      gsap.set(card, {
        x: centerX - (r.left + r.width / 2),
        y: centerY - (r.top + r.height / 2),
        rotation: (i - (cards.length - 1) / 2) * 5,
        rotationX: 35,
        scale: 0.7,
        opacity: 0,
        transformPerspective: 1000,
        zIndex: cards.length - i,
      })
    })

    const startFloat = contextSafe!(() => {
      gsap.set(cards, { zIndex: 'auto' })
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: '+=7',
          duration: 2.2 + (i % 3) * 0.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 0.15,
        })
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: grid, start: 'top 80%', once: true },
      onComplete: startFloat,
    })
    tl.to(cards, { opacity: 1, duration: 0.3, stagger: 0.09 }, 0)
      .to(cards, {
        x: 0,
        y: 0,
        rotation: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.9,
        ease: 'back.out(1.4)',
        stagger: 0.09,
      }, 0.05)
  }, { scope: gridRef, dependencies: [prefersReduced] })

  return (
    <section id="skills" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-ember tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-ember">
        {t({ en: 'WHAT I USE', es: 'LO QUE USO' })}
      </p>
      <h2 ref={titleRef}
        className="font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Tech Stack', es: 'Stack Tecnológico' })}
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 [perspective:1200px]">
        {SKILL_CATEGORIES.map(cat => (
          <SkillCard key={cat.id} title={t(cat.title)} skills={cat.skills} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  const cardRef = useCardTilt<HTMLDivElement>()
  const prefersReduced = useReducedMotion()

  // Chip cascade: on hover each chip pops out of the card plane in sequence,
  // riding on top of the card's tilt for a layered 3D effect.
  useGSAP(() => {
    const el = cardRef.current
    if (!el || prefersReduced) return
    const chips = el.querySelectorAll('.skill-chip')

    const onEnter = () => {
      gsap.to(chips, { z: 30, duration: 0.45, ease: 'back.out(2.5)', stagger: 0.025, overwrite: 'auto' })
    }
    const onLeave = () => {
      gsap.to(chips, { z: 0, duration: 0.5, ease: 'power2.out', stagger: 0.015, overwrite: 'auto' })
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, { scope: cardRef, dependencies: [prefersReduced] })

  return (
    <div ref={cardRef}
      className="skill-card tilt-card relative card-glow bg-gradient-to-b from-bg2/80 to-bg2/40 border border-ember/15 rounded-2xl p-8 backdrop-blur-sm hover:border-ember/40 hover:shadow-card transition-[border-color,box-shadow] duration-300">
      <div className="tilt-glare" aria-hidden="true" />
      <p className="card-depth font-mono text-[11px] text-ember tracking-[0.2em] uppercase mb-5">{title}</p>
      <div className="card-depth flex flex-wrap gap-2 [transform-style:preserve-3d]">
        {skills.map(s => (
          <span key={s}
            className="skill-chip px-3 py-1.5 rounded-lg border border-ember/12 bg-ember/5 text-cream text-[13px] hover:bg-ember/15 hover:border-ember transition-colors duration-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
