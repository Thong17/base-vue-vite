<template>
  <h1>{{ $t(route.meta.title ?? '') }}</h1>
  <TestButton />
</template>

<script setup lang="ts">
  import TestButton from '@/components/TestButton.vue'
  const route = useRoute()
</script>
