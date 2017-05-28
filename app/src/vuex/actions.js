import * as types from './mutation-types'

export const unauthenticate = ({ commit }) => {
  commit(types.AUTHENTICATE, null)
}

export const showAlert = ({ dispatch }, title, message, type, duration, actions) => {
  dispatch(types.ALERT_SHOW, title, message, type, duration, actions)
}

export const hideAlert = ({ dispatch }, alert) => {
  dispatch(types.ALERT_HIDE, alert)
}
