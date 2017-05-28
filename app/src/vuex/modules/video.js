import * as types from 'src/vuex/mutation-types'

const state = {
  all: [],
  single: {},
  upload: {}
}

const mutations = {
  [types.GET_VIDEOS] (state, videos) {
    state.all = videos
  },
  [types.GET_VIDEO] (state, video) {
    state.single = video
  },
  [types.UPLOAD_VIDEO] (state, video) {
    state.upload = video
  }
}

export default {
  state,
  mutations
}
