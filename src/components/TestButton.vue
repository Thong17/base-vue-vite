<template>
  <div class="grid place-items-center">
    <p>{{ $t('message.hello', { name: 'Thong' }) }}</p>
    <div>{{ count }}</div>
    <div class="flex gap-1">
      <Button @click="count--">-</Button>
      <Button @click="count++">+</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { Button } from '@/components/ui/button'

  const count = ref(0)
</script>
<script lang="ts">
  export default {}
</script>
