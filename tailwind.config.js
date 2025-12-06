/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // For body text
        title: ['Kreon', 'sans-serif'], // For body text
        display: ['plus jakarta sans', 'sans-serif'], // For headings
      },
      fontWeight:{
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize:{
        xs:['10px', '12px'],
        sm:['12px', '16px'],
        'base':['14px',{
          lineHeight: '18px',
          letterSpacing: '-.1px',
        }],
        'lg':['16px',{
          lineHeight: '21px',
          letterSpacing: '-.2px',
        }],
        'xl':['18px',{
          lineHeight: '22px',
          letterSpacing: '-.2px',
        }],
        '2xl':['20px',{
          lineHeight: '24px',
          letterSpacing: '-.2px',
        }],
        '3xl':['24px',{
          lineHeight: '29px',
          letterSpacing: '-.3px',
        }],
        '4xl':['32px',{
          lineHeight: '36px',
          letterSpacing: '-.5px',
        }],
        '5xl':['36px',{
          lineHeight: '40px',
          letterSpacing: '-.5px',
        }],
        '6xl':['40px',{
          lineHeight: '40px',
          letterSpacing: '-1px',
        }],
        '7xl':['48px',{
          lineHeight: '48px',
          letterSpacing: '-1px',
        }],
        '8xl':['56px',{
          lineHeight: '56px',
          letterSpacing: '-1px',
        }],
        '9xl':['64px',{
          lineHeight: '64px',
          letterSpacing: '-1px',
        }],
        '10xl':['72px',{
          lineHeight: '72px',
          letterSpacing: '-1.5px',
        }],
      },
    },
  },
  plugins: [],
}
