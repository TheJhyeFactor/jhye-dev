import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0D0D0D',
        'snow-white': '#F5F5F5',
        'urban-gray': '#1F1F1F',
        'tokyo-red': '#FF2D55',
        'warm-gray': '#9A9A9A',
        'light-gray': '#CFCFCF',
        'electric-blue': '#3A8BFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans JP', 'sans-serif'],
      },
      borderRadius: {
        'tokyo': '6px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
    },
  },
  plugins: [],
}
export default config
