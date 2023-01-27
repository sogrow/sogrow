const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['power-grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), require('tailwindcss-debug-screens')],
}
