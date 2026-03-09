import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const baseUrl = 'https://cards-marketplace-api.onrender.com';

// export const useMarketplaceStore = defineStore('marketplace', {
//   state: () => ({
//     tradeList: [],
//   }),

//   getters: {
//     tradeList: (state) => state.tradeList,
//   },

//   actions: {
//     async getTrades(page = 1, limit = 10) {
//       const url = `${baseUrl}/trades`

//       try {
//         const data = await axios.get(url, {
//           params: {
//             rpp: limit,
//             page,
//           },
//         })
//         console.log(data)
//         if (data.data?.list.length) {
//           this.tradeList = data.data.list
//         }
//       } catch (error) {
//         return error
//       }
//     },
//   },
// })

export const useMarketplaceStore = defineStore('marketplace', () => {
  const tradeList = ref<unknown[]>([]);
  async function getTrades(page = 1, limit = 10) {
    const url = `${baseUrl}/trades`;
    try {
      const data = await axios.get(url, { params: { rpp: limit, page } });

      if (data.data?.list.length) {
        return data.data.list;
      } else return [];
    } catch (error) {
      return error;
    }
  }

  return { tradeList, getTrades };
});
