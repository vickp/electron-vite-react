/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '800px',
      desktop: '1080px',
    },
    colors: {
      background: '#FFFFFF',
      primary: '#C59764',
      secondary: '#282A29',
      tertiary: '#6E9F9F',
      gray01: '#7C7C7C',
      gray02: '#AEAEAE',
      gray03: '#C5C5C5',
      gray04: '#DCDCDC',
      gray05: '#EEEEEE',
      gray06: '#F4F4F4',
      brownGradationStart: '#DCB379',
      brownGradationEnd: '#D29757',
      blackGradationStart: '#40424E',
      blackGradationEnd: '#646874',
      manateeGradationStart: '#6D7585',
      manateeGradationEnd: '#A6AFC1',
      grayGradationStart: '#696969',
      grayGradationEnd: '#7C7C7C',
      warningRed: '#D13737',
      warningRedLight: '#F8EAE8',
    },
    extend: {
      animation: {
        'bounce-small': 'bounce-small 1s ease-in-out infinite',
      },
      keyframes: {
        'bounce-small': {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
