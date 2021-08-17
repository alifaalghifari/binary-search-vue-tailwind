<template>
  <div
    class="w-auto h-15  rounded-sm text-white bg-blue-600 cursor-pointer"
    @mouseover="showExplanations = true"
    @mouseleave="showExplanations = false"
  >
    <p class="px-5">Cara kerja</p>
    <div
      v-show="showExplanations"
      class="absolute shadow-sm bg-blue-200 font-mono hover:bg-indigo-400 text-gray-700 hover:text-gray-100 p-10 flex flex-col justify-center transition duration-150 ease-in"
    >
      <div>
        <p class="text-center text-xl  font-medium">CARA KERJA</p>
        <ShowingText :text="textHowWorks" />
      </div>
      <div class="bg-blue-400 w-full h-0.5 my-5"></div>
      <div class="">
        <p class="text-center text-xl  font-medium">HASIL</p>
        <ShowingText :text="textResult" />
      </div>
    </div>
  </div>
</template>

<script>
import ShowingText from "./ShowingText.vue";

export default {
  data() {
    return {
      showExplanations: false,
      textHowWorks: [
        "1. Pada menu chose many of n pilih salah satu angka, angka ini menjadi jumlah elemen yang akan dibuat.",
        "2. Klik generate numbers untuk membangkitkan / membuat angka random dari 1-100 sebanyak jumlah N.",
        "3. Masukkan angka pada field input Enter number ... sebagai angka target pencarian.",
        "4. Tombol search akan melakukan pencarian secara biner.",
      ],
      textResult: [
        "1. Angka yang memiliki background warna kuning artinya aangka yang sedang diperiksa.",
        "2. Angka yang memiliki background warna hijau artinya angka yang menjadi nilai tengah",
      ],
    };
  },
  components: {
    ShowingText,
  },
};
</script>