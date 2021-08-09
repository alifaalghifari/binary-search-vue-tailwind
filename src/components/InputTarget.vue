<template>
  <input
    class="bg-blue-200 p-2 placeholder-gray-600 focus:outline-none focus:ring-1 focus:border-blue-400"
    type="text"
    placeholder="Enter number ..."
    @input="(event) => $emit('update-target', event)"
  >

</template>

<script>
export default {};
</script>