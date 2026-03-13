import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col justify-center px-[10vw] pt-24">
      {/* Status badge */}
      <div className="flex items-center gap-2 w-fit mb-8 px-4 py-2 rounded-full border border-mint/20 bg-mint/5 font-mono text-xs text-mint opacity-0 animate-fade-up [animation-delay:0.1s]">
        <span className="w-2 h-2 rounded-full bg-mint animate-pulse-dot" />
        {t({ en: 'Open to Work · Medellín, Colombia', es: 'Disponible · Medellín, Colombia' })}
      </div>

      {/* Tag line */}
      <div className="flex items-center gap-3 font-mono text-xs text-mint tracking-[0.2em] uppercase mb-6 opacity-0 animate-fade-up [animation-delay:0.3s]">
        <span className="w-8 h-px bg-mint" />
        {t({ en: 'AI · Cloud · Architecture', es: 'IA · Nube · Arquitectura' })}
      </div>

      {/* Name */}
      <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-[clamp(52px,8vw,110px)] opacity-0 animate-fade-up [animation-delay:0.5s]">
        Juan Esteban
        <span className="block text-grad-full">Paez Gil</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed opacity-0 animate-fade-up [animation-delay:0.7s]">
        <strong className="text-snow font-medium">
          {t({ en: 'Cloud Software Developer', es: 'Desarrollador de Software en la Nube' })}
        </strong>
        <br />
        {t({
          en: 'building intelligent systems at the intersection of software architecture and artificial intelligence.',
          es: 'construyendo sistemas inteligentes en la intersección de la arquitectura de software y la inteligencia artificial.',
        })}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mt-12 opacity-0 animate-fade-up [animation-delay:0.9s]">
        <a href="#projects"
          className="px-8 py-3.5 rounded-full bg-grad-br text-bg font-display font-bold text-sm shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-200">
          {t({ en: 'View My Work →', es: 'Ver Mi Trabajo →' })}
        </a>
        <a href="#contact"
          className="px-8 py-3.5 rounded-full border border-blue/15 text-snow font-display font-semibold text-sm backdrop-blur-sm hover:border-blue hover:text-blue transition-all duration-300">
          {t({ en: 'Get In Touch', es: 'Contáctame' })}
        </a>
        <a href="https://github.com/juanespaez" target="_blank" rel="noreferrer"
          className="px-8 py-3.5 rounded-full border border-blue/15 text-snow font-display font-semibold text-sm backdrop-blur-sm hover:border-blue hover:text-blue transition-all duration-300">
          GitHub ↗
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-[10vw] flex items-center gap-3 font-mono text-[11px] text-muted tracking-[0.15em] opacity-0 animate-fade-up [animation-delay:1.2s]">
        <div className="relative w-12 h-px bg-muted overflow-hidden scroll-line" />
        {t({ en: 'SCROLL TO EXPLORE', es: 'DESPLÁZATE' })}
      </div>
    </section>
  )
}
