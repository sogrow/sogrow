import { CustomFlowbiteTheme } from 'flowbite-react'

export const customFlowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary:
        'border border-transparent bg-violet-700 text-white hover:bg-violet-500 focus:ring-4 focus:ring-violet-300 disabled:hover:bg-violet-700',
      lightViolet:
        'border border-transparent bg-violet-600 text-white hover:bg-violet-500 focus:ring-4 focus:ring-violet-300 disabled:hover:bg-violet-600',
      secondary:
        'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-violet-700 disabled:hover:bg-white focus:ring-violet-700 focus:text-violet-700:hover:bg-gray-700 focus:ring-2',
    },
  },
  textInput: {
    addon:
      'inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 hover:bg-violet-700 hover:text-white text-sm text-gray-900',
    field: {
      input: {
        colors: {
          gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-violet-500 focus:ring-violet-500',
        },
        withAddon: {
          on: 'rounded-l-lg',
          off: 'rounded-lg',
        },
      },
    },
  },
  spinner: {
    color: {
      violet: 'fill-violet-600',
    },
  },
}
