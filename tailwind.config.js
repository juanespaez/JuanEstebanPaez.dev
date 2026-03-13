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
        bg:     '#050810',
        bg2:    '#0A1628',
        blue:   '#00D4FF',
        violet: '#7B61FF',
        mint:   '#00FFB2',
        snow:   '#F0F4FF',
        muted:  '#6B7A9A',
      },
      backgroundImage: {
        'grad-br': 'linear-gradient(135deg, #00D4FF, #7B61FF)',
        'grad-full': 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 50%, #00FFB2 100%)',
      },
      borderColor: {
        DEFAULT: 'rgba(0,212,255,0.15)',
      },
      boxShadow: {
        glow:    '0 0 32px rgba(0,212,255,0.3)',
        'glow-lg': '0 0 48px rgba(0,212,255,0.5)',
        card:    '0 24px 64px rgba(0,212,255,0.1)',
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
