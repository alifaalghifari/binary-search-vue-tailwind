<template>
  <div
    class="w-auto h-15rounded-sm text-white bg-blue-600 cursor-pointer"
    @mouseover="showExplanations = true"
    @mouseleave="showExplanations = false"
  >
    <p class="px-5">
      Penjelasan singkat binary search
    </p>

    <div
      v-show="showExplanations"
      class="absolute  shadow-sm bg-blue-200 font-mono hover:bg-indigo-400 text-gray-700 hover:text-gray-100 p-10 flex flex-col justify-center transition duration-150 ease-in"
    >
      <div>
        <p class="text-center text-xl  font-medium">PENGERTIAN</p>
        <ShowingText :text="textMeaning" />
      </div>
      <div class="bg-blue-400 w-full h-0.5 my-5"></div>
      <div>
        <p class="text-center text-xl  font-medium">CARA KERJA BINARY</p>
        <ShowingText :text="textBinaryWork" />
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
      textMeaning: [
        "Binary search adalah algoritma untuk melakukan pencarian pada data yang sudah terurut.",
        "Sehingga perlu dipastikan terlebih dahulu bahwa kumpulan data",
        "yang akan dilakukan pencarian sudah terurut baik itu menaik atau menurun",
      ],
      textBinaryWork: [
        "Adapun cara kerja dari binary search yaitu membagi dua ruang pencarian.",
        "Jadi ada 3 nilai dalam kumpulan data yaitu, nilai bawah, nilai tengah, dan nilai atas.",
        "Dan satu nilai yang menjadi target pencarian. nilai tengah akan menjadi nilai pembanding dengan nilai target, apakah kedunya sama.",
        "Ada 3 kondisi yang akan terjadi pada pencarian binary search:",
        "1. Jika data target == nilai tengah data, maka data ditemukan dan pencarian selesai.",
        "2. Jika data target &lt; nilai tengah, maka pencarian akan dibatasi pada sisi kiri kumpulan data.",
        "3. Jika data target &gt; nilai tengah, maka pencarian akan dibatasi pada sisi kanan kumpulan data.",
        "4. Jika seluruh data telah dicari namun nilai target tidak ditemukan, maka akan diberikan nilai false.",
      ],
    };
  },
  components: {
    ShowingText,
  },
};
</script>