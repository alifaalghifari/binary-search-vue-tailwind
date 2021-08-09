<template>
  <div class="h-10 w-40 bg-gray-blue flex items-center justify-center ">

    <select
      class="h-full w-full bg-transparent text-white font-mono text-lg flex justify-center items-center outline-none"
      v-model="select"
      v-on:change="$emit('update-select',select)"
      name=""
      id=""
    >
      <template v-for="(option,index) in  options">

        <option
          class="text-gray-700 bg-blue-200 flex justify-center items-center"
          :disabled="option.value == 0 "
          :value="option.value"
          :key="index"
        >{{option.text}}</option>
      </template>

    </select>

  </div>
</template>

<script>
export default {
  name: "SelectOption",
  props: {
    options: Array,
    selected: Number,
  },
  data() {
    return {
      select: this.selected,
    };
  },
};
</script>