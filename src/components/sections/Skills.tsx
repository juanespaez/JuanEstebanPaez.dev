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

  // 3D flip-in entrance: cards rise and rotate up from the floor plane
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.skill-card')
    if (cards.length === 0) return

    if (prefersReduced) {
      gsap.set(cards, { opacity: 1, clearProps: 'all' })
      return
    }

    gsap.from(cards, {
      opacity: 0,
      rotationX: -60,
      y: 90,
      z: -150,
      transformPerspective: 1000,
      transformOrigin: '50% 100%',
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 85%',
        once: true,
      },
    })
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

  return (
    <div ref={cardRef}
      className="skill-card tilt-card relative card-glow bg-gradient-to-b from-bg2/80 to-bg2/40 border border-ember/15 rounded-2xl p-8 backdrop-blur-sm hover:border-ember/40 hover:shadow-card transition-[border-color,box-shadow] duration-300">
      <div className="tilt-glare" aria-hidden="true" />
      <p className="card-depth font-mono text-[11px] text-ember tracking-[0.2em] uppercase mb-5">{title}</p>
      <div className="card-depth-lg flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s}
            className="px-3 py-1.5 rounded-lg border border-ember/12 bg-ember/5 text-cream text-[13px] hover:bg-ember/15 hover:border-ember transition-all duration-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
