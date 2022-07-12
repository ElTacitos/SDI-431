<template>
  <nav class="nav">
    <div class="nav-element left">
      <a>SDI-431</a>
    </div>
    <ul class="nav-element right">
      <li href="/produits">Produits</li>
      &nbsp;&nbsp;
      <li>A propos</li>
      &nbsp;&nbsp;
      <li>Strapi</li>
      &nbsp;&nbsp;
      <li>Nous rejoindre</li>
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
  max-width: 10em;
  min-width: 5em;
  padding-top: 0.2em;
  padding-left: 1rem;
}
.nav>.right {
  background: white;
  color: #9370DB;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
}

.nav ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}

.img {
  width: 100%;
  height: 100%;
}

a {
  color: #9370DB;
  font-family: "EricaOne";
  font-size: 1.5em;
  font-weight: bold;
}
</style>
