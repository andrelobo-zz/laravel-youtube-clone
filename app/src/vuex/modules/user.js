
import * as types from 'src/vuex/mutation-types'

const state = {
  profile: ''
}

const mutations = {
  [types.GET_PROFILE] (state, profile) {
    state.profile = profile
  }
}

export default {
  state,
  mutations
}
