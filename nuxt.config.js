const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Snoo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/touch', ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-mq',
    ['vue-scrollto/nuxt', {
        duration: 400,
        offset: -20,
        easing: [0.00, 0.0, 0.0, 1.0],
        onDone: () => {}
    }],
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.scss'
  },
  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: Infinity
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  generate: {
    routes: [
      '404',
      '/design/logopicker',
      '/design/pwrful',
      '/design/influence',
      '/design/adoption'
    ]
  },
  /*
  ** Build configuration
  */
  purgeCSS: {
    whitelist: [
      'text-yellow-press',
      'bg-red',
      'bg-orange',
      'bg-green',
      'text-yellow-mid',
      'text-blue-mid',
      'text-blue-press',
      'shadow-lg-light',
      'shadow-md-light',
      'translate-contact-stage',
      'transition-opacity-transform',
      'translate-contact-send',
      'pb-dev-item-active',
      'h-177px',
      'lg:h-150px',
      'pb-dev-item',
      'h-75px',
      'opacity-60',
      'pr-4',
      'pr-12',
      'w-48',
      'w-40',
      'opacity-100',
      'opacity-60',
      'opacity-0',
      'xs:pl-4',
      'xs:pt-10',
      'lg:flex',
      'ml-8',
      'sm:ml-20',
      'md:ml-24',
      'justify-start',
      'lg:px-12',
      'xl:px-8',
      'border-none',
      'lg:border-b',
      'pointer-events-auto',
      'pointer-events-none',
      'top-11',
      'top-50',
      'transform-balloon-active',
      'transform-balloon-closed',
      'translate-sm-m-blob-active',
      'sm:translate-sm-m-blob',
      'translate-m-blob',
      'transition-delay-250',
      'transition-800',
      'translate-menu-active',
      'transition-delay-0',
      'transition-750',
      'translate-none',
      'translate-x-120px',
      'shake',
      'text-base',
      'top-6',
      'border-14',
      'triangle',
      'left-100',
      'overflow-y-hidden',
      'border-light-gray',
      'lg:border-b',
      'border-none'
    ]
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
        purgecss: false,
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
