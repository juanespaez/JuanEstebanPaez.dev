import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from './useReducedMotion'

export interface CardTiltOptions {
  maxTiltDeg?: number
  scaleTo?: number
  duration?: number
  liftPx?: number
}

export function useCardTilt<T extends HTMLElement>(
  options: CardTiltOptions = {}
): React.RefObject<T | null> {
  const { maxTiltDeg = 12, scaleTo = 1.03, duration = 0.4, liftPx = 24 } = options
  const ref = useRef<T>(null)
  const prefersReduced = useReducedMotion()

  useGSAP(() => {
    const el = ref.current
    if (!el || prefersReduced) return

    const parent = el.parentElement
    if (parent) parent.style.perspective = '1000px'
    el.style.transformStyle = 'preserve-3d'

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      // Drives the .tilt-glare radial highlight in CSS
      el.style.setProperty('--gx', `${(relX + 0.5) * 100}%`)
      el.style.setProperty('--gy', `${(relY + 0.5) * 100}%`)
      gsap.to(el, {
        rotateX: -relY * maxTiltDeg * 2,
        rotateY: relX * maxTiltDeg * 2,
        scale: scaleTo,
        z: liftPx,
        duration: 0.15,
        ease: 'power1.out',
        overwrite: 'auto',
      })
    }

    const onLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0,
        duration,
        ease: 'elastic.out(1, 0.5)',
        overwrite: 'auto',
      })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, { scope: ref, dependencies: [prefersReduced] })

  return ref
}
