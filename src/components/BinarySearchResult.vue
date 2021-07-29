<template>
  <div class="">
    <ul class="flex justify-around">
      <li
        class="bg-yellow-200"
        v-for="(item,index) in items"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <ul
      v-for="(item,index) in itemsBinary"
      :key="index"
      class="flex justify-around   mt-3"
    >
      <!-- {{item}} -->
      <template v-for="(v,i) in items">
        <li
          :key="i"
          :class="showItemOfBinaryResult(item, v, i)? 'bg-yellow-200 text-gray-800' : '' "
        >
          {{v}}
        </li>
      </template>

    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    itemsBinary: Array,
  },
  methods: {
    showItemOfBinaryResult: function (item, v, i) {
      /** Fungsi ini bertujuan untuk memberi warna yang berbeda
       * untuk setiap elemen yang terseleksi pada items
       */

      /** Kondisi agar tidak terulang
       * jika jumlah element tersisa 1
       * namun element tersebut ada lebih dari pada item keseluruhan
       * maka akan terjadi true lebih dari satu elemen
       */
      if (item.indexOf(v) == 0) {
        if (item.length == 1) {
          let valueBefore = this.items[i - 1];
          // jika value saat ini sama dengan value sebelumnya maka kembalikan nilai false
          if (v === valueBefore) {
            return false;
          }
          return true;
        }
      }

      /** Akhir kondisi agar tidak terulang */

      return item.indexOf(v) > -1;
    },
  },
};
</script>
