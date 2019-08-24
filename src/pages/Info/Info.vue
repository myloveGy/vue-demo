<template>
  <div>
    <div class="page-header">
      <h1>{{title}}</h1>
    </div>
    <div class="row" v-html="html"></div>
  </div>
</template>

<script type="text/javascript">

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Info',
    data() {
      return {
        title: 'PHP Info 的信息',
      }
    },
    methods: {
      ...mapActions(['getPhpInfoAction']),
    },
    created() {
      this.getPhpInfoAction()
    },
    computed: {
      ...mapState({
        html: state => state.phpInfo,
      }),
    },
  }
</script>
