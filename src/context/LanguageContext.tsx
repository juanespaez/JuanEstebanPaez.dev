import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Language } from '@/types'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (obj: { en: string; es: string }) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = (obj: { en: string; es: string }) => obj[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
