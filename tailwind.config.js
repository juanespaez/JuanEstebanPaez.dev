/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg:    '#0E0806',
        bg2:   '#1C110A',
        ember: '#FF8A3D',
        coral: '#FF5E5B',
        gold:  '#FFC24B',
        cream: '#FFF4E8',
        muted: '#A18A72',
      },
      backgroundImage: {
        'grad-br': 'linear-gradient(135deg, #FF8A3D, #FF5E5B)',
        'grad-full': 'linear-gradient(135deg, #FFC24B 0%, #FF8A3D 50%, #FF5E5B 100%)',
      },
      borderColor: {
        DEFAULT: 'rgba(255,138,61,0.15)',
      },
      boxShadow: {
        glow:      '0 0 32px rgba(255,138,61,0.35)',
        'glow-lg': '0 0 48px rgba(255,138,61,0.55)',
        card:      '0 24px 64px rgba(255,94,91,0.15)',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'scroll-line':'scrollLine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)'   },
          '50%':      { opacity: '0.5', transform: 'scale(0.8)' },
        },
        scrollLine: {
          '0%':   { left: '-100%' },
          '100%': { left:  '100%' },
        },
      },
    },
  },
  plugins: [],
}
