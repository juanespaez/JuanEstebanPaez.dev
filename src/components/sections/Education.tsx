import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Education() {
  const { t } = useLanguage()
  const ref = useScrollReveal()

  return (
    <section id="education" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: 'WHERE I STUDY', es: 'DÓNDE ESTUDIO' })}
      </p>
      <h2 className="reveal font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Education', es: 'Educación' })}
      </h2>

      <div ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-bg2/70 border border-blue/15 rounded-3xl p-12 backdrop-blur-sm hover:border-blue/30 transition-all duration-300">
        <div>
          <h3 className="font-display font-bold text-2xl mb-2">Universidad Pontificia Bolivariana</h3>
          <p className="font-mono text-sm text-blue mb-3">
            {t({ en: 'B.S. Data Science Engineering · Medellín, Colombia', es: 'Ing. en Ciencia de Datos · Medellín, Colombia' })}
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-xl">
            {t({
              en: 'Focused on the intersection of software engineering, machine learning, and data-driven system design. Building a foundation in probability, statistics, hypothesis testing, and AI/ML model development.',
              es: 'Enfocado en la intersección de la ingeniería de software, machine learning y el diseño de sistemas basados en datos. Construyendo una base en probabilidad, estadística, pruebas de hipótesis y desarrollo de modelos IA/ML.',
            })}
          </p>
        </div>
        <div className="font-display font-extrabold text-5xl text-blue/10 whitespace-nowrap hidden md:block">UPB</div>
      </div>
    </section>
  )
}
