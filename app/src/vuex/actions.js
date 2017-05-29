import * as types from './mutation-types'

/**
 * Authentication
 */
import * as auth from '../api/authenticate'

export const unauthenticate = ({commit}) => {
  commit(types.AUTHENTICATE, null)
}
export const authenticate = ({commit}, {username, password}) => {
  return auth.authenticate(username, password)
  .then(({data}) => {
    commit(types.AUTHENTICATE, {
      token: data.access_token,
      expires: data.expires_in,
      refresh: data.refresh_token
    })
  })
  .catch(err => {
    commit(types.ALERT_SHOW,
      {title: 'Login failed', message: 'Wrong username or password', type: 'danger'})
    return Promise.reject(err)
  })
}

/**
 * Alert
 */
export const showAlert = ({commit}, options) => {
  commit(types.ALERT_SHOW, options)
}

export const hideAlert = ({commit}, alert) => {
  commit(types.ALERT_HIDE, alert)
}
