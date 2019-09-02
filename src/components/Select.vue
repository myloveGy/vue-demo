<template>
  <select :name="name" :id="id" class="form-control">
    <option v-for="item in data" :value="item.value" :key="item.value">{{item.label}}</option>
  </select>
</template>

<script>
  export default {
    name: 'Select',
    props: {
      name: String,
      id: String,
      data: Array,
    },
  }
</script>
