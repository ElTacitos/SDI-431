<template>
  <Product v-for="(product, index) in products" :key="index" :attributes="product.attributes"/>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const products = ref([])
  const tok = "0e3d7147673970eb14f738d67890629d0d2c1f901aaf3fdefe1d342f642c24a5582eb7f8ab26003b7fbc70fe1562249c89a1a5303830b61f486d5c6f4115ec95d3960335777376fcaffc1339a536ec544a9e788145b24b129669410edf9acde7b780feff0198c0a8029f9f89642d0b318732461d3234f11139f61c17c0c6ae82"

  const reponse = await useFetch('http://localhost:1337/api/products', {
      headers: {
        'Authorization': 'Bearer ' + tok,
        'Content-Type': 'application/json'
      }
    });

  onMounted(() => {
    parseData(reponse)
  })

  function parseData(responce: any): void {
    const data = responce.data;
    console.log(data)
    const value = data['_rawValue'].data;
    console.log(value)
    products.value = value;
  }
</script>

<style scoped>

</style>
