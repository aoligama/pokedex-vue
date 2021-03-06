import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './modules/snackbar'
import pokemon from './modules/pokemon'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    snackbar,
    pokemon
  },
  strict: debug,
})
