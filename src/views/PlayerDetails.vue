<template>
  <h1> player is id {{ id }} </h1>

</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id 
        }
    }
} 
</script>

<style>

</style>