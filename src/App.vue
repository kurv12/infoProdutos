<template>
  <div>
    <Search
      v-bind:nome="this.nome"
      v-bind:ncm="this.ncm"
      v-bind:descricao="this.descricao"
      v-bind:paisregistro="this.paisregistro"
      v-bind:fabricante="this.fabricante"
      v-bind:distribuidor="this.distribuidor"
      v-bind:categoria="this.categoria"
      v-bind:marca="this.marca"
      v-bind:preco="this.preco"
      v-bind:mensagem="this.mensagem"
      v-bind:erro="this.erro"
      fcm="this.fcm"
      @buscar="buscarProdutos"
    />
  </div>
</template>

<script>
//import Axios from 'axios'
import Search from "./components/Search.vue";
import Produto from "./Ipega/produtos";

export default {
  name: "app",
  components: {
    Search,
  },

  data() {
    return {
      nome: "",
      ncm: "",
      descricao: "",
      paisregistro: "",
      fabricante: "",
      distribuidor: "",
      categoria: "",
      marca: "",
      preco: "",
      mensagem: "",
      erro: true,
    };
  },
  methods: {
    buscarProdutos(codigo) {
      console.log(codigo);
      Produto.buscar(codigo).then((resposta) => {
        //console.log("toda a lista")
        //console.log(resposta.data['nome'])
        if (resposta.data["error"]) {
          this.erro = resposta.data["error"];
          this.mensagem = resposta.data["msg"];
          this.nome = "";
          this.ncm = "";
          this.descricao = "";
          this.paisregistro = "";
          this.fabricante = "";
          this.distribuidor = "";
          this.categoria = "";
          this.marca = "";
          this.preco = "";
        } else {
          this.erro = false;
          this.mensagem = "";
          this.nome = resposta.data["nome"];
          this.ncm = resposta.data["ncm"];
          this.descricao = resposta.data["descricao"];
          this.paisregistro = resposta.data["pais_registro"];
          this.fabricante = resposta.data["fabricante"];
          this.distribuidor = resposta.data["distribuidor"];
          this.categoria = resposta.data["categoria"];
          this.marca = resposta.data["marca"];
          this.preco = resposta.data["preco_medio"];
        }
        //console.log("mensagem de erro")
        //console.log(this.mensagem)
      });
    },
  },
};
</script>
