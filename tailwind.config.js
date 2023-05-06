/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      brandThin: ["font-100", "sans-serif", "serif"],
      brandExtraLight: ["font-200", "sans-serif", "serif"],
      brandLight: ["font-300"],
      brandRegular: ["font-400", "sans-serif", "serif"],
      brandMedium: ["font-500", "sans-serif", "serif"],
      brandSemiBold: ["font-600", "sans-serif", "serif"],
      brandBold: ["font-700", "sans-serif", "serif"],
      brandExtraBold: ["font-800", "sans-serif", "serif"],
      brandBlack: ["font-900", "sans-serif", "serif"],
    },
    colors: {
      coal: "#0f0d0e",
      charcoal: "#231f20",
      gray: "#262522",
      yellow: "#fcba28",
      pink: "#f38ba3",
      green: "#0ba95b",
      lightGreen: "#cfe957",
      purple: "#7b5ea7",
      biege: "#f9f4da",
      blue: "#12b5e5",
      orange: "#fc7428",
      red: "#ed203d",
      white: "#ffffff",
    },
  },
  plugins: [],
}


