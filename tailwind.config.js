/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Text: '#0e0a10',
        Background: '#ece6ef',
        PrimaryButton: '#b9ccad',
        SecondaryButton: '#f8f6f9',
        Accent: '#f0fdfa'
        
      },
    },
  },
  plugins: [],
}

