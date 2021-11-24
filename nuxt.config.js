const pkg = require("./package");

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: "Snoo",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: pkg.description }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "~/plugins/anime", ssr: false },
        { src: "~/plugins/preload", ssr: false },
        { src: "~/plugins/touch", ssr: false }
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        "nuxt-mq", [
            "vue-scrollto/nuxt",
            {
                duration: 600,
                offset: -40,
                easing: [0.34, 1.26, 0.64, 1]
            }
        ]
    ],
    buildModules: ["@nuxtjs/tailwindcss"],
    tailwindcss: {
        configPath: "~/config/tailwind.config.js",
        cssPath: "~/assets/css/tailwind.css"
    },
    mq: {
        defaultBreakpoint: false,
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
            "/design/logopicker",
            "/design/powrful",
            "/design/influence",
            "/design/adoption-support-alliance"
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                });
            }
        }
    }
};