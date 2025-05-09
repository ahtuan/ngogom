/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7DB0C5",
          dark: "#2F6673",
          DEFAULT: "#2F6673",
        },
        beige: "#F2EDDC",
        orange: "#F2AE72",
        black: "#262626",
      },
    },
  },
  plugins: [],
};
