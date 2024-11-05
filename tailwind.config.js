import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "japan-hero": "url('/assets/images/backgrounds/japan-bg.png')",
        "china-hero": "url('/assets/images/backgrounds/china-bg.png)",
        "korea-hero": "url('/assets/images/backgrounds/korea-bg.png)",
        "form-bg": "url('/assets/images/backgrounds/book-now.png)",
      },
      colors: {
        white: "rgba(249, 246, 239, 1)",
        "white/80": "rgba(249, 246, 239, 0.8)",
        "card-bg": "rgba(217, 217, 217, 0.03)",
        "sections-bg": "rgba(28, 32, 31, 1)",
        "slider-btn-bg": "rgba(217, 217, 217, 0.1)",
      },
      fontFamily: {
        "Lexen-Exa": "Lexen Exa, sans-serif",
      },
    },
  },
  plugins: [],
};
