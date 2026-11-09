/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090D',
        panel: '#10121A',
        brand: {
          purple: '#8B5CF6',
          blue: '#38BDF8',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,.35), 0 10px 40px -10px rgba(139,92,246,.6)',
        'glow-blue': '0 0 0 1px rgba(56,189,248,.3), 0 10px 40px -12px rgba(56,189,248,.55)',
      },
    },
  },
  plugins: [],
}
