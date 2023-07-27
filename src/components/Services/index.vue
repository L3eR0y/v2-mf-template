<template lang="pug">
div Administration View
</template>

<script lang="ts">
  export default {
    name: 'Services',
    components: {},
    data() {
      return {
        loaded: true,
        list: []
      }
    },
    async created() {
      console.log('Created', this)
      this.list = await this.$store.dispatch('ui/getAvailableServices')
      this.loaded = true
    },
    computed: {},
    methods: {},
  }
</script>