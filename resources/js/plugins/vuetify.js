// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import en from 'vuetify/lib/locale/en'

Vue.use(Vuetify)

const opts = {}

// export default new Vuetify(opts)
export default new Vuetify({
    icons: {
      iconfont: 'mdiSvg'
    },
    theme: {
      dark: true,
      options: {
        customProperties: true
      },
      themes: {
        dark: {
          appBar: '#2a006c',
          background: '#31007d',
          drawer: '#EC407A',
          footer: '#2a006c',
          primary: '#EC407A',
          secondary: '#31007d',
          accent: '#EC407A'
        },
        light: {
          appBar: '#f7f7f7',
          background: '#ffffff',
          drawer: '#31007d',
          footer: '#f7f7f7',
          primary: '#31007d',
          secondary: '#EC407A',
          accent: '#EC407A'
        }
      }
    },
    lang: {
      locales: { en },
      current: 'en'
    }
  })
