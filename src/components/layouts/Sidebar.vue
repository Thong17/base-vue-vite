<template>
  <div
    class="sidebar bg-background transition-all border-r"
    :class="appStore.isSidebarOpen ? `w-[${SIDEBAR_EXPAND_WIDTH}px]` : `w-[${SIDEBAR_COLLAPSE_WIDTH}]`"
  >
    <div class="grid place-items-center" :class="`w-[${SIDEBAR_COLLAPSE_WIDTH}px] h-[${SIDEBAR_COLLAPSE_WIDTH}px]`">
      <Button variant="ghost" class="rounded-full" @click="appStore.toggleSidebar()">
        <Icon
          icon="local:burger"
          style="width: 24px; height: 24px"
          class="rotate-0 scale-100 transition-all"
          :class="appStore.isSidebarOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'"
        />
        <Icon
          icon="local:close"
          style="width: 24px; height: 24px"
          class="absolute rotate-90 scale-0 transition-all"
          :class="appStore.isSidebarOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'"
        />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { Button } from '@/components/ui/button'
  import { useAppStore } from '@/stores/app'
  import { SIDEBAR_COLLAPSE_WIDTH, SIDEBAR_EXPAND_WIDTH } from './constant'

  const appStore = useAppStore()
</script>

<script lang="ts">
  export default {}
</script>

<style scoped>
  .sidebar {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
