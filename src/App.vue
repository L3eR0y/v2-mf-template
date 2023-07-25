<template lang="pug">
div
    .greet {{ compute_message }}
</template>

<script lang="ts">
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello World'
        }
    },
    computed: {
        compute_message():string {
            return `Message is: ${ this.message }` || ''
        }
    }
}
</script>

<style>
.greet {
    color: red;
    font-weight: 500;
    font-size: 20px;
}
</style>