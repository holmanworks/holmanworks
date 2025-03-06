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
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'system-ui', 'sans-serif'],
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
        base:['14px', '18px'],
        lg:['16px', '22px'],
        xl:['18px', '24px'],
        '2xl':['20px',{
          lineHeight: '26px',
          letterSpacing: '-.25px',
        }],
        '3xl':['24px',{
          lineHeight: '30px',
          letterSpacing: '-.5px',
        }],
        '4xl':['28px',{
          lineHeight: '34px',
          letterSpacing: '-.5px',
        }],
        '5xl':['32px',{
          lineHeight: '38px',
          letterSpacing: '-.5px',
        }],
        '6xl':['36px',{
          lineHeight: '42px',
          letterSpacing: '-.5px',
        }],
        '7xl':['48px',{
          lineHeight: '50px',
          letterSpacing: '-.5px',
        }],
        '8xl':['56px',{
          lineHeight: '58px',
          letterSpacing: '-.5px',
        }],
        '9xl':['64px',{
          lineHeight: '66px',
          letterSpacing: '-1px',
        }],
        '10xl':['72px',{
          lineHeight: '72px',
          letterSpacing: '-1px',
        }],
      },
    },
  },
  plugins: [],
}
