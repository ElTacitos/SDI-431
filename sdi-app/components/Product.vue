<template>
  <div class="prodcutCard">
    <h2> {{ props.attributes.name }} </h2>
    <img class="productImage" :src="props.attributes.image" alt="img">
    <span class="subTitle">
      {{ props.attributes.color }} - {{ props.attributes.size }} cm
    </span>
    <span class="description">
      {{ props.attributes.description }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  attributes: {
    type: [Object]
  }
})
</script>

<style scoped>
.prodcutCard {
  /* background: url("./assets/product.svg"); */
  padding: 0.25rem;
  font-family: 'Manrope', monospace;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: rgb(240, 239, 239);
  margin: 20px 0px;
  overflow-wrap: break-word;
  max-width: 30em;
  min-width: 30em;
  border-radius: 25px;
  text-align: center;
}

h2 {
  padding: 0.5rem;
}

.subTitle {
  padding-top: 1.5rem;
  font-size: 1.5rem;
}

.productImage {
  width: auto;
  height: 10rem;
  border-radius: 25px;
}

.description {
  font-size: 1rem;
  padding: 1.5rem;
}
</style>
