<template>
  <div
    class="h-10 w-40 bg-indigo-500 flex items-center justify-center cursor-pointer"
    v-on:click="tes()"
  >
    <h3 class="text-white font-mono text-lg ">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "GenerateNumbers",
  props: {
    title: String,
    total: Number,
  },
  data() {
    return {
      arrNumbers: [],
    };
  },
  methods: {
    tes() {
      for (let i = 0; i < this.total; i++) {
        this.arrNumbers.push(Math.floor(Math.random() * 100) + 1);
      }

      // sorting array menggunakan algoritma bubble sort
      this.bubbleSort();

      this.$emit("clicked", this.arrNumbers);
    },
    bubbleSort() {
      let n = this.arrNumbers.length;
      for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
          var n1 = this.arrNumbers[j];
          var n2 = this.arrNumbers[j + 1];
          if (n1 > n2) {
            this.arrNumbers[j] = n2;
            this.arrNumbers[j + 1] = n1;
          }
        }
      }
    },
  },
};
</script>