module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      secondary: "#F4F2ED",
      black: "black",
      white: "white",
      godzprimary: "#362706",
      godzsecond: "#464E2E",
      godzthird: "#ACB992",
      godzfourth: "#E9E5D6",
    },
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
    extend: {
      backgroundImage: {
        underline1: "url('./assets/Underline1.svg')",
        underline2: "url('./assets/Underline2.svg')",
        underline3: "url('./assets/Underline3.svg')",
        underline4: "url('./assets/Underline4.svg')",
        highlight3: "url('./assets/Highlight3.svg')",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
