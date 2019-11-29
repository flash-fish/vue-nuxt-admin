const webpack = require('webpack')
const path = require('path')

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // 在每页渲染前运行 middleware/routers.js 中间件的逻辑
    middleware: 'routers'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#1890ff',
    height: '2px'
  },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/tem-lib'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  server: {
    port: 9999, // default: 3000
    host: '10.100.60.174', // default: localhost,
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://easy-mock.com/mock/5d68b2dc9b32c61f0ca37714',
      pathRewrite: { '^/api' : '/' }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: false,

    babel: {
      plugins: [
        '@babel/plugin-transform-runtime',
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true
          }
        ],
        'lodash'
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if(ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: false
          }
        })
        config.devtool = 'source-map'
      }
      // extend webpack alias
      Object.assign(config.resolve.alias, {
        ['components']: path.resolve(__dirname, 'components'),
        ['utils']: path.resolve(__dirname, 'utils')
      })
    }
  }
}
