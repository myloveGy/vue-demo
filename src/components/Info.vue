<template>
  <div>
    <div class="page-header">
      <h1>{{title}}</h1>
    </div>
    <div class="row" v-html="html"></div>
  </div>
</template>

<script type="text/javascript">
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
          this.$http.get(this.Config.serverHost, {
            params: {
              action: 'info',
            },
          }).then(
            function (response) {
              this.$store.commit('setPhpInfo', response.body)
            })
        }

        return this.$store.state.phpInfo
      },
    },
  }
</script>
