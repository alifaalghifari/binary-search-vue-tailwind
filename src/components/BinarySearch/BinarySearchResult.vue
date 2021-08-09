<template>
  <div class="">
    <ul class="flex justify-around">

      <template v-for="(item,index) in items">
        <li
          :class="[midItems[0]  === index ? 'bg-green-400': 'bg-yellow-200 ']"
          :key="index"
        >
          {{ item }}
        </li>
      </template>
    </ul>

    <template v-if="dataFinded">
      <ul
        v-for="(itemBinary,index) in itemsBinary"
        :key="index"
        class="flex justify-around mt-3"
      >
        <!-- {{item}} -->
        <template v-for="(item,i) in items">
          <li
            :key="i"
            :class="[showItemOfBinaryResult(itemBinary, i)? 'bg-yellow-200 text-gray-800' : '' , addColorToMidItems(index,i) ? 'bg-green-400': '']"
          >
            {{item}}
          </li>
        </template>
      </ul>
    </template>
    <!-- this.midItems[index + 1] -->
    <template v-else>
      <p class="ml-3 mt-5 text-red-600">Data tidak ditemukan</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    itemsBinary: Array,
    midItems: Array,
    dataFinded: Boolean,
  },

  methods: {
    showItemOfBinaryResult: function (item, i) {
      // jika data di item tinggal satu, biarkan addColorToMidItems yang melakukan pemberian warna
      if (item.length == 1) {
        return false;
      }

      return item.indexOf(i) > -1;
    },

    addColorToMidItems(index, i) {
      return i == this.midItems[index + 1];
    },
  },
};
</script>
