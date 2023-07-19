/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bgColor': '#F7F9FC',
        'myBlack':'#2E293E',
        'myBlue':'#4538D3',
        'myPink':'#FFA5A5',
        'white':'#FFFFFF',
        'myWhite':'#F5EFFC',
        'darkBg':'#261E35',
        'darkCard':'#2E293E',
        'myGreen':'#00E177',
        'myLine':'#ECEEFB',
        'darkLine':'#5E586B',
        'myYellow':'#725002',
        'myGrey':'#584E69'


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
