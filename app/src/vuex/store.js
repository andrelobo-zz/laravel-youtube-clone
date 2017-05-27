import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

import api from './modules/api'
import user from './modules/user'
import video from './modules/video'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    api,
    user,
    video
  },
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
