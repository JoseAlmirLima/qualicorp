<template>
  <div>
    <select
      v-if="estado"
      name="select"
      class="w-100"
      @change="teste"
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
      @change="teste"
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
      @change="teste"
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

  data: function () {
    return {
      apiListar: "api/cadastros/Lojas/GetList",
      estados: [
        { value: null, text: "Selecione um estado" },
        { value: "AC", text: "Acre" },
        { value: "AL", text: "Alagoas" },
        { value: "AP", text: "Amapá" },
        { value: "AM", text: "Amazonas" },
        { value: "BA", text: "Bahia" },
        { value: "CE", text: "Ceará" },
        { value: "DF", text: "Distrito Federal" },
        { value: "ES", text: "Espírito Santo" },
        { value: "GO", text: "Goiás" },
        { value: "MA", text: "Maranhão" },
        { value: "MT", text: "Mato Grosso" },
        { value: "MS", text: "Mato Grosso do Sul" },
        { value: "MG", text: "Minas Gerais" },
        { value: "PA", text: "Pará" },
        { value: "PB", text: "Paraíba" },
        { value: "PR", text: "Paraná" },
        { value: "PE", text: "Pernambuco" },
        { value: "PI", text: "Piauí" },
        { value: "RJ", text: "Rio de Janeiro" },
        { value: "RN", text: "Rio Grande do Norte" },
        { value: "RS", text: "Rio Grande do Sul" },
        { value: "RO", text: "Rondônia" },
        { value: "RR", text: "Roraima" },
        { value: "SC", text: "Santa Catarina" },
        { value: "SP", text: "São Paulo" },
        { value: "SE", text: "Sergipe" },
        { value: "TO", text: "Tocantins" },
      ],
    };
  },
  methods: {
    teste(e) {
      this.$emit("selectValor", e.target.value);
      this.$emit("valorCidade", e.target.value);
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
