<template>
  <div
    class="w-auto h-15 px-2 rounded-sm text-white bg-blue-600 cursor-pointer"
    @mouseover="showExplanations = true"
    @mouseleave="showExplanations = false"
  >
    Penjelasan singkat binary search
    <div
      v-show="showExplanations"
      class="absolute right-0 w-screen bg-gray-200 text-black p-10"
    >
      Binary search adalah algoritma untuk melakukan pencarian pada data yang sudah terurut.<br>
      Sehingga perlu dipastikan terlebih dahulu bahwa kumpulan data<br>
      yang akan dilakukan pencarian sudah terurut baik itu menaik atau menurun<br><br>

      Adapun cara kerja dari binary search yaitu membagi dua ruang pencarian.<br>
      Jadi ada 3 nilai dalam kumpulan data yaitu, nilai bawah, nilai tengah, dan nilai atas.<br>
      Dan satu nilai yang menjadi target pencarian. nilai tengah akan menjadi nilai pembanding dengan nilai target, apakah kedunya sama.<br>
      Ada 3 kondisi yang akan terjadi pada pencarian binary search:<br>
      1. Jika data target == nilai tengah data, maka data ditemukan dan pencarian selesai.<br>
      2. Jika data target &lt; nilai tengah, maka pencarian akan dibatasi pada sisi kiri kumpulan data.<br>
      3. Jika data target &gt; nilai tengah, maka pencarian akan dibatasi pada sisi kanan kumpulan data.<br>
      4. Jika seluruh data telah dicari namun nilai target tidak ditemukan, maka akan diberikan nilai false.<br>
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