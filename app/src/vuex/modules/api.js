
import * as types from 'src/vuex/mutation-types'
import { API } from 'src/api'

const state = {
  authentication: ''
}

const mutations = {
  [types.AUTHENTICATE] (state, authentication) {
    state.authentication = authentication
    API.defaults.headers.common['Authorization'] = `Bearer ${authentication.token}`
  }
}

export default {
  state,
  mutations
}
