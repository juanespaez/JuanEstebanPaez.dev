# Juan Esteban Paez Gil — Personal Portfolio

Personal portfolio website built with Vite + React + TypeScript + Tailwind CSS.

## Tech Stack

- **Vite** — build tool and dev server
- **React 19** — UI framework
- **TypeScript** — type safety
- **Tailwind CSS v3** — utility-first styling

## Project Structure
```
portfolio/
├── index.html                  # Entry point + SEO meta tags
├── vite.config.ts
├── tailwind.config.js          # Design tokens (colors, fonts, animations)
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx                # React root
    ├── App.tsx                 # Layout composition
    ├── data/
    │   └── index.ts            # ⭐ All content lives here — edit this to update the site
    ├── types/
    │   └── index.ts            # TypeScript interfaces
    ├── context/
    │   └── LanguageContext.tsx # EN/ES language switcher
    ├── hooks/
    │   ├── useScrollReveal.ts  # IntersectionObserver scroll animations
    │   └── useMousePosition.ts # Custom cursor tracking
    ├── styles/
    │   └── globals.css         # Tailwind directives + minimal custom CSS
    └── components/
        ├── ui/
        │   ├── NeuralBackground.tsx  # Animated 3D canvas background
        │   └── Cursor.tsx            # Custom cursor
        ├── layout/
        │   ├── Navbar.tsx
        │   └── Footer.tsx
        └── sections/
            ├── Hero.tsx
            ├── About.tsx
            ├── Skills.tsx
            ├── Projects.tsx
            ├── Education.tsx
            └── Contact.tsx
```

## Getting Started
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## How to Update Content

All site content is centralized in **`src/data/index.ts`**. You never need to touch component files just to update text or add items.

### Add a new project
```ts
// In src/data/index.ts, add to PROJECTS array:
{
  id: 5,
  icon: '🚀',
  title: { en: 'My New Project', es: 'Mi Nuevo Proyecto' },
  description: { en: '...', es: '...' },
  tags: ['Python', 'AWS'],
  highlight: { en: 'Key achievement', es: 'Logro clave' },
}
```

### Add a new skill category
```ts
// In src/data/index.ts, add to SKILL_CATEGORIES array:
{
  id: 'devops',
  title: { en: 'DevOps', es: 'DevOps' },
  skills: ['Docker', 'GitHub Actions'],
}
```

### Add a new section
1. Create `src/components/sections/MySection.tsx`
2. Import and add it in `src/App.tsx`
3. Add any data it needs to `src/data/index.ts`
4. Add a nav link in the `NAV_ITEMS` array in `src/data/index.ts`

## Design Tokens

All colors and fonts are defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `bg` | `#050810` | Page background |
| `bg2` | `#0A1628` | Card background |
| `blue` | `#00D4FF` | Primary accent |
| `violet` | `#7B61FF` | Secondary accent |
| `mint` | `#00FFB2` | Highlight / success |
| `snow` | `#F0F4FF` | Primary text |
| `muted` | `#6B7A9A` | Secondary text |

## Deployment

The easiest free options:

**Vercel (recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify**
- Push to GitHub
- Connect repo at netlify.com
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**
```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## Languages

The site supports English and Spanish via the `LanguageContext`.  
All translatable strings use the `{ en: '...', es: '...' }` pattern and are translated with the `t()` helper from `useLanguage()`.

## Contact

- **Email:** juanespg03@gmail.com
- **LinkedIn:** [juan-esteban-paez-gil](https://www.linkedin.com/in/juan-esteban-paez-gil-595988273/)
- **GitHub:** [juanespaez](https://github.com/juanespaez)
