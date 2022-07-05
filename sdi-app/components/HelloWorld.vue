<template>
  <div>
    <h1>SDI 431</h1>
    <ProductList/>
    <button @click="startStrapi">Start Strapi</button>
    <button @click="stopStrapi">Stop Strapi</button>
    <a href="http://52.47.167.109:1337/admin">Strapi Admin</a>
  </div>
</template>

<script setup lang="ts">
  function startStrapi() {
    useFetch("https://vgqkqwfu6aseix5ejwdoqbxhi40rjxpi.lambda-url.eu-west-3.on.aws/").then(response => {
      console.log("start" + response)
    }).catch(response => {
      console.log("stop" + response)
    });
  }

  function stopStrapi() {
    useFetch("https://5dtyb7orpjkgyf77wpxvhtcg4a0pytpa.lambda-url.eu-west-3.on.aws/").then(response => {
      console.log("stop" + response)
    }).catch(response => {
      console.log("stop" + response)
    });
  }

</script>
