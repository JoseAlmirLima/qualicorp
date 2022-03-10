<template>
  <select name="select" class="w-100">
    <option value="valor1">Valor 1</option>
    <option value="valor2" selected>Valor 2</option>
    <option value="valor3">Valor 3</option>
  </select>
</template>

<script>
export default {
  name: "SelectVue",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  border: 1px solid #c5c5c5;
  padding: 8px;
  border-radius: 8px;
  outline: none;
}
</style>
