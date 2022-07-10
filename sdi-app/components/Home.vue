<template>
  <div class="main">
    <h1>SDI 431</h1>
    <h2>The place you go to fill you fish tanks, socks drawers and tractor garages</h2>
    <ProductList/>
    <div class="footer">
      <button @click="startStrapi">Start Strapi</button>
      <button @click="stopStrapi">Stop Strapi</button>
      <a href="http://52.47.167.109:1337/admin">Strapi Admin</a>
    </div>
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

<style scoped>
h1{
  font-family: "Manrope", sans-serif;
  font-size: 8rem;
  font-weight: normal;
  margin: 0 0 0;
  color: #9370DB;
}

h2 {
  font-family: "San Francisco",sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
  margin: 0 0 2rem;
}

.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.footer {
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 1rem;

  font-family: 'San Francisco', monospace;
  font-size: 1rem;

  position: absolute;
  bottom: 0;
}

.footer button {
  background: #FCBF49;
  border: black solid 0.15rem;
  font-size: 1rem;
}
</style>
