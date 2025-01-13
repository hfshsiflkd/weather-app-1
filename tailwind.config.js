/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React файлуудыг Tailwind ашиглахаар заана
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#0F141E",
        customWhite:"#F3F4F6",
        customBorder:"#d7d5db",
        
      },
    },
  },
  plugins: [],
};