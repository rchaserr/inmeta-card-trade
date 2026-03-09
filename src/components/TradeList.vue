<script setup lang="ts">
import type { Trade } from '@/interfaces/marketplace/trade';
import { useMarketplaceStore } from '@/stores/marketplace';
import { onMounted, ref } from 'vue';

const marketplaceStore = useMarketplaceStore();
const tradeList = ref<Trade[]>([]);
const show = ref(false);
const position = ref({ x: 0, y: 0 });
const img = ref('');

onMounted(async () => {
  const response = await marketplaceStore.getTrades();
  if (response.length) tradeList.value.splice(0, tradeList.value.length, ...response);

  tradeList.value.forEach((trade) => {
    trade.tradeCards.sort((a, b) => a.type.localeCompare(b.type));
  });
});

const showImg = (event: MouseEvent, imageUrl: string) => {
  show.value = true;
  position.value.x = event.x + 10;
  position.value.y = event.y;
  img.value = imageUrl;
};
</script>

<template>
  <main>
    <div class="container">
      <div class="grid grid-cols-3 gap-3">
        <div v-for="trade in tradeList" :key="trade.id">
          <div class="grid grid-rows-2">
            <span class="bg-red-950">{{ trade.user.name }}</span>
            <div v-for="tCard in trade.tradeCards" :key="tCard.id" class="grid grid-cols-2">
              <span :class="tCard.type == 'OFFERING' ? 'text-green-900' : 'text-blue-900'">{{
                tCard.type
              }}</span>
              <span
                class="hover:underline"
                @mouseover="showImg($event, tCard.card.imageUrl)"
                @mouseleave="show = false"
                >{{ tCard.card.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="card-image"
      class="z-100 absolute size-48"
      v-if="show"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
    >
      <img class="aspect-auto" :src="img" />
    </div>
  </main>
</template>
