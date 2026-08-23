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
        brand: {
          50: '#eef6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#0f172a',
        },
        amoled: {
          bg: '#000000',
          card: '#0a0a0c',
          cardBorder: '#18181b',
          subtle: '#121214'
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px -5px rgba(59, 130, 246, 0.4)',
        'glow-gold': '0 0 20px -5px rgba(245, 158, 11, 0.4)',
        'glow-emerald': '0 0 20px -5px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
