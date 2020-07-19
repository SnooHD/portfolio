/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'xs': '460px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
      'opacity-transform': ['opacity', 'transform']
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
      'dev-mobile-blob': 'translateY(-45%) scale(1.5)',
      'dev-blob': 'scale(1.2)',
      'mobile-top': 'translateY(33px)',
      'dev-blob-center': 'scale(1.2) translateX(50%)',
      'header-blob': 'scale(.8) translate(20%, -10%)',
      'none': 'none',
      'balloon-active': 'translateX(-50%) translateX(9px) translateY(-20px)',
      'balloon-closed': 'translateX(-50%) translateX(9px) translateY(-10px)',
      'balloon-triangle': 'translateX(-50%) translateY(12px)',
      'bracket-small': 'translate(9%, 24%) scale(.8)',
      'js-small': 'translate(5%, 22%) scale(.8)',
      'translate-z-0': 'translateZ(0)'
    },
    translate: {
      'fix-text': ['0', '2px'],
      'center-right': ['50%', '0'],
      'link-center': ['50%', '20px'],
      'footer-blob': ['10%', '0'],
      'footer-bear': ['50%', '-50%'],
      'sm-m-blob': ['-17%', '-2%'],
      'sm-m-blob-active': ['-56%', '-34%'],
      'm-blob': ['-14%', '-2%'],
      'menu-active': ['300px', '150px'],
      'x-120px': ['-120px', '0'],
      'none': ['0', '0'],
      '-8': ['-8%', '0'],
      '-1rem': ['-1rem', '0'],
      'chrome-view': ['0', '79px'],
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
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'blue-dark': '#2B3F7E',
      'blue-mid': '#2877B2',
      'blue-press': '#23669a',
      'yellow-mid': '#F3B202',
      'yellow-press': '#d49c02',
      'yellow-light': '#FFC975',
      'green': '#41B883',
      'blue-light': '#5EC6F2',
      'blue-md-dark': '#2d6a82',
      'gray-blue': '#3C5768',
      'purple': '#515884',
      'dark': '#414141',
      'light': '#F1F4F7',
      'gray-border': '#D8D8D8',
      'orange': '#ff9337',
      'gray': '#69787F',
      'light-gray': '#D5DAEB',
      'red': '#F25E5E',
      'none': 'transparent',
      'mid-gray': '#ececec'
    },
    fontFamily: {
      'galano': ['GalanoGrotesque', 'sans-serif']
    },
    extend: {
      fontSize: {
        'tiny': '0.75rem',
        'mid': '0.9375rem',
        '1xl': '1.3rem',
        '2.5xl': '1.65rem',
        '5.5xl': '3.25rem',
        '7xl': '5rem'
      },
      lineHeight: {
        'tighter': '1.1',
      },
      opacity: {
        '40': '.4',
        '60': '.6'
      },
      zIndex: {
        '-1': '-1',
        '99': '99'
      },
      width: {
        '96': '24rem',
        '84': '21rem',
        '80': '20rem',
        '280px': '280px',
        '777px': '777px',
        '363px': '363px',
        '400px': '400px',
        '478px': '478px',
        '276px': '276px',
        '405px': '405px',
        '640px': '640px',
        '25px': '25px',
        '120%': '120%',
        '320': '320%',
        '16px': '16px',
        '8px': '8px',
        '60vw': '60vw',
        'contact': 'calc(100% + 2rem)',
        'contact-mobile': 'calc(100% + 1rem)'
      },
      height: {
        '1px': '1px',
        '8px': '8px',
        '1/2': '50%',
        '75px': '75px',
        '150px': '150px',
        '177px': '177px',
        '364px': '364px',
        '428px': '428px',
        '500px': '500px',
        '347px': '347px',
        '445px': '445px',
        '240px': '240px',
        '180px': '180px',
        '25px': '25px'
      },
      maxHeight: {
        '74px': '74px',
        'auto': 'auto'
      },
      inset: {
        '-4': '-4%',
        '-5': '-5%',
        '-6': '-6%',
        '-7': '-7%',
        '-8': '-8%',
        '-10': '-10%',
        '-11': '-11%',
        '-12': '-12%',
        '-14': '-14%',
        '-20': '-20%',
        '-25': '-25%',
        '-30': '-30%',
        '-40': '-40%',
        '15': '15%',
        '-2px': '-2px',
        '-8px': '-8px',
        '-1px': '-1px',
        '-15px': '-15px',
        '68px': '68px',
        '62px': '62px',
        '25px': '25px',
        '14px': '14px',
        '9': '9%',
        '10': '10%',
        '11': '11%',
        '30': '30%',
        '50': '50%',
        '60': '60%',
        '75': '75%',
        '100': '100%',
        '22': '22%',
        '2': '2%',
        '4': '4%',
        '5': '5%',
        '6': '6%',
        '-40px': '-40px',
        '8px': '8px',
        '11px': '11px',
        '20px': '20px'
      },
      padding: {
        'dev-item': 'calc(1rem + 1px)',
        'dev-item-active': 'calc(1rem + 8px)',
        'full': '100%',
        '52px': '52px',
        '77px': '77px',
        '59px': '59px',
        '21%': '21%',
        '17%': '17%',
        '3.5': '.9rem',
        '177.7%': '177.7%',
        '56.3%': '56.3%'
      },
      margin: {
        '44': '11rem',
        '-15px': '-15px',
        '1px': '1px',
        '8px': '8px',
        '12.7%': '12.7%',
        '15': '3.75rem',
      },
      spacing: {
        '14': '3.25rem'
      },
      boxShadow: {
        'lg-light': '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'md-light': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.025)',
        'top': '0px -1px 10px 0px rgba(0, 0, 0, 0.2)',
        'window': '0px 10px 50px rgba(0, 0, 0, 0.02), 0px 15px 30px rgba(0, 0, 0, 0.07), 0px 0px 1px rgba(0, 0, 0, 0.3)'
      },
      borderRadius: {
        'mid': '0.3125rem'
      },
      borderWidth: {
        '1': '1px',
        '14': '14px'
      },
      maxWidth: {
        '267px': '267px',
        '616px': '616px',
        '1100': '1100px'
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
    boxShadow: ['responsive', 'before', 'after', 'hover', 'active', 'group-active'],
    transformBox: ['responsive'],
    transitionProperty: ['responsive', 'before', 'after'],
    transitionDuration: ['responsive', 'before', 'after'],
    transitionTimingFunction: ['responsive', 'before', 'after'],
    transitionDelay: ['responsive', 'before', 'after'],
    willChange: ['responsive', 'before', 'after'],
    opacity: ['responsive', 'group-hover', 'hover'],
    pointerEvents: ['responsive', 'group-hover'],
    position: ['responsive', 'before', 'after'],
    inset: ['responsive', 'before', 'after'],
    width: ['responsive', 'before', 'after'],
    height: ['responsive', 'before', 'after'],
    padding: ['responsive', 'before', 'after'],
    margin: ['responsive', 'before', 'after'],
    display: ['responsive', 'before', 'after'],
    backgroundColor: ['responsive', 'hover', 'before', 'after'],
    color: ['responsive', 'hover', 'before', 'after']
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
    require('tailwindcss-interaction-variants'),
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')()
  ]
}
