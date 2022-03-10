import axios from "axios";

export const http = axios.create({
  baseURL: "https://apiceluladigitalhm.qualicorp.com.br/", //Deixar esse IP quando publicar o build

  // baseURL: 'https://localhost:44315', //Deixar esse IP quando publicar o build
  //baseURL: 'http://localhost:8080', //Deixar esse IP quando rodar local
});
