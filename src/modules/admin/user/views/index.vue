<template>
  <h1>{{ $t(route.meta.title ?? '') }}</h1>
  <router-link to="/admin/user/create">Create</router-link>
  <BaseTable :headers="headers" :rows="invoices" :total-count="150" />
  <router-view />
</template>

<script setup lang="ts">
  import { TableHeaderConfig } from '@/components/shared/BaseTable.vue'

  const route = useRoute()

  const headers: TableHeaderConfig[] = [
    { label: 'Invoice', key: 'invoice', width: '100px' },
    { label: 'Status', key: 'paymentStatus' },
    { label: 'Method', key: 'paymentMethod' },
    { label: 'Amount', key: 'totalAmount', align: 'right' },
  ]

  const invoices = [
    { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
    { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
    { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
    { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
    { invoice: 'INV005', paymentStatus: 'Paid', totalAmount: '$550.00', paymentMethod: 'PayPal' },
    { invoice: 'INV006', paymentStatus: 'Pending', totalAmount: '$200.00', paymentMethod: 'Bank Transfer' },
    { invoice: 'INV007', paymentStatus: 'Unpaid', totalAmount: '$300.00', paymentMethod: 'Credit Card' },
  ]
</script>
