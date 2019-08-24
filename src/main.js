// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Config from './config'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false
Vue.prototype.Config = Config

import {mapActions, mapState} from 'vuex'

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
    ...mapActions(['getPhpAction']),
    goHome() {
      this.$router.push({path: '/'})
    },
  },
  created() {
    this.getPhpAction()
  },
  computed: {
    ...mapState(['php']),
  },
})
