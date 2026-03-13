import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CONTACT_LINKS } from '@/data'

export function Contact() {
  const { t } = useLanguage()
  const infoRef = useScrollReveal()
  const formRef = useScrollReveal()
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  const [msg,   setMsg]   = useState('')

  const handleSend = () => {
    if (!name || !email || !msg) {
      alert(t({ en: 'Please fill all fields.', es: 'Por favor completa todos los campos.' }))
      return
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`)
    window.open(`mailto:juanespg03@gmail.com?subject=${subject}&body=${body}`)
  }

  const inputCls = "w-full bg-blue/[0.04] border border-blue/15 rounded-xl px-4 py-3.5 text-snow font-body text-sm outline-none focus:border-blue transition-colors duration-300 placeholder:text-muted resize-none"

  return (
    <section id="contact" className="relative z-10 px-[10vw] py-28">
      <p className="flex items-center gap-3 font-mono text-[11px] text-blue tracking-[0.25em] uppercase mb-4 before:content-[''] before:w-6 before:h-px before:bg-blue">
        {t({ en: 'GET IN TOUCH', es: 'CONTÁCTAME' })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div ref={infoRef as React.RefObject<HTMLDivElement>} className="reveal">
          <h2 className="font-display font-extrabold text-[clamp(36px,4vw,52px)] leading-[1.1] mb-5">
            {t({ en: "Let's Build", es: 'Construyamos' })}<br />
            {t({ en: 'Something Great', es: 'Algo Grande' })}
          </h2>
          <p className="text-muted leading-relaxed mb-10 text-[15px]">
            {t({
              en: "I'm open to remote international roles, local opportunities in Medellín, and freelance projects. Whether you have a project in mind or just want to connect — my inbox is always open.",
              es: 'Estoy abierto a roles remotos internacionales, oportunidades en Medellín y proyectos freelance. Si tienes un proyecto o quieres conectar, siempre estoy disponible.',
            })}
          </p>
          <div className="flex flex-col gap-4">
            {CONTACT_LINKS.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 px-5 py-4 bg-bg2/70 border border-blue/15 rounded-2xl backdrop-blur-sm hover:border-blue hover:translate-x-1.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-lg flex-shrink-0">
                  {link.icon}
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-muted tracking-widest uppercase mb-0.5">{link.label}</span>
                  <span className="text-snow text-sm">{link.display}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div ref={formRef as React.RefObject<HTMLDivElement>}
          className="reveal bg-bg2/70 border border-blue/15 rounded-3xl p-10 backdrop-blur-sm">
          {[
            { label: t({ en: 'YOUR NAME', es: 'TU NOMBRE' }), value: name,  set: setName,  type: 'text',  ph: 'John Doe' },
            { label: t({ en: 'YOUR EMAIL', es: 'TU EMAIL' }), value: email, set: setEmail, type: 'email', ph: 'john@company.com' },
          ].map(f => (
            <div key={f.label} className="mb-5">
              <label className="block font-mono text-[11px] text-muted tracking-[0.15em] uppercase mb-2">{f.label}</label>
              <input type={f.type} value={f.value} onChange={e => f.set(e.target.value)}
                placeholder={f.ph} className={inputCls} />
            </div>
          ))}
          <div className="mb-5">
            <label className="block font-mono text-[11px] text-muted tracking-[0.15em] uppercase mb-2">
              {t({ en: 'MESSAGE', es: 'MENSAJE' })}
            </label>
            <textarea rows={5} value={msg} onChange={e => setMsg(e.target.value)}
              placeholder={t({ en: 'Tell me about your project...', es: 'Cuéntame sobre tu proyecto...' })}
              className={inputCls} />
          </div>
          <button onClick={handleSend}
            className="w-full py-4 rounded-xl bg-grad-br text-bg font-display font-bold text-[15px] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            {t({ en: 'Send Message →', es: 'Enviar Mensaje →' })}
          </button>
        </div>
      </div>
    </section>
  )
}
