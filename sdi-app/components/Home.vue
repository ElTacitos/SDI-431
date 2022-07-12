<template>
  <div class="main">
    <h1>SDI 431</h1>
    <h2>The place you go to fill you fish tanks, socks drawers and tractor garages</h2>
  </div>
  <ProductList/>
  <div>
      <button @click="startStrapi">Start Strapi</button>
      <button @click="stopStrapi">Stop Strapi</button>
      <a href="http://52.47.167.109:1337/admin">Strapi Admin</a>
  </div>
</template>

<script setup lang="ts">
  function startStrapi() {
  useFetch("https://3fk05namec.execute-api.eu-west-3.amazonaws.com").then(response => {
    console.log("start", response)
    window.open("http://52.47.167.109:1337/admin", '_self')
    console.log("opened")
  }).catch(response => {
    console.log("stop", response)
  });
}

  function stopStrapi() {
    useFetch("https://3fk05namec.execute-api.eu-west-3.amazonaws.com/stop").then(response => {
      console.log("stop", response)
    }).catch(response => {
      console.log("stop", response)
    });
  }
</script>

<style scoped>
h1{
  font-family: "Manrope", sans-serif;
  font-size: 8rem;
  font-weight: normal;
  margin: 0 0 0;
  color: #9370DB;
  z-index: 1;
}

h2 {
  font-family: "San Francisco",sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0 0 2rem;
  z-index: 1;
}

.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 8px;
  height: 60vh;
}
</style>
