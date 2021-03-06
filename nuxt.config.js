module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'alan-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      /*
      ** Run ESLint on save
      */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      /**
       * Import global css files by preprocessor stylus
       */
      // find the stylus loader in vue-loader options
      const stylus = config.module.rules[0].options.loaders.stylus.find(e => e.loader === 'stylus-loader')
      // extend default options
      Object.assign(stylus.options, {
        import: [
          '~assets/styles/main.styl'
        ]
      })

      /**
       * Extend the normal vue-loader configuration by adding iview-loader
       */
      const oldVueLoaderConfiguration = config.module.rules[0]
      const newVueLoaderConfiguration = {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: oldVueLoaderConfiguration.options 
          },
          {
            loader: 'iview-loader',
            options: {
              // In order to use prefixed tags in IView,
              // such as '<i-row>' which is the same as <Row>
              prefix: true
            }
          }
        ]
      }
      config.module.rules[0] = newVueLoaderConfiguration
    },
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      }),
      // convert px to rem
      require('postcss-px2rem')({
        remUnit: 12
      })
    ]
  },
  plugins: [
    '~plugins/iview'
  ],
  css: [
    'iview/dist/styles/iview.css'
  ]
}
