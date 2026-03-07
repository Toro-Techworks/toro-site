/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'rgba(148, 163, 184, 0.35)',
        background: 'var(--background)',
        foreground: 'var(--text-color)',
        input: 'rgba(148, 163, 184, 0.15)',
        ring: 'var(--primary-green)',
        primary: {
          50: 'rgba(var(--primary-green-rgb), 0.06)',
          100: 'rgba(var(--primary-green-rgb), 0.12)',
          200: 'rgba(var(--primary-green-rgb), 0.18)',
          300: 'rgba(var(--primary-green-rgb), 0.26)',
          400: 'rgba(var(--primary-green-rgb), 0.34)',
          500: 'var(--primary-green)',
          600: 'var(--primary-green)',
          700: 'var(--primary-green-hover)',
          800: 'var(--primary-green-hover)',
          900: 'rgba(var(--primary-green-rgb), 0.9)',
        },
        clay: {
          white: '#F7F9F8',
          glass: 'rgba(255,255,255,0.6)',
          shadow: 'rgba(var(--primary-green-rgb), 0.20)',
          glow: 'rgba(var(--accent-green-rgb), 0.30)',
        },
        dark: {
          clay: '#1A1A1A',
          surface: '#2D2D2D',
          glass: 'rgba(45, 45, 45, 0.6)',
        }
      },
      boxShadow: {
        'clay-sm': '0 2px 4px rgba(var(--primary-green-rgb), 0.10), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        'clay': '0 4px 8px rgba(var(--primary-green-rgb), 0.16), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
        'clay-lg': '0 8px 16px rgba(var(--primary-green-rgb), 0.22), inset 0 4px 8px rgba(255, 255, 255, 0.95)',
        'clay-xl': '0 12px 24px rgba(var(--primary-green-rgb), 0.28), inset 0 6px 12px rgba(255, 255, 255, 1)',
        'clay-green': '0 4px 12px rgba(var(--accent-green-rgb), 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
        'inner-clay': 'inset 0 2px 4px rgba(var(--primary-green-rgb), 0.12), inset 0 -1px 2px rgba(255, 255, 255, 0.8)',
        'glass': '0 8px 32px rgba(var(--primary-green-rgb), 0.16), backdrop-filter: blur(8px)',
      },
      backgroundImage: {
        'gradient-emerald': 'linear-gradient(135deg, rgba(var(--primary-green-rgb), 0.95) 0%, rgba(var(--accent-green-rgb), 0.9) 100%)',
        'gradient-mint': 'linear-gradient(135deg, #FFFFFF 0%, #E8F3EF 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(var(--primary-green-rgb), 0.85) 0%, rgba(var(--primary-green-rgb), 0.98) 100%)',
      },
      backdropBlur: {
        'clay': '12px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'clay-press': 'clayPress 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(var(--accent-green-rgb), 0.30)' },
          '50%': { boxShadow: '0 0 40px rgba(var(--accent-green-rgb), 0.60)' },
        },
        clayPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
