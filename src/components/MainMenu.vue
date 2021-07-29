<template>
  <div class="h-screen w-screen flex flex-col px-80 ">
    <div class=" flex space-x-5 my-40">
      <div
        class="w-auto h-15 px-2 rounded-sm text-white bg-blue-600 cursor-pointer"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        Cara kerja

        <div
          v-show="show"
          class="absolute right-0 w-screen bg-gray-200 text-black p-10"
        >
          1. Pada menu Chose many of N pilih salah satu angka, angka ini menjadi jumlah element yang akan dibuat<br>
          2. Klik Generate numbers untuk membangkitkan/membuat angka random dari 1-99 sebanyak jumlah N<br>
          3. Select n to search adalah angka yang harus dipilih sebagai target pencarian, isinya merupakan elemen-elemen yang tergenarate<br>
          4. Tombol search akan melakukan pencarian secara biner
        </div>

      </div>

      <div
        class="w-auto h-15 px-2 rounded-sm text-white bg-blue-600 cursor-pointer"
        @mouseover="tes = true"
        @mouseleave="tes = false"
      >
        Penjelasan singkat binary search
        <div
          v-show="tes"
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
          4. Jika seluruh data telah dicari namun nilai target tidak ditemukan, maka akan diberikan nilai -1.<i class="text-red-500">(catatan: pada aplikasi ini kondisi ini tidak akan terjadi, atau nilai yang dicari akan selalu ditemukan)</i><br>
        </div>
      </div>

    </div>
    <div class="w-auto ">
      <div class="w-full h-96 bg-other-blue flex flex-col">
        <div class="flex justify-around">

          <SelectOption
            v-bind:options="optionsNumbers"
            v-bind:selected="selectedNumbers"
            v-on:event-update-select="updateSelectedOptionsNumbers"
          />

          <GenerateNumbers
            title="Generate numbers"
            v-bind:total="updateSelectOptionsNumbers"
            @clicked="generateN"
          />

          <SelectOption
            v-bind:options="optionsN"
            v-bind:selected="selectedN"
            v-on:event-update-select="updateSelectN"
          />

          <button
            class="bg-yellow-200 text-gray-800 w-40 focus:outline-none"
            v-on:click="binarySearch"
            :disabled="disableSearch"
          >
            search
          </button>
        </div>

        <div class="w-full h-full bg-other-green py-5">
          <BinarySearchResult
            v-bind:items="items"
            v-bind:itemsBinary="itemsBinary"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import GenerateNumbers from "./GenerateNumbers.vue";
import SelectOption from "./SelectOption.vue";
import BinarySearchResult from "./BinarySearchResult.vue";
export default {
  name: "MainMenu",
  data() {
    return {
      show: false,
      tes: false,
      selectedNumbers: 0,
      updateSelectOptionsNumbers: 0,
      optionsNumbers: [
        { text: "Chose many of N", value: 0 },
        { text: "3", value: 3 },
        { text: "6", value: 6 },
        { text: "9", value: 9 },
        { text: "15", value: 15 },
        { text: "20", value: 20 },
      ],
      selectedN: 0,
      updateSelectedOptionsN: 0,
      optionsN: [{ text: "Select n to search", value: 0 }],
      items: [],
      itemsBinary: [],
      disableSearch: true, // Untuk mencegah user melakukan search tanpa memasukkan nilai n yang akan dicari telebih dahulu
    };
  },
  components: {
    GenerateNumbers,
    SelectOption,
    BinarySearchResult,
  },
  watch: {
    /**
     * Mengubah disableSearch = false
     */
    updateSelectedOptionsN() {
      this.disableSearch = false;
    },
    /**
     * Jika items diperbarui atau men-generate ulang, bida jadi elemen baru yang tergenerate
     * tidak ada nilai n yang sebelumnya, sehingga nilai n yang akan dicari kosong
     * untuk itu dilakukan pencegahan search
     */
    items(newVal) {
      let updateSelected = this.updateSelectedOptionsN;
      this.disableSearch = newVal.indexOf(updateSelected) == -1 ? true : false;
    },
  },
  methods: {
    deleteItems(arr, deleteFirstElement = false) {
      let decrease = 0;

      // jika nilai true maka element pada data pertama tidak terhapus
      if (deleteFirstElement) {
        decrease = 1;
      }
      while (arr.length - decrease > 0) {
        arr.pop();
      }
    },

    addValueToOptionsN() {
      // menhapus data lama dari items
      this.deleteItems(this.optionsN, true);

      this.items.forEach((item) => {
        // menambahkan data ke data optionsN
        this.optionsN.push({ text: String(item), value: item });
      });
    },

    generateN(v) {
      // console.log(this.updateSelectedOptionsN);
      // console.log(this.selectedN);
      // this.updateSelectedOptionsN = 0;
      // this.selectedN = 0;

      // menghapus data pada itemsBinary
      this.deleteItems(this.itemsBinary);

      // menghapus data pada items
      // sehinngga data yang masuk ada data yang terbaru
      this.deleteItems(this.items);

      // memasukkan elemen yang tergenarate ke array items
      v.forEach((v) => {
        this.items.push(v);
      });

      // eksekusi fungsi addValueToOptionsN untuk memasukkkan nilai ke data optionsN
      this.addValueToOptionsN();

      // untuk menghapus v atau value
      // sehingga nilai yang masuk nantinya selalu nilai baru
      this.deleteItems(v);
    },

    updateSelectedOptionsNumbers(v) {
      this.updateSelectOptionsNumbers = v;
    },

    updateSelectN(v) {
      // console.log("tes");
      this.updateSelectedOptionsN = v;
      // console.log(this.updateSelectedOptionsN);
    },

    storeProcessBinarySearch(low, upp, target) {
      // mengambil array items
      let onProcess = this.items.slice(low, upp);
      /**
       * Ada keadaan pada akhir pencarian biasanya tersisa 3 element [a, b, c]
       * Jika nilai target tepat pada middel array
       * Maka akan lansung masuk ke kondisi ini
       *
       * Namun jika tidak, maka kondisi ini akan terlewati dan proses selanjutnya akan di eksekusi
       * Sehinnga target ditemukan dan akan masuk pada fungsi this.storeProcessBinarySearch(low, upp + 1)
       *
       * Dan kondisi ini juga akan di eksekusi
       * Sehingga akan ada 2 element yang sama pada itemsBinary
       *
       * Untuk itu ada kondisi untuk mengecek, apakah nilai arr[mid] sudah ada pada itemsBinary
       */
      if (onProcess != target) this.itemsBinary.push(onProcess);
    },

    binarySearch() {
      this.deleteItems(this.itemsBinary);

      let arr = this.items;
      let target = this.updateSelectedOptionsN;
      let low = 0;
      let upp = this.items.length - 1;
      while (low <= upp) {
        let mid = Math.floor((low + upp) / 2);

        if (arr[mid] == target) {
          this.itemsBinary.push([arr[mid]]);
          break;
        } else if (arr[mid] < target) {
          low = mid + 1;
        } else {
          upp = mid - 1;
        }
        this.storeProcessBinarySearch(low, upp + 1, target);
      }
    },
  },
};
</script>