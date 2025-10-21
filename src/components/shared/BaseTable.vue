<script setup lang="ts">
  import { PropType } from 'vue'
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

  export interface TableHeaderConfig {
    label: string
    key: string
    align?: 'left' | 'right' | 'center'
    width?: string
  }

  defineProps({
    headers: {
      type: Array as PropType<TableHeaderConfig[]>,
      required: true,
    },
    rows: {
      type: Array as PropType<Record<string, unknown>[]>,
      required: true,
    },
  })
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead
          v-for="header in headers"
          :key="header.key"
          :class="[
            header.width ? `w-[${header.width}]` : '',
            header.align === 'right' ? 'text-right' : header.align === 'center' ? 'text-center' : 'text-left',
          ]"
        >
          {{ header.label }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, idx) in rows" :key="idx">
        <TableCell
          v-for="header in headers"
          :key="header.key"
          :class="[
            header.align === 'right' ? 'text-right' : header.align === 'center' ? 'text-center' : 'text-left',
            header.key === headers[0].key ? 'font-medium' : '',
          ]"
        >
          {{ row[header.key] }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
