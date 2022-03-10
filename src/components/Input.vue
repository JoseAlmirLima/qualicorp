<template>
  <div>
    <input type="text" class="w-100" />
  </div>
</template>

<script>
export default {
  name: "InputVue",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 1px solid #c5c5c5;
  padding: 5px;
  border-radius: 8px;
  outline: none;
}
</style>
