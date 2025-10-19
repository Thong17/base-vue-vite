<template>
  <navbar>
    <slot name="navbar"></slot>
  </navbar>
  <main :style="{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT + FOOTER_HEIGHT}px)` }">
    <router-view />
  </main>
  <footer :style="{ height: `${FOOTER_HEIGHT}px` }" class="grid place-items-center">Footer</footer>
</template>

<script setup lang="ts">
  import { FOOTER_HEIGHT, NAVBAR_HEIGHT } from '@/components/layouts/constant'
  import Navbar from '@/components/layouts/Navbar.vue'
</script>

<script lang="ts">
  export default {}
</script>
