<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot>
        <Button>Dropdown</Button>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="(option, key) in options"
        :key="key"
        :disabled="option.value === value"
        @click="emit('change', option.value)"
      >
        <div class="flex justify-between w-full">
          {{ option.label }}
          <Icon v-if="option.value === value" icon="local:check-rounded" style="width: 18px; height: 18px" />
        </div>
      </DropdownMenuItem>
      <slot name="option"></slot>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { Button } from '@/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'

  export interface IOption<Type> {
    label: string
    value: Type
  }

  export interface IDropdownProps<Type> {
    options: IOption<Type>[]
    value?: Type
  }

  const emit = defineEmits<<Type>(e: 'change', value: Type) => void>()
  defineProps<IDropdownProps<unknown>>()
</script>
<script lang="ts">
  export default {}
</script>
