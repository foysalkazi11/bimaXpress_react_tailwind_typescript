module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#808080",
          lighter: "#343434",
          light: "#2A2A2A",
          DEFAULT: "#2B2B2B",
          dark: "#101010",
        },
        secondary: {
          light: "#5A5A5A",
          DEFAULT: "#535353",
          dark: "#FFFFFF17",
        },

        fontColor: {
          light: "#E3E3E3",
          gray: "#C8C8C8",
          deepGray: "#C1C1C1",
          darkGray: "#707070",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        myFont: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
