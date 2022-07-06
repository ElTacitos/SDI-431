<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld";
  export default {
    components: {HelloWorld}
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

@font-face {
  font-family: "EricaOne";
  src: local("EricaOne"),
  url("./assets/EricaOne-Regular.ttf") format("truetype");
}


body{
  background: url("./assets/background.svg");
  color: #003049;
}
</style>
