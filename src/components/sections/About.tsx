import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '@/context/LanguageContext'
import { useGSAPScrollReveal } from '@/hooks/useGSAPScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { STATS, SPOKEN_LANGUAGES } from '@/data'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const { t } = useLanguage()
  const prefersReduced = useReducedMotion()

  const titleRef = useGSAPScrollReveal<HTMLHeadingElement>({ direction: 'left', distance: 50, start: 'top 88%' })
  const textRef = useGSAPScrollReveal<HTMLDivElement>({ direction: 'left', distance: 40, start: 'top 85%' })
  const statsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = statsRef.current
    if (!el) return

    if (prefersReduced) {
      gsap.set(el.querySelectorAll('.stat-card'), { opacity: 1, y: 0, clearProps: 'all' })
      return
    }

    const trigger = { trigger: el, start: 'top 80%', once: true }

    el.querySelectorAll('.stat-value').forEach(node => {
      const raw = node.textContent ?? ''
      const num = parseInt(raw)
      if (!isNaN(num)) {
        const obj = { val: 0 }
        const suffix = raw.replace(String(num), '')
        gsap.to(obj, {
          val: num,
          duration: 1.8,
          ease: 'power1.out',
          snap: { val: 1 },
          onUpdate: () => { node.textContent = Math.round(obj.val) + suffix },
          scrollTrigger: trigger,
        })
      }
    })

    gsap.from(el.querySelectorAll('.stat-card'), {
      opacity: 0,
      y: 30,
      scale: 0.96,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: trigger,
    })
  }, { scope: statsRef, dependencies: [prefersReduced] })

  return (
    <section id="about" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-ember tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-ember">
        {t({ en: 'WHO I AM', es: 'QUIÉN SOY' })}
      </p>

      <h2 ref={titleRef}
        className="font-display font-extrabold text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-tight mb-12">
        {t({ en: 'Architect of', es: 'Arquitecto de' })}<br />
        {t({ en: 'Intelligent Systems', es: 'Sistemas Inteligentes' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={textRef} className="space-y-5">
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
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-coral/25 bg-coral/10 text-sm text-cream">
                <span>{l.flag}</span>
                <span>{l.name}</span>
                <span className="font-mono text-[10px] text-coral">{l.cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 gap-5">
          {STATS.map(s => (
            <div key={s.value} className="stat-card bg-bg2/70 border border-ember/15 rounded-2xl p-7 backdrop-blur-sm hover:border-ember hover:-translate-y-1 transition-all duration-300">
              <div className="stat-value font-display font-extrabold text-4xl text-grad-br leading-none mb-2">{s.value}</div>
              <div className="font-mono text-[11px] text-muted tracking-widest uppercase">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
