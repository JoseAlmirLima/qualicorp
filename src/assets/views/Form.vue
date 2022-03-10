<template>
  <section class="container">
    <form class="mt-5">
      <div class="row">
        <div class="col-6 mt-3">
          <label for="">Qual seu estado?</label>
          <SelectVue />
        </div>
        <div class="col-6 mt-3">
          <label for="">Qual sua cidade?</label>
          <SelectVue />
        </div>
        <div class="col-6 mt-3">
          <InputVue />
        </div>
        <div class="col-6 mt-3">
          <InputVue />
        </div>
        <div class="col-6 mt-3">
          <InputVue />
        </div>
      </div>
      <div class="row mt-3">
        <div class="d-flex justify-content-center">
          <ButtonVue />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import API from "../../api/api.js";
import InputVue from "../../components/Input.vue";
import SelectVue from "../../components/Select.vue";
import ButtonVue from "../../components/Button.vue";
export default {
  name: "HelloWorld",
  components: {
    InputVue,
    SelectVue,
    ButtonVue,
  },
  props: {
    msg: String,
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

  mounted() {
    API.BuscarProfissoes("SP", "SAO PAULO");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  padding: 21px;
  box-shadow: 0px 0px 12px -1px #00000024;
  border-radius: 10px;
}

label {
  display: flex;
  margin-bottom: 8px;
}
</style>
