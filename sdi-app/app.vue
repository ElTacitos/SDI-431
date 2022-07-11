<template>
  <NuxtLayout>
    <Home />
  </NuxtLayout>
</template>

<script>
import Home from './components/Home'
import defaultVue from './layouts/default.vue'
export default {
  components: { Home },
  layout: defaultVue
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
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(116,169,231,1) 100%);
  /* background: url("./assets/temple.svg"); */
  color: #ffffff;
  margin: 0 !important;
}
</style>
