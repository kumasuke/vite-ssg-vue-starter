<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="py-10 px-4 text-center">
    <router-view />
    <div>
      <button
        class="m-3 mt-8 text-sm"
        @click="router.back()"
      >
        戻る
      </button>
    </div>
  </main>
</template>
