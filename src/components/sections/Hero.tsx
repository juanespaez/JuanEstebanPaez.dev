import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const { t } = useLanguage()
  const prefersReduced = useReducedMotion()

  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Entrance timeline
  useGSAP(() => {
    if (prefersReduced) {
      gsap.set(
        [taglineRef.current, headlineRef.current, subtitleRef.current, ctasRef.current, scrollRef.current],
        { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'all' }
      )
      return
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.from(taglineRef.current, { opacity: 0, x: -15, duration: 0.5 })
      .from(headlineRef.current!.querySelectorAll('span.word'), {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.07, ease: 'expo.out',
      }, '-=0.3')
      .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from(ctasRef.current!.querySelectorAll('a'), {
        opacity: 0, y: 15, duration: 0.5, stagger: 0.1,
      }, '-=0.4')
      .from(scrollRef.current, { opacity: 0, x: -10, duration: 0.5 }, '-=0.2')
  }, { scope: sectionRef, dependencies: [prefersReduced] })

  // Scroll parallax (desktop only)
  useGSAP(() => {
    if (prefersReduced) return

    ScrollTrigger.matchMedia({
      '(min-width: 768px)': () => {
        const layers: [React.RefObject<HTMLElement | null>, number][] = [
          [headlineRef, -80],
          [subtitleRef, -50],
          [ctasRef, -30],
        ]
        layers.forEach(([refObj, yEnd]) => {
          if (!refObj.current) return
          gsap.to(refObj.current, {
            y: yEnd,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        })
      },
    })
  }, { scope: sectionRef, dependencies: [prefersReduced] })

  return (
    <section ref={sectionRef} id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-[10vw] pt-24">

      {/* Tag line */}
      <div ref={taglineRef} className="flex items-center gap-3 font-mono text-xs text-gold tracking-[0.2em] uppercase mb-6">
        <span className="w-8 h-px bg-gold" />
        {t({ en: 'AI · Cloud · Data Engineer · Data Scientist · Developer', es: 'IA · Nube · Ingeniero de Datos · Ciencia de Datos · Desarrollador' })}
      </div>

      {/* Name */}
      <h1 ref={headlineRef} className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(52px,8vw,110px)]">
        <span className="word inline-block">Juan&nbsp;</span>
        <span className="word inline-block">Esteban</span>
        <span className="block">
          <span className="word inline-block text-grad-full">Paez&nbsp;</span>
          <span className="word inline-block text-grad-full">Gil</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p ref={subtitleRef} className="mt-8 text-lg text-muted max-w-xl leading-relaxed">
        <strong className="text-cream font-medium">
          {t({ en: 'Cloud Software Developer And Machine Learning', es: 'Desarrollador de Software en la Nube y Apredenizaje de Maquina' })}
        </strong>
        <br />
        {t({
          en: 'building intelligent systems at the intersection of software architecture and artificial intelligence.',
          es: 'construyendo sistemas inteligentes en la intersección de la arquitectura de software y la inteligencia artificial.',
        })}
      </p>

      {/* CTAs */}
      <div ref={ctasRef} className="flex flex-wrap gap-4 mt-12">
        <a href="#projects"
          className="px-8 py-3.5 rounded-full bg-grad-br text-bg font-display font-bold text-sm shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-200">
          {t({ en: 'View My Work →', es: 'Ver Mi Trabajo →' })}
        </a>
        <a href="#contact"
          className="px-8 py-3.5 rounded-full border border-ember/15 text-cream font-display font-semibold text-sm backdrop-blur-sm hover:border-ember hover:text-ember transition-all duration-300">
          {t({ en: 'Get In Touch', es: 'Contáctame' })}
        </a>
        <a href="https://github.com/juanespaez" target="_blank" rel="noreferrer"
          className="px-8 py-3.5 rounded-full border border-ember/15 text-cream font-display font-semibold text-sm backdrop-blur-sm hover:border-ember hover:text-ember transition-all duration-300">
          GitHub ↗
        </a>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-[10vw] flex items-center gap-3 font-mono text-[11px] text-muted tracking-[0.15em]">
        <div className="relative w-12 h-px bg-muted overflow-hidden scroll-line" />
        {t({ en: 'SCROLL TO EXPLORE', es: 'DESPLÁZATE' })}
      </div>
    </section>
  )
}
