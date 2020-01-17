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
    '@nuxtjs/google-analytics',
    'nuxt-mq',
    '@nuxtjs/sitemap',
    ['vue-scrollto/nuxt', { 
        duration: 1000,
        offset: -20,
        easing: [0.00, 0.0, 0.0, 1.0],
        onDone: () => {}
    }],
    'nuxt-webfontloader'
  ],
  devModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.scss'
  },
  webfontloader: {
    google: {
      families: ['Black Han Sans', 'Montserrat:500,600,700', 'Bree Serif', 'Lato:300,400']
    }
  },
  googleAnalytics: {
    id: 'UA-135103429-1'
  },
  mq: {
    defaultBreakpoint: 'mobile',
    breakpoints: {
      mobile: 640,
      tablet: 1024,
      desktop: Infinity,
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
      '/design/logopicker',
      '/design/appcino',
      '/design/influence',
      '/design/adoption'
    ]
  },
  /*
  ** Build configuration
  */
  purgeCSS: {
    whitelist: ['text-purple', 'text-red', 'text-blue-light', 'text-yellow', 'text-blue-press', 'text-green']
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
