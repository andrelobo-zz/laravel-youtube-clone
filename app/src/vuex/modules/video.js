import * as types from 'src/vuex/mutation-types'

const state = {
  all: [],
  single: {}
}

const mutations = {
  [types.GET_VIDEOS] (state, videos) {
    state.all = videos
  },
  [types.GET_VIDEO] (state, video) {
    state.single = video
  }
}

export default {
  state,
  mutations
}
