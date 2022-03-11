<template>
  <div>
    <select
      v-if="estado"
      name="select"
      class="w-100"
      @change="getValor"
      :value="dados"
    >
      <option v-for="(dados, item) in dados" :key="item">
        {{ dados.value }}
      </option>
    </select>
    <select
      v-if="!estado && profissao === false"
      name="select"
      class="w-100"
      @change="getValor"
      :value="dados"
      :disabled="isDisabled"
      :class="{ active: isDisabled }"
    >
      <option v-for="(dados, item) in dados" :key="item">
        {{ dados }}
      </option>
    </select>
    <select
      v-if="profissao"
      name="select"
      class="w-100"
      @change="getValor"
      :value="dados"
    >
      <option v-for="(dados, item) in dados" :key="item">
        {{ dados.profissao }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectVue",
  props: {
    dados: Array,
    estado: Boolean,
    profissao: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: true,
    },
  },

  data: function () {},
  methods: {
    getValor(e) {
      this.$emit("selectValor", e.target.value);
      this.$emit("valorCidade", e.target.value);
      this.$emit("valorProfissao", e.target.value);
    },
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
.active {
  background-color: rgb(247 247 247);
}
</style>
