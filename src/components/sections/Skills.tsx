import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SKILL_CATEGORIES } from '@/data'

export function Skills() {
  const { t } = useLanguage()
  const titleRef = useScrollReveal()

  return (
    <section id="skills" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: 'WHAT I USE', es: 'LO QUE USO' })}
      </p>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className="reveal font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Tech Stack', es: 'Stack Tecnológico' })}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_CATEGORIES.map(cat => (
          <SkillCard key={cat.id} title={t(cat.title)} skills={cat.skills} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal relative card-glow bg-bg2/70 border border-blue/15 rounded-2xl p-8 backdrop-blur-sm hover:border-blue/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
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
