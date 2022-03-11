<template>
  <section class="container">
    <div class="row">
      <form class="mt-5">
        <div v-if="exibirMsgSucesso" class="dadosEnviados">
          <i class="fa fa-check" aria-hidden="true"></i>
          <p>Dados enviados, clique no botão para ver sua cotação!</p>
        </div>

        <div class="row">
          <div v-if="exibirEstado" class="col-lg-6 col-sm-12 mt-3">
            <label for="estado">Qual o seu estado?</label>
            <SelectVue
              id="estado"
              :dados="estados"
              @select-valor="getValorEstado"
              :estado="true"
            />
          </div>
          <div v-if="exibirEstado" class="col-lg-6 col-sm-12 mt-3">
            <label for="cidade">Qual a sua cidade?</label>
            <SelectVue
              id="cidade"
              :dados="cidades"
              :estado="false"
              @valor-cidade="getValorCidade"
              :isDisabled="bloquearCidade"
            />
          </div>
          <div v-if="exibirProfissao" class="col-lg-6 col-sm-12 mt-3">
            <label for="profissao">Qual a sua formação ou cargo?</label>
            <SelectVue
              id="profissao"
              :dados="profissoes"
              :profissao="true"
              @valor-profissao="getValorProfissao"
            />
          </div>
          <div v-if="exibirEstado" class="col-lg-6 col-sm-12 mt-3">
            <label for="date">Data de nascimento</label>
            <input
              id="date"
              type="date"
              v-model="formBody.datanascimento[0]"
              class="inputData"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <div class="d-flex justify-content-end">
              <ButtonVue
                @click="proximaEtapa"
                :disabled="disabledButton"
                :texto="textoButton"
                :class="{
                  active: disabledButton,
                }"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-if="exibirTable" class="row mt-5">
      <div class="col-12 table-responsive">
        <h1>Resultado cotação</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Plano</th>
              <th scope="col">Segmentação</th>
              <th scope="col">Tipo Acomodação</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(dadosCotacao, item) in dadosCotacao" :key="item">
              <td>{{ dadosCotacao.nome_plano_ans }}</td>
              <td>{{ dadosCotacao.segmentacao }}</td>
              <td>{{ dadosCotacao.tipo_acomodacao }}</td>
              <td>
                {{
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(dadosCotacao.precos.total)
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import API from "../../api/api.js";
import cidades from "../../services/cidades.json";
import SelectVue from "../../components/Select.vue";
import ButtonVue from "../../components/Button.vue";
export default {
  name: "HelloWorld",
  components: {
    SelectVue,
    ButtonVue,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      bloquearCidade: true,
      datanascimento: "",
      disabledButton: true,
      primeiraEtapa: 1,
      cidades: [],
      profissoes: [],
      textoButton: "Próximo",
      entidade: "",
      profissao: "",
      estado: "",
      cidade: "",
      exibirProfissao: false,
      exibirMsgSucesso: false,
      exibirTable: false,
      exibirEstado: true,
      dadosCotacao: "",
      formBody: {
        entidade: "",
        uf: "",
        cidade: "",
        datanascimento: [""],
      },

      estados: [
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
    getValorEstado(valor) {
      this.estado = valor;
      this.cidades = cidades[valor].cidades;
      this.bloquearCidade = false;
      this.cidade = "";
    },
    getValorCidade(valor) {
      this.cidade = valor;
    },
    getValorProfissao(valor) {
      this.profissao = valor;
    },
    proximaEtapa(e) {
      e.preventDefault();
      if (this.primeiraEtapa === 1) {
        if (this.estado !== "" && this.cidade !== "") {
          API.BuscarProfissoes(this.estado, this.cidade).then((response) => {
            this.exibirProfissao = true;
            this.exibirEstado = false;
            this.profissoes = response.data;
            this.primeiraEtapa = 2;
          });
        }
      }
      if (this.primeiraEtapa === 2) {
        API.BuscarEntidades(this.profissao, this.estado, this.cidade).then(
          (response) => {
            this.exibirProfissao = false;
            this.primeiraEtapa = 3;
            this.entidade = response.data[0].NomeFantasia;
            this.formBody.entidade = this.entidade;
            this.formBody.uf = this.estado;
            this.formBody.cidade = this.cidade;
            this.textoButton = "Realizar cotação";
            this.exibirMsgSucesso = true;
          }
        );
      }
      if (this.primeiraEtapa === 3) {
        API.FazerCotacao(this.formBody).then((response) => {
          this.dadosCotacao = response.data.planos;
          this.exibirEstado = true;
          this.textoButton = "Próximo";
          this.exibirTable = true;
          this.exibirMsgSucesso = false;
        });
      }
    },
  },

  mounted() {},
  watch: {
    estado: function () {
      if (this.estado !== "" && this.cidade !== "") {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    },
    cidade: function () {
      if (this.estado !== "" && this.cidade !== "") {
        this.disabledButton = false;
      } else {
        this.disabledButton = true;
      }
    },
  },
};
</script>
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
.active {
  background-color: rgb(207, 207, 207);
}
.textoError {
  font-size: 14px;
  color: red;
}
.borderError {
  border: 1px solid red;
  border-radius: 10px;
}
input {
  border: 1px solid #c5c5c5;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  width: 100%;
}
.dadosEnviados {
  font-size: 70px;
  color: green;
}
.dadosEnviados p {
  font-size: 16px;
  color: rgb(31, 31, 31);
}
</style>
