import { LanguageProvider } from '@/context/LanguageContext'
import { NeuralBackground } from '@/components/ui/NeuralBackground'
import { Cursor } from '@/components/ui/Cursor'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <Cursor />
      <NeuralBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
