export type Language = 'en' | 'es'

export interface TranslatedString {
  en: string
  es: string
}

export interface Project {
  id: number
  icon: string
  title: TranslatedString
  description: TranslatedString
  tags: string[]
  highlight: TranslatedString
  githubUrl: string
}

export interface SkillCategory {
  id: string
  title: TranslatedString
  skills: string[]
}

export interface NavItem {
  href: string
  label: TranslatedString
}

export interface ContactLink {
  icon: string
  label: string
  display: string
  href: string
}

export interface StatItem {
  value: string
  label: TranslatedString
}

export interface SpokenLanguage {
  flag: string
  name: string
  cert: string
}
