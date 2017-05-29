import * as types from 'src/vuex/mutation-types'

console.log(types)

const state = {
  all: []
}

const mutations = {
  [types.ALERT_SHOW] (state, {title, message, type, duration, actions}) {
    if (!duration) {
      duration = 4000 // 5 seconds
    }
    if (!actions) {
      actions = []
    }

    state.all.push({
      title,
      message,
      type,
      duration,
      actions,
      show: true
    })
  },
  [types.ALERT_HIDE] (state, alert) {
    const id = state.alerts.indexOf(alert)
    state.list.splice(id, 1)
  }
}

export default {
  state,
  mutations
}
