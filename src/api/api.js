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
};
