<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '~~/components/Navbar.vue'

export default {
  components: { Navbar}
}
</script>

<style scoped>
body {
  margin: 0 !important;
}
</style>