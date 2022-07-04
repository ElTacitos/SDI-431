<template>
  <div>
    {{ props.attributes.name }} - {{ props.attributes.color }}
    <img :src="props.attributes.image" style="height: 10em" alt="img">
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    attributes: {
      type: [Object],
    }
  })
</script>

<style scoped>

</style>
