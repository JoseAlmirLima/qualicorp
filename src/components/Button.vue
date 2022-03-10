<template>
  <button>Fazer cotação</button>
</template>

<script>
export default {
  name: "buttonVue",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 16%;
  border: none;
  background: #3e73c1;
  padding: 10px;
  color: white;
}
</style>
