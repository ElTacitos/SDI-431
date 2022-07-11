<template>
  <nav class="nav">
    <div class="nav-element left">
      <a>logo</a>
    </div>
    <ul class="nav-element right">
      <li href="/produits">Produits</li>
      <li>A propos</li>
      <li>Strapi</li>
      <li>Nous rejoindre</li>
      <li />
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  background-color: white;
  margin: 0;
  height: 3em;
  width: 100%;
  max-height:300px;
  min-height: 30px;
}

.nav-element {
  flex: 1;
}

.nav>.left {
  background: #9370DB;
  max-width: 10em;
  min-width: 5em;
}
.nav>.right {
  background: white;
  color: #9370DB;
  display: flex;
  justify-content: flex-end;
}

.nav ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

.logo img {
  max-height: 100%;
  max-width: 100%;
}
</style>
