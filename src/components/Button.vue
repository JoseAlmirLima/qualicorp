<template>
  <button>
    {{ texto }}
  </button>
</template>

<script>
export default {
  name: "buttonVue",
  props: {
    texto: {
      type: String,
      default: "Próximo",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  background: #3e73c1;
  padding: 10px;
  color: white;
  position: inherit;
  transition: 2s;
}
button:hover {
  background: #28579c;
}
</style>
