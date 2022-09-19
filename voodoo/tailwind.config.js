module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ultra: "2048px",
      },
      keyframes: {
        bounceOnce: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        bounceTwice: {
          "0%": {
            transform: "translateY(0)",
          },
          "25%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
          "75%": {
            transform: "translateY(-25%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bounceOnce: "bounceOnce 0.25s ease-in-out",
        bounceTwice: "bounceTwice 1s cubic-bezier(0.8, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};
