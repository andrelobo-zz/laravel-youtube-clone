import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

import api from './modules/api'
import user from './modules/user'
import video from './modules/video'
import alert from './modules/alert'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

const plugins = [
  createPersistedState()
]

export default new Vuex.Store({
  modules: {
    api,
    user,
    video,
    alert
  },
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger(), ...plugins] : plugins
})
