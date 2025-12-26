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
        'cyber-purple': '#9D4EDD',
        'neon-cyan': '#00F5FF',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #FF2D55 0%, #9D4EDD 100%)',
        'gradient-accent-blue': 'linear-gradient(135deg, #3A8BFF 0%, #00F5FF 100%)',
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(255, 45, 85, 0.3)',
        'glow-blue': '0 0 20px rgba(58, 139, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(157, 78, 221, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
