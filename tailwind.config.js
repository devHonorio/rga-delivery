/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-roboto-mono)"],
      },
      animation: {
        float: "float 3s linear 0s",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    }, //animation: float 2s linear 0s infinite alternate both;
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      // strategy: 'class', // only generate classes
    }),
  ],
};
