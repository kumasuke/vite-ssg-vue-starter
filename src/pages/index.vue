<script setup lang="ts">
// import { onMounted } from 'vue'
// onMounted(() => {
//   console.log('onMounted')
// })
</script>

<template>
  <div class="text-center">
    <img alt="Vue logo" class="inline-block" src="/images/logo.png">
    <HelloWorld msg="Vue 3 + TypeScript + Vite" />
    <router-link to="/about" class="text-sm underline">
      About
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
