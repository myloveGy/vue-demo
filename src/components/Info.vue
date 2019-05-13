<template>
  <div>
    <div class="page-header">
      <h1>{{title}}</h1>
    </div>
    <div class="row" v-html="html"></div>
  </div>
</template>

<script type="text/javascript">
  import {Process} from '../utils/process'
  import {getInfoApi} from '../services'
  import {get} from '../utils/helper'

  export default {
    name: 'Info',
    data() {
      return {
        title: 'PHP Info 的信息',
      }
    },
    computed: {
      html() {
        if (this.$store.state.phpInfo === '') {
          const me = this
          Process(function* () {
            yield getInfoApi()
          }, false, function* (e) {
            if (get(e, 'status') == 200 && get(e, 'statusText') == 'OK') {
              me.$store.commit('setPhpInfo', get(e, 'data'))
            } else {
              console.info('error', e)
            }
          })
        }

        return this.$store.state.phpInfo
      },
    },
  }
</script>
