import store from 'src/vuex/store'

import { GET_VIDEOS, GET_VIDEO } from 'src/vuex/mutation-types'
import { API } from './'

/**
 * Get current authenticated user's profile
 */
export const getVideos = () => {
  return API.get('/api/videos')
  .then(({data}) => {
    store.commit(GET_VIDEOS, data)
  })
}

/**
 * Get current authenticated user's profile
 */
export const getVideo = (id) => {
  return API.get(`/api/videos/${id}`)
  .then(({data}) => {
    store.commit(GET_VIDEO, data)
  })
}
