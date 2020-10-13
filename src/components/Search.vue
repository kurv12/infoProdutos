<template>
    <header>
        <div class="buscador">
            <input type="text" id="txt_busca" name="text" placeholder="Digite o código de barras aqui" v-model="codigo">
            <button class="btn_busca" @click="buscar">Buscar</button>
        </div>
        <div class="resultado">
            <p v-if="erro">Erro: {{ mensagem }}</p>
            <div v-else>
                <span class="nome_produto">Nome do produto: {{nome}}</span><br>
                <span class="ncm_produto">NCM: {{ncm}}</span><br>
                <span class="desc_produto">Descrição: {{descricao}}</span><br>
                <span class="pais_produto">País de registro: {{paisregistro}}</span><br>
                <span class="fabricante_produto">Fabricante: {{fabricante}}</span><br>
                <span class="distribuidor_produto">Distribuidor: {{distribuidor}}</span><br>
                <span class="categoria_produto">Categoria: {{categoria}}</span><br>
                <span class="marca_produto">Marca: {{marca}}</span><br>
                <span class="preco_produto">Preço: {{preco}}</span>
            </div>
        </div>      
    </header>
</template>

<script>
    export default {
      data() {
        return {
          codigo: ''
        }
      },
      methods: {
       buscar() {
        this.$emit('buscar', this.codigo)
       }
      },

      props: {
          nome: {
              type: String,
              required: true,
              default: ''
          },
          ncm: {
              type: String,
              required: true,
              default: ''
          } ,
          descricao: {
              type: String,
              required: true,
              default: ''
          } ,
          paisregistro: {
              type: String,
              required: true,
              default: ''
          },
          fabricante: {
              type: String,
              required: true,
              default: ''
          },
          distribuidor: {
              type: String,
              required: true,
              default: ''
          } ,
          categoria: {
              type: String,
              required: true,
              default: ''
          } ,
          marca: {
              type: String,
              required: true,
              default: ''
          },
          preco: {
              type: String,
              required: true,
              default: ''
          } ,
          mensagem: {
              type: String,
              required: true,
              default: ''
          } ,
          erro: {
              type: Boolean,
              required: true,
              default: false
          }
      }
    }
</script>

<style>
.buscador {
    display: flex;
    margin-top: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

#txt_busca{
    border: 1.5px solid;
    border-radius: .25rem;
    width: 200px;
    height: 40px;
    margin-right: 5px;
}

.btn_busca {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius: .25rem;
}

.resultado {
    display: inline-block;
    justify-content: center;
    margin-top: 30px;
    font-weight: bolder;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>