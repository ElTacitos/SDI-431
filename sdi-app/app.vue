<template>
  <NuxtLayout>
    <Home />
    <div>
      <button @click="startStrapi">Start Strapi</button>
      <button @click="stopStrapi">Stop Strapi</button>
      <a href="http://52.47.167.109:1337/admin">Strapi Admin</a>
    </div>
  </NuxtLayout>
</template>

<script>
import Home from './components/Home'
import defaultVue from './layouts/default.vue'
export default {
  head () {
    return {
      title: "SDI-431",
      meta: [
        { hid: 'description', name: 'description', content: 'description' }
      ]
    }
  },
  components: { Home },
  layout: defaultVue
}

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

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');

@font-face {
  font-family: "EricaOne";
  src: local("EricaOne"),
  url("./assets/EricaOne-Regular.ttf") format("truetype");
}

body{
  /* background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(116,169,231,1) 100%); */
  /* background: url("./assets/temple.svg"); */
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  backdrop-filter: blur(5px);
  color: #ffffff;
  margin: 0 !important;
}
</style>
