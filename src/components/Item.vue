<template>
  <div class="panel panel-default" v-if="data.title && data.lists && data.lists.length > 0">
    <div class="panel-heading" role="tab">
      <h4 class="panel-title">
        <span class="collapsed"> {{ data.title }} </span>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        <div class="row">
          <my-component
              v-for="list in data.lists"
              :item="list"
              :key="list.name"
              :target="data.title == '本地站点' ? '_blank' : '_self'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import MyComponent from './MyComponent'

  export default {
    props: ['data'],
    components: {
      MyComponent,
    },
  }
</script>
