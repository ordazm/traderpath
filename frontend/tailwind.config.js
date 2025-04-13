/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Fondos
        bg: {
          dark: '#2D2D2D',
          light: '#F5F5F5',
          'comp-dark': '#3A3A3A',
          'comp-light': '#E0E0E0',
        },

        // ✨ Hover & Focus
        hover: {
          1: '#FF6F00',
          2: '#9C27B0',
          'btn-1': '#FF4C00',
          'btn-2': '#8E24AA',
        },
        ring: {
          1: '#FF6F00',
          2: '#9C27B0',
        },
        focus: {
          1: '#FF6F00',
          2: '#9C27B0',
        },

        // 🖋️ Texto
        text: {
          dark: '#B0B0B0',
          white: '#333333',
        },

        // 🧾 Títulos
        h1: {
          dark: '#FF6F00',
          light: '#FF6F00',
        },
        h2: {
          dark: '#FF9E45',
          light: '#FF9E45',
        },
        h3: {
          dark: '#FFBC80',
          light: '#FFBC80',
        },

        // ⚠️ Alertas
        alert: {
          red: '#F44336',
          green: '#00FF00',
        },

        // 🌈 Adicionales
        'fuchsia-neon': '#F400FF',
        'yellow-neon': '#FFFF00',
        'green-neon': '#00FF00',
      },

      // Tipografía
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}
