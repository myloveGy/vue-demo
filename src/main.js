// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Config from './config'
import VueResource from 'vue-resource'
import store from './store'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false
Vue.prototype.Config = Config
Vue.use(VueResource)

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
        this.$http.get(this.Config.serverHost, {
          params: {
            action: 'php',
          },
        }).then(function (response) {
          let json = response.body
          if (json.code === 0) {
            this.$store.commit('setPhp', json.data)
          }
        })
      }

      return this.$store.state.php
    },
  },
})
