<template>
  <Product v-for="(product, index) in products" :key="index" :attributes="product.attributes"/>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const config = useRuntimeConfig();
  const products = ref([])
  const response = await useFetch(config.strapiApiUrl+'products', {
      headers: {
        'Authorization': 'Bearer ' + config.strapiToken,
        'Content-Type': 'application/json'
      }
    });

  onMounted(() => {
    parseData(response)
  })

  function parseData(response: any): void {
    const data = response.data;
    console.log(data)
    const value = data['_rawValue'].data;
    console.log(value)
    products.value = value;
  }
</script>

<style scoped>

</style>
