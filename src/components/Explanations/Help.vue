<template>
  <div
    class="w-auto h-15 px-2 rounded-sm text-white bg-blue-600 cursor-pointer"
    @mouseover="showExplanations = true"
    @mouseleave="showExplanations = false"
  >
    Cara kerja

    <div
      v-show="showExplanations"
      class="absolute right-0 w-screen bg-gray-200 text-black p-10"
    >
      <p>CARA KERJA</p>
      1. Pada menu Chose many of N pilih salah satu angka, angka ini menjadi jumlah element yang akan dibuat.<br>
      2. Klik Generate numbers untuk membangkitkan/membuat angka random dari 1-100 sebanyak jumlah N.<br>
      3. Masukkan angka pada fild input Enter number... sebagai angka target pencarian.<br>
      4. Tombol search akan melakukan pencarian secara biner.<br>

      <hr>
      <p class="text-center">RESULT</p>
      1. Angka yang memiliki background warna kuning artinya angka yang sedang diperiksa.<br>
      2. Angka yang memiliki background warna hijau artinya angka yang menjadi nilai tengah
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showExplanations: false,
    };
  },
};
</script>