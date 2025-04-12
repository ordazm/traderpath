/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Asegúrate de que todos los archivos .jsx estén cubiertos
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2D2D2D',               // Fondo oscuro
        'highlight-green': '#4CAF50',        // Verde manzana
        'alert-red': '#F44336',              // Rojo brillante
        'highlight-violet': '#9C27B0',       // Violeta llamativo
      },
    },
  },
  plugins: [],
}
