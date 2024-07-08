// tailwind.config.ts
// const { nextui } = require('@nextui-org/react')

import { nextui } from '@nextui-org/react'

import type { Config } from 'tailwindcss'

export default {
  content: [
    // ...
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { fontFamily: { default: ['Roboto Slab', 'sans-serif'] } },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#ececec',
            default: {
              DEFAULT: '#231f20'
            }
          }
        }
      }
    })
  ]
} satisfies Config
