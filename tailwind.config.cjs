/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#045AB3',
      secondary: '#000C18',
      lightGray: '#F5FAFF',
      white: '#FFFFFF',
      gray: '#8190A0',
      black: '#000000',
      success: '#04B35F',
      red: '#B30404',
      disable: '#D2D7DD',
    },
    extend: {
      fontFamily: {
        normal: 'PromptRegular',
        light: 'PromptLight',
        bold: 'PromptBold',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#045AB3',
          secondary: '#000C18',
          lightGray: '#F5FAFF',
          white: '#FFFFFF',
          gray: '#8190A0',
          black: '#000000',
          success: '#04B35F',
          red: '#B30404',
          disable: '#D2D7DD',
        },
      },
    ],
  },
};
