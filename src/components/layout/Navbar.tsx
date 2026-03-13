import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { NAV_ITEMS } from '@/data'

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-xl transition-all duration-300 ${
      scrolled ? 'border-b border-blue/15 bg-bg/85' : 'border-b border-transparent'
    }`}>
      <a href="#hero" className="font-display text-xl font-extrabold text-grad-br">JEP</a>

      <ul className="hidden md:flex gap-9 list-none">
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

      <div className="flex gap-1 bg-bg2/80 border border-blue/15 rounded-full p-1 backdrop-blur-xl">
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
