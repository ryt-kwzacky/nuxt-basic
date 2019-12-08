require('dotenv').config()
const { API_KEY, microCmsUrl } = process.env

const slugList = {
  items: [
    {
      id: 'test1',
      name: 'test1',
      description: 'test1!'
    },
    {
      id: 'test2',
      name: 'test2',
      description: 'test2!'
    },
    {
      id: '1',
      name: '1',
      description: '1!'
    },
    {
      id: '2',
      name: '2',
      description: '2!'
    }
  ],
  default: {
    id: 'slug',
    name: 'slug',
    description: 'slugs'
  },
  error: {
    id: 'nothing',
    name: 'nothing',
    description: 'nothing'
  }
}

export default {
  mode: 'spa',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    API_KEY: API_KEY || '',
    microCmsUrl: microCmsUrl || ''
  },
  generate: {
    routes() {
      return slugList.items.map((item) => {
        return `articles/${item.id}`
      })
    }
  }
}
