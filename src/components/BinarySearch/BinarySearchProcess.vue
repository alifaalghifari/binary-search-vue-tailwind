<template>
  <button
    class="bg-yellow-200 text-gray-800 w-40 focus:outline-none"
    v-on:click="processingBinary"
  >
    search
  </button>
</template>

<script>
export default {
  props: {
    items: Array,
    targetSearch: Number,
  },
  data() {
    return {
      dataFinded: true,
      midItems: [],
      itemsBinary: [],
    };
  },

  methods: {
    processingBinary() {
      this.dataFinded = this.binarySearch();

      this.$emit("update-midItems", this.midItems);
      this.$emit("update-itemsBinary", this.itemsBinary);
      this.$emit("update-dataFinded", this.dataFinded);
    },

    deleteItems(arr) {
      let decrease = 0;

      // jika nilai true maka element pada data pertama tidak terhapus
      while (arr.length - decrease > 0) {
        arr.pop();
      }
    },

    storeProcessBinarySearch(low, upp) {
      if (low === upp) {
        return;
      }

      let onProcess = [];
      while (low <= upp) {
        onProcess.push(low);
        low++;
      }

      this.itemsBinary.push(onProcess);
    },

    binarySearch() {
      // menghapus data pada itemsBinary
      this.deleteItems(this.itemsBinary);

      // menghapus data pada midItems
      this.deleteItems(this.midItems);

      let arr = this.items;
      let target = this.targetSearch;
      let low = 0;
      let upp = this.items.length - 1;
      while (low <= upp) {
        let mid = Math.floor((low + upp) / 2);
        // memasukkan nilai tengah ke penyimpanan midItems
        this.midItems.push(mid);
        if (arr[mid] == target) {
          this.midItems.push(mid); // membuat konsistensi pada pemberian warna nilai tengah

          this.itemsBinary.push([mid]);
          return true;
        } else if (arr[mid] < target) {
          low = mid + 1;
        } else {
          upp = mid - 1;
        }
        this.storeProcessBinarySearch(low, upp);
      }
      return false;
    },
  },
};
</script>