<template>
  Authhhhhh
  <main>
    <router-view />
  </main>
  <footer class="grid place-items-center">Footer</footer>
</template>

<script setup lang="ts"></script>

<script lang="ts">
  export default {}
</script>

<style scoped>
  main {
    min-height: calc(100vh - 70px);
  }
  footer {
    height: 70px;
  }
</style>
