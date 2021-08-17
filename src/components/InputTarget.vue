<template>
  <input
    class="bg-blue-100 p-2 placeholder-gray-700 focus:outline-none focus:ring-1 focus:border-blue-400"
    type="number"
    placeholder="Enter number ..."
    @input="(event) => $emit('update-target', event)"
  >

</template>

<script>
export default {};
</script>