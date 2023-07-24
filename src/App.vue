<template lang="pug">
div
    .greet {{ message }}
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello World'
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