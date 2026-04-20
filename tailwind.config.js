/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#fcf9f6",
        "on-surface": "#1c1c1a",
        primary: "#5f5e5e",
        secondary: "#775a19",
        tertiary: "#735c00",
        "surface-container-low": "#f6f3f0",
        "surface-container-high": "#eae8e5",
        "surface-variant": "#e5e2df",
        "on-surface-variant": "#4e4639",
        outline: "#7f7667",
        "primary-fixed-dim": "#c8c6c5",
        "inverse-surface": "#31302f",
        "inverse-on-surface": "#f3f0ed",
      },
      fontFamily: {
        serif: ["'Noto Serif'", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.25em",
        label: "0.1em",
      },
    },
  },
  plugins: [],
}
