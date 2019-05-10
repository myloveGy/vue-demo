<template>
  <div class="col-md-3">
    <p class="text-primary">
      <a :href="item.href" :target="target">{{item.name}}</a>
    </p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'my-component',
    props: {
      item: {
        required: true,
      },
      target: {
        type: String,
        default: '_self',
      },
    },
  }
</script>>
