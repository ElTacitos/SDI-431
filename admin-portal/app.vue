<template>
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
