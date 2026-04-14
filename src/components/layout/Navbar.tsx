import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLanguage } from '@/context/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { NAV_ITEMS } from '@/data'

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const prefersReduced = useReducedMotion()

  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useGSAP(() => {
    if (prefersReduced) {
      gsap.set([logoRef.current, linksRef.current, toggleRef.current], { opacity: 1, x: 0, y: 0 })
      return
    }

    const tl = gsap.timeline()
    tl.from(logoRef.current, { opacity: 0, x: -20, duration: 0.6, ease: 'power2.out' })
      .from(linksRef.current!.querySelectorAll('li'), {
        opacity: 0, y: -10, duration: 0.4, stagger: 0.08, ease: 'power2.out',
      }, '-=0.4')
      .from(toggleRef.current, { opacity: 0, x: 20, duration: 0.5, ease: 'power2.out' }, '-=0.4')
  }, { scope: navRef, dependencies: [prefersReduced] })

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-xl transition-all duration-300 ${
      scrolled ? 'border-b border-blue/15 bg-bg/85' : 'border-b border-transparent'
    }`}>
      <a ref={logoRef} href="#hero" className="font-display text-xl font-extrabold text-grad-br">JEP</a>

      <ul ref={linksRef} className="hidden md:flex gap-9 list-none">
        {NAV_ITEMS.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-muted font-mono text-xs tracking-widest hover:text-blue transition-colors duration-300 relative group"
            >
              {t(item.label)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div ref={toggleRef} className="flex gap-1 bg-bg2/80 border border-blue/15 rounded-full p-1 backdrop-blur-xl">
        {(['en', 'es'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs cursor-pointer transition-all duration-300 ${
              lang === l ? 'bg-blue text-bg font-medium' : 'text-muted hover:text-snow'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
