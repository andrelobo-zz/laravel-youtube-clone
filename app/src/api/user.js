import store from 'src/vuex/store'

import { GET_PROFILE } from 'src/vuex/mutation-types'
import { API } from './'

/**
 * Get current authenticated user's profile
 */
export const getProfile = () => {
  return API.get('/api/users/profile')
  .then(({data}) => {
    store.commit(GET_PROFILE, data)
  })
}
