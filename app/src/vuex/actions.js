import * as types from './mutation-types'

/**
 * Authentication
 */
import * as APIAuth from '../api/authenticate'

export const logout = ({commit}) => {
  commit(types.AUTHENTICATE, null)
}
export const authenticate = ({commit}, {username, password}) => {
  return APIAuth.authenticate(username, password)
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

/**
 * Category
 */
import * as APICategory from '../api/category'
export const getTopCategories = ({commit}) => {
  return APICategory.getTopCategories()
  .then(({data}) => {
    commit(types.GET_TOP_CATEGORIES, data)
  })
  .catch(err => {
    commit(types.ALERT_SHOW,
      {title: 'API Error', message: 'Failed to get top categories', type: 'danger'})
    return Promise.reject(err)
  })
}
export const findCategories = ({commit}, name) => {
  return APICategory.findCategories(name)
  .then(({data}) => {
    commit(types.FIND_CATEGORIES, data)
  })
  .catch(err => {
    commit(types.ALERT_SHOW,
      {title: 'API Error', message: 'Failed to find categories', type: 'danger'})
    return Promise.reject(err)
  })
}

/**
 * Video
 */
import * as APIVideo from '../api/video'
export const getVideosForCategory = ({commit}, categoryId) => {
  return APIVideo.getVideosForCategory(categoryId)
  .then(({data}) => {
    commit(types.GET_VIDEOS, data)
  })
  .catch(err => {
    commit(types.ALERT_SHOW,
      {title: 'API Error', message: 'Failed to get videos', type: 'danger'})
    return Promise.reject(err)
  })
}

