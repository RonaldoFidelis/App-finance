/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Login and register display
        'font-main-login': '#C6CAD3',
        'bg-login': '#1D212D',
        'bg-display-login': '#232937',
        'bg-input': '#293040',
        'btn-login': '#055F2E',
        'btn-login-confirm': '#198F24',
        // home app
      }
    },
  },
  plugins: [],
}