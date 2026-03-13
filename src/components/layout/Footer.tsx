import { useLanguage } from '@/context/LanguageContext'

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/juanespaez' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-esteban-paez-gil-595988273/' },
  { label: 'Email',    href: 'mailto:juanespg03@gmail.com' },
]

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 px-[10vw] py-10 border-t border-blue/15">
      <p className="font-mono text-xs text-muted">
        {t({ en: '© 2025 Juan Esteban Paez Gil · Medellín, Colombia', es: '© 2025 Juan Esteban Paez Gil · Medellín, Colombia' })}
      </p>
      <div className="flex gap-6">
        {LINKS.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
            className="font-mono text-xs text-muted hover:text-blue transition-colors duration-300">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
