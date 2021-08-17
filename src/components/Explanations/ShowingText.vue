<template>
  <div>
    <template v-for="(s,index) in text">
      <template v-for="(str,i) in changeTextToArr(s)">
        <p
          class="inline-block transform transition duration-150 hover:scale-125 hover:text-white ml-1"
          :key="i"
        >
          {{str}}
        </p>
      </template>
      <br :key="index">
    </template>
  </div>

</template>


<script>
export default {
  props: {
    text: Array,
  },
  methods: {
    changeTextToArr(text) {
      return text.split(" ");
    },
  },
};
</script>