import store from 'src/vuex/store'

import { AUTHENTICATE } from 'src/vuex/mutation-types'
import { API } from './'

/**
 * Authenticate user
 * @param username
 * @param password
 * @return {Promise}
 */
export const authenticate = async (username, password) => {
  return API.post(`/oauth/token`, {
    grant_type: 'password',
    client_id: '2',
    client_secret: 'uuiKYcO4wNx1gJvK2mnwEZztn7LYG4UgKhh4wIsp',
    scope: '',
    username,
    password
  })
  .then(({ data }) => {
    store.commit(AUTHENTICATE, {
      token: data.access_token,
      expires: data.expires_in,
      refresh: data.refresh_token
    })
  })
}
