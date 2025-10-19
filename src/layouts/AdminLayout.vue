<template>
  <sidebar />
  <div
    class="transition-all"
    :style="{
      width: appStore.isSidebarOpen
        ? `calc(100vw - ${SIDEBAR_EXPAND_WIDTH}px)`
        : `calc(100vw - ${SIDEBAR_COLLAPSE_WIDTH}px)`,
      marginLeft: appStore.isSidebarOpen ? `${SIDEBAR_EXPAND_WIDTH}px` : `${SIDEBAR_COLLAPSE_WIDTH}px`,
    }"
  >
    <navbar>
      <slot name="navbar"></slot>
    </navbar>
    <main
      :style="{
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT + FOOTER_HEIGHT}px)`,
      }"
    >
      <router-view />
    </main>
    <footer :style="{ height: `${FOOTER_HEIGHT}px` }" class="grid place-items-center">Admin Footer</footer>
  </div>
</template>

<script setup lang="ts">
  import {
    FOOTER_HEIGHT,
    NAVBAR_HEIGHT,
    SIDEBAR_COLLAPSE_WIDTH,
    SIDEBAR_EXPAND_WIDTH,
  } from '@/components/layouts/constant'
  import Navbar from '@/components/layouts/Navbar.vue'
  import Sidebar from '@/components/layouts/Sidebar.vue'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
</script>

<script lang="ts">
  export default {}
</script>
