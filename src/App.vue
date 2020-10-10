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
        if(resposta.data['error']){
          this.dados = resposta.data['msg']
        }else{
          this.dados = resposta.data
        }
        console.log(this.dados)
      })
  }

}

</script>

