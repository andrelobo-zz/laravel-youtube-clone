import store from 'src/vuex/store'

import { AUTHENTICATE, ERROR } from 'src/vuex/mutation-types'
import { API } from './'

import { getProfile } from './user'

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
    client_secret: 'XluVecXnXXW0rbdwx9ji86WtdlbQyMVnwcZuQjLS',
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

    return getProfile()
  })
  .catch(err => {
    store.commit(ERROR, err)
    return Promise.reject(err)
  })
}
