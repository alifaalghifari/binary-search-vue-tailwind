<template>
  <div class="h-screen w-screen flex flex-col px-80 ">
    <div class=" flex space-x-5 my-40">
      <Help />
      <BinarySearchExplanations />
    </div>
    <div class="w-auto ">
      <div class="w-full h-96 bg-other-blue flex flex-col">
        <div class="flex justify-around py-2">

          <SelectOption
            v-bind:options="optionsNumbers"
            v-bind:selected="selectedNumbers"
            v-on:update-select="updateSelectedOptionsNumbers"
          />

          <GenerateNumbers
            title="Generate numbers"
            v-bind:total="selectedNumbers"
            @create-numbers="generateN"
          />

          <InputTarget @update-target="updateTargetSearch" />

          <BinarySearcProcess
            v-bind:items="items"
            v-bind:targetSearch="targetSearch"
            v-on:update-itemsBinary="updateitemsBinary"
            v-on:update-midItems="updatemidItems"
            v-on:update-dataFinded="updatedataFinded"
          />

        </div>

        <div class="w-full h-full bg-other-green py-5">
          <BinarySearchResult
            v-bind:items="items"
            v-bind:itemsBinary="itemsBinary"
            v-bind:midItems="midItems"
            v-bind:dataFinded="dataFinded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenerateNumbers from "./GenerateNumbers.vue";
import SelectOption from "./SelectOption.vue";
import BinarySearchResult from "./BinarySearch/BinarySearchResult.vue";
import BinarySearcProcess from "./BinarySearch/BinarySearchProcess.vue";
import InputTarget from "./InputTarget.vue";

import Help from "./Explanations/Help.vue";
import BinarySearchExplanations from "./Explanations/BinarySearchExplanations.vue";

export default {
  name: "MainMenu",
  data() {
    return {
      selectedNumbers: 0,
      optionsNumbers: [
        { text: "Chose many of N", value: 0 },
        { text: "3", value: 3 },
        { text: "6", value: 6 },
        { text: "9", value: 9 },
        { text: "15", value: 15 },
        { text: "20", value: 20 },
        { text: "50", value: 50 },
      ],
      items: [],
      itemsBinary: [],
      midItems: [], // menyimpan nilai tengah tiap iterasi pencarian
      dataFinded: true,
      targetSearch: 0,
    };
  },
  components: {
    GenerateNumbers,
    SelectOption,
    BinarySearchResult,
    BinarySearcProcess,
    InputTarget,
    Help,
    BinarySearchExplanations,
  },

  methods: {
    updatemidItems(newmidItems) {
      this.midItems = newmidItems;
    },

    updateitemsBinary(newitemsBinary) {
      this.itemsBinary = newitemsBinary;
    },

    updatedataFinded(newdataFinded) {
      this.dataFinded = newdataFinded;
    },

    updateTargetSearch(newTarget) {
      this.targetSearch = parseInt(newTarget.target.value);
    },

    deleteItems(arr) {
      let decrease = 0;

      // jika nilai true maka element pada data pertama tidak terhapus
      while (arr.length - decrease > 0) {
        arr.pop();
      }
    },

    generateN(v) {
      this.dataFinded = true;

      // mengahpus data pada midItems
      this.deleteItems(this.midItems);

      // menghapus data pada itemsBinary
      this.deleteItems(this.itemsBinary);

      // menghapus data pada items
      // sehinngga data yang masuk ada data yang terbaru
      this.deleteItems(this.items);

      // memasukkan elemen yang tergenarate ke array items

      this.items = [...v];

      // untuk menghapus v atau value
      // sehingga nilai yang masuk nantinya selalu nilai baru
      this.deleteItems(v);
    },

    updateSelectedOptionsNumbers(newSelectOptionsNumbers) {
      this.selectedNumbers = newSelectOptionsNumbers;
    },
  },
};
</script>