/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
      'fill': 'fill',
      'opacity-transform': ['opacity', 'transform'],
      'bg': ['background-color']
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '400': '400ms',
      '500': '500ms',
      '750': '750ms',
      '800': '800ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
      'fill': 'fill'
    },
    transform: {
      'header-blob': 'scale(.8) translate(20%, -10%)',
      'none': 'none',
      'balloon-active': 'translateX(-50%) translateX(9px) translateY(-20px)',
      'balloon-closed': 'translateX(-50%) translateX(9px) translateY(-10px)',
      'balloon-triangle': 'translateX(-50%) translateY(12px)'
    },
    translate: {
      'footer-blob': ['-7%', '0'],
      'footer-penguin': ['38%', '-10%'],
      'sm-m-blob': ['-12%', '0'],
      'sm-m-blob-active': ['-67%', '-36%'],
      'm-blob': ['-9%', '-5%'],
      'menu-active': ['300px', '150px'],
      'x-120px': ['-120px', '0'],
      'none': ['0', '0'],
      '-8': ['-8%', '0'],
      '-1rem': ['-1rem', '0'],
      'chrome-view': ['48px', '79px'],
      '-y10': ['0', '-10%'],
      'x1': ['1px', '0'],
      '-x1': ['-1px', '0'],
      'contact-send': ['200%', '-150%'],
      'contact-stage': ['-200%', '150%']
    },
    scale: {
      'none': '1',
      'grow': '1.05'
    },
    colors: {
      'white': '#FFFFFF',
      'blue-dark': '#1D476D',
      'blue-mid': '#51ABCF',
      'blue-press': '#598AD3',
      'green': '#41B883',
      'blue-light': '#5EC6F2',
      'blue-md-dark': '#2d6a82',
      'purple': '#515884',
      'dark': '#414141',
      'light': '#F4F4F4',
      'gray-border': '#D8D8D8',
      'orange': '#ff9337',
      'gray': '#575757',
      'light-gray': '#9E9E9E',
      'yellow': '#FEB979',
      'red': '#F25E5E',
      'none': 'transparent',
      'mid-gray': '#ececec'
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'bree-serif': ['Bree\ serif', 'serif'],
      'lato': ['Lato', 'sans-serif'],
      'han-sans': ['Black\ Han\ Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        'tiny': '0.75rem',
        'mid': '0.9375rem',
        '1xl': '1.3rem'
      },
      opacity: {
        '40': '.4'
      },
      zIndex: {
        '-1': '-1'
      },
      width: {
        '96': '24rem',
        '80': '20rem',
        '478px': '478px',
        '276px': '276px',
        '405px': '405px',
        '640px': '640px',
        '616px': '616px',
        '25px': '25px',
        '320': '320%',
        'contact-mobile': 'calc(100% + 2rem)'
      },
      height: {
        '364px': '364px',
        '428px': '428px',
        '500px': '500px',
        '327px': '327px',
        '445px': '445px',
        '240px': '240px',
        '150px': '150px',
        '180px': '180px',
        '25px': '25px'
      },
      inset: {
        '-4': '-4%',
        '-11': '-11%',
        '-15': '-15%',
        '11': '11%',
        '25px': '25px',
        '-10': '-10%',
        '14px': '14px',
        '50': '50%',
        '100': '100%',
        '22': '22%',
        '2': '2%',
        '-40px': '-40px',
        '8px': '8px'
      },
      spacing: {
        '14': '3.25rem'
      },
      boxShadow: {
        'design-light': '0px 4px 6px rgba(0, 0, 0, 0.07)',
        'design-dark': '0px 4px 6px rgba(0, 0, 0, 0.2)',
        'window': '0px 10px 50px rgba(0, 0, 0, 0.02), 0px 15px 30px rgba(0, 0, 0, 0.07), 0px 0px 1px rgba(0, 0, 0, 0.3)'
      },
      borderRadius: {
        'mid': '0.3125rem'
      }
    }
  },
  variants: { // all the following default to ['responsive']
    transform: ['responsive', 'hover', 'group-hover', 'before', 'after'],
    transformOrigin: ['responsive'],
    translate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
    opacity: ['responsive', 'group-hover'],
    pointerEvents: ['responsive', 'group-hover'],
    position: ['responsive', 'before', 'after'],
    inset: ['responsive', 'before', 'after'],
    width: ['responsive', 'before', 'after'],
    height: ['responsive', 'before', 'after'],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
    },
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')()
  ]
}
