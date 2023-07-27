<template lang="pug">
div 
  div(v-for="el in list") {{ el.title }}
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
      console.log('LIST: ', this.list)
    },
    computed: {},
    methods: {},
  }
</script>