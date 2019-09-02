<template>
  <div>
    <div class="page-header">
      <h1 v-html="title"></h1>
    </div>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <item v-for="(item, key) in list" :data="item" :key="key"/>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item'
  import {mapActions, mapState} from 'vuex'

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
    methods: {
      ...mapActions(['getListAction']),
    },
    created() {
      this.getListAction()
    },
    computed: {
      ...mapState({
        list: state => state.list.data,
      }),
    },
  }
</script>
