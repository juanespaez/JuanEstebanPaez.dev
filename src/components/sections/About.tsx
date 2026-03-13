import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { STATS, SPOKEN_LANGUAGES } from '@/data'

export function About() {
  const { t } = useLanguage()
  const titleRef  = useScrollReveal()
  const textRef   = useScrollReveal()
  const statsRef  = useScrollReveal()

  return (
    <section id="about" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: 'WHO I AM', es: 'QUIÉN SOY' })}
      </p>

      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className="reveal font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Architect of', es: 'Arquitecto de' })}<br />
        {t({ en: 'Intelligent Systems', es: 'Sistemas Inteligentes' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={textRef as React.RefObject<HTMLDivElement>} className="reveal space-y-5">
          {[
            t({ en: "I'm a Data Science Engineering student at", es: 'Soy estudiante de Ingeniería en Ciencia de Datos en la' })
              + ' Universidad Pontificia Bolivariana '
              + t({ en: 'in Medellín, building at the crossroads of clean software architecture and applied AI.', es: 'en Medellín, construyendo en la intersección de la arquitectura de software limpia y la IA aplicada.' }),
            t({ en: 'My engineering philosophy centers on Clean Architecture, Domain-Driven Design, and SOLID principles — I don\'t just write code, I design systems that scale and explain themselves.', es: 'Mi filosofía de ingeniería se centra en Arquitectura Limpia, DDD y principios SOLID — no solo escribo código, diseño sistemas que escalan y se explican solos.' }),
            t({ en: "I'm open to remote international roles, local opportunities in Medellín, and freelance projects as an AI/ML Engineer, Data Scientist, or Backend Developer.", es: 'Estoy abierto a roles remotos internacionales, oportunidades en Medellín y proyectos freelance como Ingeniero IA/ML, Científico de Datos o Desarrollador Backend.' }),
          ].map((para, i) => (
            <p key={i} className="text-muted leading-relaxed text-base">{para}</p>
          ))}

          <div className="flex flex-wrap gap-3 pt-4">
            {SPOKEN_LANGUAGES.map(l => (
              <div key={l.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet/25 bg-violet/10 text-sm text-snow">
                <span>{l.flag}</span>
                <span>{l.name}</span>
                <span className="font-mono text-[10px] text-violet">{l.cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef as React.RefObject<HTMLDivElement>} className="reveal grid grid-cols-2 gap-5">
          {STATS.map(s => (
            <div key={s.value}
              className="bg-bg2/70 border border-blue/15 rounded-2xl p-7 backdrop-blur-sm hover:border-blue hover:-translate-y-1 transition-all duration-300">
              <div className="font-display font-extrabold text-4xl text-grad-br leading-none mb-2">{s.value}</div>
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
