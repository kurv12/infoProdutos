<template>
  <Search />
</template>

<script>
import Search from './components/Search.vue'
import Produto from './Ipega/produtos'

export default {
  name: 'app',
  components: {
    Search
  },
  data(){
    return{
      dados: []
    }
  },
    mounted () {
      Produto.listar().then(resposta => {
        console.log(resposta.data)
        this.dados = resposta.data
      })
  }
}

</script>

