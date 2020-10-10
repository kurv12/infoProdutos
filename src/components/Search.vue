<template>
    <header>
        <div class="buscador">
            <input type="text" id="txt_busca" name="text" placeholder="Digite o código de barras aqui" v-model="codigo">
            <button class="btn_busca" >Buscar</button>
        </div>
        <div class="resultado">
            <span class="nome_produto">Nome do produto: </span><br>
            <span class="ncm_produto">NCM:</span><br>
            <span class="desc_produto">Descrição:</span><br>
            <span class="pais_produto">País de registro:</span><br>
            <span class="fabricante_produto">Fabricante:</span><br>
            <span class="distribuidor_produto">Distribuidor:</span><br>
            <span class="categoria_produto">Categoria:</span><br>
            <span class="marca_produto">Marca:</span><br>
            <span class="preco_produto">Preço:</span>
        </div>
    </header>
</template>

<script>

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