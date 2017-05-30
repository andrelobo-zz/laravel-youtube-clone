import Vue from 'vue'
import App from 'src/App'
import router from 'src/router'
import store from 'src/vuex/store'
import { sync } from 'vuex-router-sync'

// sync store and router state
sync(store, router)

require('bootstrap')

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
