import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PROJECTS } from '@/data'
import type { Project } from '@/types'

export function Projects() {
  const { t } = useLanguage()
  const titleRef = useScrollReveal()

  return (
    <section id="projects" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: "WHAT I'VE BUILT", es: 'LO QUE HE CONSTRUIDO' })}
      </p>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className="reveal font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Featured Projects', es: 'Proyectos Destacados' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const ref = useScrollReveal()

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className="reveal relative bg-bg2/70 border border-blue/15 rounded-3xl p-10 backdrop-blur-sm overflow-hidden hover:border-blue/40 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 group">

      {/* Background number */}
      <span className="absolute top-5 right-7 font-display font-extrabold text-7xl text-blue/[0.06] leading-none select-none">
        0{project.id}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl border border-blue/15 bg-gradient-to-br from-blue/15 to-violet/15 flex items-center justify-center text-2xl mb-6">
        {project.icon}
      </div>

      <h3 className="font-display font-bold text-xl leading-tight mb-3">{t(project.title)}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{t(project.description)}</p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map(tag => (
          <span key={tag}
            className="px-2.5 py-1 rounded-md border border-violet/20 bg-violet/10 font-mono text-[11px] text-violet">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2.5 items-start rounded-xl border border-mint/10 bg-mint/5 px-4 py-3 text-mint text-[13px] leading-relaxed">
        <span className="flex-shrink-0">→</span>
        <span>{t(project.highlight)}</span>
      </div>
    </div>
  )
}
