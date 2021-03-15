<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: '404 NotFound',
})
</script>

<template>
  <div>
    Not Found
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
