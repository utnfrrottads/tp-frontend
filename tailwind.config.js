const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.gray.400")} ${theme(
            "colors.gray.200"
          )}`,
          scrollbarWidth: "32px",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "10px",
          width: "10px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.gray.400"),
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
          borderRadius: "10px",
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
          borderRadius: "10px",
          backgroundColor: "#F5F5F5",
        },
      });
    }),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
