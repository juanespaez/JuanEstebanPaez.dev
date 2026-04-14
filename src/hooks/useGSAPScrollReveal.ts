import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export interface ScrollRevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
  ease?: string
  stagger?: number
  childSelector?: string
  start?: string
}

export function useGSAPScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): React.RefObject<T | null> {
  const {
    direction = 'up',
    distance = 60,
    duration = 0.9,
    ease = 'power3.out',
    stagger = 0,
    childSelector,
    start = 'top 85%',
  } = options

  const ref = useRef<T>(null)
  const prefersReduced = useReducedMotion()

  useGSAP(() => {
    const el = ref.current
    if (!el) return

    const fromVars: gsap.TweenVars = { opacity: 0 }
    if (direction === 'up') fromVars.y = distance
    else if (direction === 'down') fromVars.y = -distance
    else if (direction === 'left') fromVars.x = -distance
    else if (direction === 'right') fromVars.x = distance

    if (prefersReduced) {
      gsap.set(childSelector ? el.querySelectorAll(childSelector) : el, {
        opacity: 1, x: 0, y: 0, clearProps: 'all',
      })
      return
    }

    const targets = childSelector ? el.querySelectorAll(childSelector) : el

    gsap.from(targets, {
      ...fromVars,
      duration,
      ease,
      stagger: stagger > 0 ? stagger : undefined,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    })
  }, { scope: ref, dependencies: [prefersReduced] })

  return ref
}
