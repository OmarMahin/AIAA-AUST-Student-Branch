/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1150px"
      },
      colors:{
        'darker_blue': '#183D6E',
        'darknest_blue': '#112C50',
        'light-blue': '#2B4B77',
        'font-color': '#1F1F1F'
      },
      fontFamily:{
        'mark': 'Mark',
        'poppins': 'Poppins'
      },
      fontWeight:{
        "heavy": '900',
        'medium': '500',
        'regular': '400',
      }
    },
  },
  plugins: [],
}

