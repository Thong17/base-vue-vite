<template>
  <sidebar />
  <div
    class="transition-all"
    :style="{
      width: appStore.isSidebarOpen ? 'calc(100vw - 270px)' : 'calc(100vw - 70px)',
      marginLeft: appStore.isSidebarOpen ? '270px' : '70px',
    }"
  >
    <navbar>
      <slot name="navbar"></slot>
    </navbar>
    <main>
      <router-view />
    </main>
    <footer class="grid place-items-center">Admin Footer</footer>
  </div>
</template>

<script setup lang="ts">
  import Navbar from '@/components/layouts/Navbar.vue'
  import Sidebar from '@/components/layouts/Sidebar.vue'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
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
