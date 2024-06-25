/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui:{
    themes:["valentine","nord","dracula","dim","aqua","dark","forest","light","coffee","cupcake","cyberpunk","luxury","business"]
  }
}

