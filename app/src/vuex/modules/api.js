import * as types from 'src/vuex/mutation-types'
import { API } from 'src/api'

const state = {
  authentication: null,
  errors: []
}

const mutations = {
  [types.AUTHENTICATE] (state, authentication) {
    state.authentication = authentication
    API.defaults.headers.common['Authorization'] = `Bearer ${authentication.token}`
  },
  [types.ERROR] (state, error) {
    if (error.response) {
      state.errors.push(error.response)
      // If we get unauthenticated, we set authentication to null
      // TODO: Should try to get new token with refresh token
      if (error.response.status === 401) {
        state.authentication = null
      }
    }
  }
}

export default {
  state,
  mutations
}
