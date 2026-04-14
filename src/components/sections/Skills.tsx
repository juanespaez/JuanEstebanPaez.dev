import { useLanguage } from '@/context/LanguageContext'
import { useGSAPScrollReveal } from '@/hooks/useGSAPScrollReveal'
import { useCardTilt } from '@/hooks/useCardTilt'
import { SKILL_CATEGORIES } from '@/data'

export function Skills() {
  const { t } = useLanguage()

  const titleRef = useGSAPScrollReveal<HTMLHeadingElement>({ direction: 'right', distance: 50, start: 'top 88%' })
  const gridRef = useGSAPScrollReveal<HTMLDivElement>({
    childSelector: '.skill-card',
    direction: 'up',
    distance: 40,
    duration: 0.7,
    ease: 'back.out(1.5)',
    stagger: 0.08,
    start: 'top 85%',
  })

  return (
    <section id="skills" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: 'WHAT I USE', es: 'LO QUE USO' })}
      </p>
      <h2 ref={titleRef}
        className="font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Tech Stack', es: 'Stack Tecnológico' })}
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      className="skill-card tilt-card relative card-glow bg-bg2/70 border border-blue/15 rounded-2xl p-8 backdrop-blur-sm hover:border-blue/30 transition-colors duration-300 overflow-hidden">
      <p className="font-mono text-[11px] text-blue tracking-[0.2em] uppercase mb-5">{title}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s}
            className="px-3 py-1.5 rounded-lg border border-blue/12 bg-blue/5 text-snow text-[13px] hover:bg-blue/15 hover:border-blue transition-all duration-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
