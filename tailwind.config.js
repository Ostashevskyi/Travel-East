/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        form: "url('/public/assets/images/backgrounds/book-now.png')",
      },
      colors: {
        "white-cream": "rgba(249, 246, 239, 1)",
        "white/80": "rgba(249, 246, 239, 0.8)",
        "card-bg": "rgba(217, 217, 217, 0.03)",
        "sections-bg": "rgba(28, 32, 31, 1)",
        "slider-btn-bg": "rgba(217, 217, 217, 0.1)",
        "deals-card-bg": "rgba(47, 53, 51, 1)",
        "form-iput": "rgba(119, 119, 119, 1)",
      },
      fontFamily: {
        "Lexen-Exa": "Lexen Exa, sans-serif",
      },
    },
  },
  plugins: [],
};
