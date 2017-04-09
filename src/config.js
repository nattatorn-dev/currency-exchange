const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[ process.env.NODE_ENV || 'development' ]

module.exports = Object.assign( {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiBank: {
    endpoint: process.env.API_BANK_URL || 'http://209.126.66.232:8100',
    proxy: '/vendor/bank',
  },
  app: {
    googleAnalytics: {
      appId: process.env.GOOGLE_ANALYTIC_ID || 'UA-XXXXXXXX-X',
    },
    title: 'Currency Exchange',
    description: 'currency exchange (thailand banks) power by react',
    head: {
      titleTemplate: 'Currency Exchange',
      meta: [
        { name: 'description', content: 'currency exchange (thailand banks) power by react' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Currency Exchange' },
        { property: 'og:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Currency Exchange' },
        { property: 'og:description', content: 'Currency Exchange' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@nattatorn-dev' },
        { property: 'og:creator', content: '@nattatorn-dev' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
    },
  },

}, environment )
