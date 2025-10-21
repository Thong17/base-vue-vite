<script setup lang="ts">
  import { PropType } from 'vue'
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from '@/components/ui/pagination'

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
    pageIndex: {
      type: Number,
      require: false,
      default: 1,
    },
    totalCount: {
      type: Number,
      require: false,
      default: 0,
    },
    rowPerPage: {
      type: Number,
      require: false,
      default: 10,
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
  <Pagination v-slot="{ page }" :items-per-page="rowPerPage" :total="totalCount" :default-page="pageIndex">
    <PaginationContent v-slot="{ items }">
      <PaginationPrevious />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
          {{ item.value }}
        </PaginationItem>
      </template>
      <PaginationEllipsis :index="4" />
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</template>
