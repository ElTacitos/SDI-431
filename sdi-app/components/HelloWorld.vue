<template>
  <div>
    <h1>SDI 431</h1>
    <div v-for="(el, index) in list" :key="index">
      <p>{{ el }}</p>
    </div>
    <button @click="reverseList">Reverse List</button>
  </div>
</template>

<script setup lang="ts">
  let list = ref([1, 2, 3, 4, 5]);
  function reverseList() {
    list.value.reverse();
    console.log(list);
  }
</script>
