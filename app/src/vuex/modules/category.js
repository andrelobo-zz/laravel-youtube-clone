import * as types from 'src/vuex/mutation-types'

const state = {
  top: []
}

const mutations = {
  [types.GET_TOP_CATEGORIES] (state, categories) {
    state.top = categories
  }
}

export default {
  state,
  mutations
}
