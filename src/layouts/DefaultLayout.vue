<template>
  <navbar>
    <slot name="navbar"></slot>
  </navbar>
  <main>
    <router-view />
  </main>
  <footer class="grid place-items-center">Footer</footer>
</template>

<script setup lang="ts">
  import Navbar from '@/components/layouts/Navbar.vue'
</script>

<script lang="ts">
  export default {}
</script>

<style scoped>
  main {
    min-height: calc(100vh - 140px);
  }
  footer {
    height: 70px;
  }
</style>
