<template>
  <button type="button" :class="`py-2 px-3 text-white font-bold rounded ${color}`">
      <slot></slot>
  </button>
</template>

<script>
export default {
    props:['color'],
    name: 'Button'
}
</script>

<style>

</style>