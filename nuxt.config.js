const pkg = require("./package");
const rt = require("./siteMapRoutes");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "keywords", name: "keywords", content: 'personal site, vue.js, nuxt.js, javascript' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-32x32.png",
        size: "32x32"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-16x16.png",
        size: "16x16"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
      },
      { rel: "stylesheet", href: "https://unpkg.com/reset-css@3.0.0/reset.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: "~plugins/ga.js", ssr: false }],

  /*
  ** Nuxt.js SiteMapRoutes
  */
  generate: {
    routes: rt.routes
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    [
      "@nuxtjs/sitemap",
      {
        path: "/sitemap.xml",
        hostname: 'https://artdvp.me',
        cacheTime: 1000 * 60 * 15,
        generate: true, // for build
        routes: rt.routes
      }
    ]
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
