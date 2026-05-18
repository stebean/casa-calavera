/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C1014",
        brand: {
          green: "#064e3b",
          red: "#991b1b",
          yellow: "#eab308",
          paper: "#BDBD99", // Updated muted paper color
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        hand: ["Permanent Marker", "cursive"], // Added for hand-drawn feel
        serif: ['"Times New Roman"', "Times", "serif"],
        typewriter: ['"Special Elite"', "Courier", "monospace"],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'jitter': 'jitter 0.2s infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        jitter: {
          '0%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(1px, -1px) rotate(-0.5deg)' },
          '50%': { transform: 'translate(-1px, 1px) rotate(0.5deg)' },
          '75%': { transform: 'translate(1px, 1px) rotate(-0.5deg)' },
          '100%': { transform: 'translate(-1px, -1px) rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
