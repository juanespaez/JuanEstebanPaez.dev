import { useEffect, useRef } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'

export function Cursor() {
  const { x, y } = useMousePosition()
  const ringRef  = useRef<HTMLDivElement>(null)
  const rx = useRef(0), ry = useRef(0)
  const animId = useRef<number>(0)

  useEffect(() => {
    const animate = () => {
      rx.current += (x - rx.current) * 0.12
      ry.current += (y - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx.current - 18}px, ${ry.current - 18}px)`
      }
      animId.current = requestAnimationFrame(animate)
    }
    animId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId.current)
  }, [x, y])

  return (
    <>
      <div className="fixed top-0 left-0 w-3 h-3 rounded-full bg-blue pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{ transform: `translate(${x - 6}px, ${y - 6}px)` }} />
      <div ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-blue/50 pointer-events-none z-[9998] hidden md:block transition-[width,height] duration-300" />
    </>
  )
}
