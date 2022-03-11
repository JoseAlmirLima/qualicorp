import { http } from "../services/config.js";

export default {
  BuscarProfissoes: (estado, cidade) => {
    return http.get(
      `profissao/${estado}/${cidade}?api-key=9f727c03-11a0-4d10-993a-6a3ebe845cbe`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  BuscarEntidades: (profissao, estado, cidade) => {
    return http.get(
      `entidade/${profissao}/${estado}/${cidade}?api-key=a94736bc-2c54-4805-859e-3592dbeae88d`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  FazerCotacao: (dados) => {
    return http.post(
      "plano-resumido?api-key=b9104723-af51-47d0-ba4e-cbeb1e1cb57d",
      dados,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.token,
        },
      }
    );
  },
};
