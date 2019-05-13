// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Config from './config'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import {Process} from './utils/process'
import {getPhpApi} from './services'

Vue.config.productionTip = false
Vue.prototype.Config = Config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data() {
    let self = this
    return {
      strAceUrl: self.Config.resourceUrl + '/ace',
    }
  },
  methods: {
    goHome() {
      this.$router.push({path: '/'})
    },
  },
  computed: {
    php() {
      if (this.$store.state.php.version === '') {
        const me = this
        Process(function* () {
          const data = yield getPhpApi()
          me.$store.commit('setPhp', data)
        })
      }

      return this.$store.state.php
    },
  },
})
