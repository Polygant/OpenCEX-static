const development = process.env.NODE_ENV !== 'production'

export default {
  debug: true,
  version: Date.now(),
  generate: {
    exclude: [
      /^\/account/
    ]
  },

  target: 'server',

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: '/main.css' },
    ],
    script: [
      { src: 'https://cdn.tailwindcss.com' }
    ]
  },

  css: [
  ],

  plugins: [
    '@/plugins/axios',
    '@/plugins/highcharts'
  ],

  // serverMiddleware: [
  //   '~/serverMiddleware/redirects.js'
  // ],

  router: {
    scrollBehavior (to, from, savedPosition) {
      return to.name === 'Home' && from.name === 'Home' ? savedPosition : { x: 0, y: 0 }
    }
  },
  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'nuxt-ssr-cache',
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.js' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  env: {
    baseURL: process.env.API_URL
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
      title: process.env.project_title,
      logo: process.env.logo,
      telegram: process.env.telegram,
      facebook: process.env.facebook,
      twitter: process.env.twitter,
      linkedin: process.env.linkedin
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'client/',
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: false
        }
      }
    }
  },

  cache: {
    useHostPrefix: false,
    pages: [
      '/'
    ],
    key (route, context) {
      return development ? false : route
    },
    store: {
      type: 'memory',
      max: 100,
      ttl: 60
    }
  }
}
