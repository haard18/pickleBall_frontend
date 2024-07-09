/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '340px',
      // => @media (min-width: 340px) { ... }

      'laptop': '540px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui:{
    themes:["valentine","nord","dracula","dim","aqua","dark","forest","light","coffee","cupcake","cyberpunk","luxury","business"]
  }
}

