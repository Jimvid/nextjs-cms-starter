module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 640px)
      md: "768px", // => @media (min-width: 768px)
      lg: "1024px", // => @media (min-width: 1024px)
      xl: "1280px", // => @media (min-width: 1280px)
    },
    spacing: {
      0: "0.5rem",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
    },
    maxWidth: {
      wrapper: "1024px",
      shortText: "480px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
