import * as types from 'src/vuex/mutation-types'

const state = {
  top: [],
  find: []
}

const mutations = {
  [types.GET_TOP_CATEGORIES] (state, categories) {
    state.top = categories
  },
  [types.FIND_CATEGORIES] (state, categories) {
    state.find = categories
  }
}

export default {
  state,
  mutations
}
