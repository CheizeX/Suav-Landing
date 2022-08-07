/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        splash: ['Splash', 'sans-serif'],
      },
      colors: {
        gray_p: '#EDEDED',
        gray_1: '#F0F0F0',
        gray_2: '#E2E2E2',
        gray_3: '#ADADAD',
        gray_4: '#777777',
        gray_5: '#2B2B2B',
        turquoise: '#00BFCC',
        btn_1: '#FF00FF',
        btn_2: '#05EFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
