// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {

      // ─── Paleta de colores AnaGlaam ───────────────────────────
      colors: {
        primary:   '#660005',   // Rojo vino — CTAs, navbar, acentos
        secondary: '#DF8F9C',   // Rosa palo — hover states, gradientes
        cream:     '#FAF4D4',   // Crema/marfil — fondo principal
        dark:      '#1A0000',   // Casi negro rojizo — textos
        soft:      '#F2DFE3',   // Rosa suave — fondos alternos
        wine: {
          50:  '#FFF0F0',
          100: '#FFD6D7',
          500: '#990008',
          700: '#660005',       // = primary
          900: '#330003',
        },
        rose: {
          100: '#FAEEF1',
          300: '#EDB8C3',
          400: '#DF8F9C',       // = secondary
          600: '#C4607A',
        },
      },

      // ─── Tipografía AnaGlaam ──────────────────────────────────
      fontFamily: {
        bebas:    ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        lobster:  ['Lobster', ...defaultTheme.fontFamily.sans],
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        inter:    ['Inter', ...defaultTheme.fontFamily.sans],
        sans:     ['Inter', ...defaultTheme.fontFamily.sans],
      },

      // ─── Tamaños tipográficos custom ─────────────────────────
      fontSize: {
        'display-xl': ['6rem',  { lineHeight: '1',    letterSpacing: '0.02em' }],
        'display-lg': ['4.5rem',{ lineHeight: '1',    letterSpacing: '0.02em' }],
        'display-md': ['3rem',  { lineHeight: '1.1',  letterSpacing: '0.01em' }],
        'display-sm': ['2rem',  { lineHeight: '1.2',  letterSpacing: '0.01em' }],
      },

      // ─── Espaciado ────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },

      // ─── Animaciones ──────────────────────────────────────────
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        borderSpin: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'marquee':      'marquee 25s linear infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-in-up':   'fadeInUp 0.7s ease-out forwards',
        'scale-in':     'scaleIn 0.5s ease-out forwards',
        'border-spin':  'borderSpin 3s ease infinite',
      },

      // ─── Box shadows ─────────────────────────────────────────
      boxShadow: {
        'glow-primary':   '0 0 30px rgba(102, 0, 5, 0.25)',
        'glow-secondary': '0 0 30px rgba(223, 143, 156, 0.35)',
        'card':           '0 4px 24px rgba(26, 0, 0, 0.08)',
        'card-hover':     '0 12px 40px rgba(26, 0, 0, 0.15)',
      },

      // ─── Bordes ───────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ─── Backdrop blur ───────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
