const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, '{src,pages,components,theme}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
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
  plugins: [
    plugin(function groupPeer({ addVariant }) {
      let pseudoVariants = [
        // ... Any other pseudo variants you want to support.
        // See https://github.com/tailwindlabs/tailwindcss/blob/6729524185b48c9e25af62fc2372911d66e7d1f0/src/corePlugins.js#L78
        'checked',
      ].map((variant) => (Array.isArray(variant) ? variant : [variant, `&:${variant}`]))

      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === 'function' ? state(ctx) : state
          return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &')
        })
      }
    }),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('tailwindcss-debug-screens'),
  ],
}
