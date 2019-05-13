<template>
  <div>
    <div class="page-header">
      <h1 v-html="title"></h1>
    </div>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <item v-for="(list, key) in lists" :data="list" :key="key"/>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'
  import {Process} from '../../utils/process'
  import {getIndexApi} from '../../services'

  export default {
    name: 'index',
    data() {
      return {
        title: '我的Web服务器 <small> 选择需要进行的操作 </small>',
      }
    },
    components: {
      Item,
    },
    computed: {
      lists() {
        if (this.$store.state.lists.length === 0) {
          const me = this
          Process(function* () {
            const data = yield getIndexApi()
            me.$store.commit('setLists', data)
          })
        }

        return this.$store.state.lists
      },
    },
  }
</script>
