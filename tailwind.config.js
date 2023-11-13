/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'
import { slate } from 'tailwindcss/colors'

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      boxShadow: {
        blur: `0 0 1rem 1rem ${slate[800]}`
      },
      colors: {
        'text': '#e8e0f0',
        'background': '#050307',
        'primary': '#784ea2',
        'secondary': '#191122',
        'accent': '#7f53ac',
       }, 
    },
  },
  plugins: [],
}

