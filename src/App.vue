<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div className="flex flex-col min-h-screen bg-gray-100">
    <app-header />

    <main className="container mx-auto p-4 max-w-md">
      <RouterView />
    </main>
  </div>
</template>
