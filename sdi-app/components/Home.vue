<template>
  <div class="main">
    <h1>SDI 431</h1>
    <h2>The place you go to fill you fish tanks, socks drawers and tractor garages</h2>
  </div>
  <ProductList/>
</template>

<script setup lang="ts">

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
