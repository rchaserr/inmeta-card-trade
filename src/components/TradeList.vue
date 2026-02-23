<script setup lang="ts">
import { useMarketplaceStore } from '@/stores/marketplace'
import { onMounted, ref } from 'vue'

const marketplaceStore = useMarketplaceStore()
const tradeList = ref<unknown[]>([])

onMounted(async () => {
  const teste = await marketplaceStore.getTrades()
  if (teste.length) tradeList.value.splice(0, tradeList.value.length, ...teste)
})
</script>

<template>
  <main>{{ tradeList }}</main>
</template>

<style scoped></style>
