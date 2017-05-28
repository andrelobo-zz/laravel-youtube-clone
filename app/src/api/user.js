import store from 'src/vuex/store'

import { GET_PROFILE, GET_USER, CREATE_USER, ERROR } from 'src/vuex/mutation-types'
import { API } from './'

/**
 * Get current authenticated user's profile
 */
export const getProfile = () => {
  return API.get('/api/users/profile')
  .then(({data}) => {
    store.commit(GET_PROFILE, data)
  })
  .catch(err => {
    store.commit(ERROR, err)
    return Promise.reject(err)
  })
}

/**
 * Get user
 * @return {*|Promise.<T>}
 */
export const getUser = (id) => {
  return API.get(`/api/users/${id}`)
  .then(({data}) => {
    store.commit(GET_USER, data)
  })
  .catch(err => {
    store.commit(ERROR, err)
    return Promise.reject(err)
  })
}

/**
 * Create user
 * @return {*|Promise.<T>}
 */
export const createUser = (name, email, password) => {
  return API.post(`/api/users`, { name, email, password })
  .then(({data}) => {
    store.commit(CREATE_USER, data)
  })
  .catch(err => {
    store.commit(ERROR, err)
    return Promise.reject(err)
  })
}
