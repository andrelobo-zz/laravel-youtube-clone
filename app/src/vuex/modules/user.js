import * as types from 'src/vuex/mutation-types'

const state = {
  profile: {},
  single: {}
}

const mutations = {
  [types.GET_PROFILE] (state, profile) {
    state.profile = profile
  },
  [types.GET_USER] (state, user) {
    state.single = user
  }
}

export default {
  state,
  mutations
}
