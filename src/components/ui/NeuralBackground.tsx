import { useEffect, useRef } from 'react'

interface Node3D {
  x: number; y: number; z: number
  vx: number; vy: number; vz: number
  size: number
  pulseOffset: number
}

interface Connection { i: number; j: number; dist: number }
interface Particle { connIdx: number; t: number; speed: number; dir: 1 | -1 }

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let animId: number
    let scrollY = 0
    let mouseX = 0.5, mouseY = 0.5
    let frame = 0

    const onScroll = () => { scrollY = window.scrollY }
    const onMouse  = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }
    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMouse)

    // Build nodes
    const NODES = 60
    const nodes: Node3D[] = Array.from({ length: NODES }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1,
      vx: (Math.random() - 0.5) * 0.001,
      vy: (Math.random() - 0.5) * 0.001,
      vz: (Math.random() - 0.5) * 0.001,
      size: Math.random() * 2 + 1,
      pulseOffset: Math.random() * Math.PI * 2,
    }))

    const connections: Connection[] = []
    for (let i = 0; i < NODES; i++) {
      for (let j = i + 1; j < NODES; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dz = nodes[i].z - nodes[j].z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 0.6) connections.push({ i, j, dist })
      }
    }

    const particles: Particle[] = connections.flatMap((_, ci) =>
      Math.random() < 0.4
        ? [{ connIdx: ci, t: Math.random(), speed: 0.002 + Math.random() * 0.003, dir: Math.random() > 0.5 ? 1 : -1 }]
        : []
    )

    function project(x: number, y: number, z: number) {
      const fov = 1.5
      const perspective = fov / (fov + z + 1)
      const w = canvas!.width, h = canvas!.height
      return {
        sx: w / 2 + x * perspective * w * 0.4,
        sy: h / 2 + y * perspective * h * 0.4,
        scale: perspective,
      }
    }

    function transform(n: Node3D) {
      const camZ = scrollY * 0.003
      const rotX = (mouseY - 0.5) * 0.3
      const rotY = (mouseX - 0.5) * 0.3
      let { x, y, z } = n
      z -= camZ
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
      const x2 = x * cosY + z * sinY
      const z2 = -x * sinY + z * cosY
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
      const y2 = y * cosX - z2 * sinX
      const z3 = y * sinX + z2 * cosX
      return project(x2, y2, z3)
    }

    const COLORS = ['#00D4FF', '#7B61FF', '#00FFB2']

    function draw() {
      frame++
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)

      // Update positions
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.z += n.vz
        if (Math.abs(n.x) > 1.2) n.vx *= -1
        if (Math.abs(n.y) > 1.2) n.vy *= -1
        if (Math.abs(n.z) > 1.2) n.vz *= -1
      })

      // Grid floor
      ctx.save()
      ctx.globalAlpha = 0.06
      ctx.strokeStyle = '#00D4FF'
      ctx.lineWidth = 0.5
      const camZ = scrollY * 0.003
      for (let i = -20; i <= 20; i++) {
        const t = i / 20
        const p1 = project(t * 1.5, 0.8, -1 - camZ * 0.5)
        const p2 = project(t * 1.5, 0.8,  2 - camZ * 0.5)
        const p3 = project(-1.5,    0.8,  t * 1.5 - camZ * 0.5)
        const p4 = project( 1.5,    0.8,  t * 1.5 - camZ * 0.5)
        ctx.beginPath(); ctx.moveTo(p1.sx, p1.sy); ctx.lineTo(p2.sx, p2.sy); ctx.stroke()
        ctx.beginPath(); ctx.moveTo(p3.sx, p3.sy); ctx.lineTo(p4.sx, p4.sy); ctx.stroke()
      }
      ctx.restore()

      // Connections
      connections.forEach(({ i, j, dist }) => {
        const a = transform(nodes[i])
        const b = transform(nodes[j])
        if (a.scale < 0.1 || b.scale < 0.1) return
        const alpha = (1 - dist / 0.6) * 0.3 * Math.min(a.scale, b.scale) * 2
        ctx.save()
        ctx.globalAlpha = Math.min(Math.max(alpha, 0), 0.5)
        ctx.strokeStyle = '#7B61FF'
        ctx.lineWidth = 0.5
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke()
        ctx.restore()
      })

      // Particles
      particles.forEach(p => {
        p.t += p.speed * p.dir
        if (p.t > 1) p.t = 0
        if (p.t < 0) p.t = 1
        const { i, j } = connections[p.connIdx]
        const a = transform(nodes[i])
        const b = transform(nodes[j])
        const px = a.sx + (b.sx - a.sx) * p.t
        const py = a.sy + (b.sy - a.sy) * p.t
        ctx.save()
        ctx.globalAlpha = 0.8
        ctx.fillStyle = '#00FFB2'
        ctx.shadowBlur = 6
        ctx.shadowColor = '#00FFB2'
        ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI * 2); ctx.fill()
        ctx.restore()
      })

      // Nodes
      nodes.forEach((n, idx) => {
        const p = transform(n)
        if (p.scale < 0.1) return
        const pulse = Math.sin(frame * 0.02 + n.pulseOffset) * 0.5 + 0.5
        const r = n.size * p.scale * (1 + pulse * 0.5)
        const color = COLORS[idx % 3]
        ctx.save()
        ctx.globalAlpha = 0.4 + pulse * 0.4
        ctx.fillStyle = color
        ctx.shadowBlur = 12 * pulse
        ctx.shadowColor = color
        ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.fill()
        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    />
  )
}
