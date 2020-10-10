<template>
    <header>
        <div class="buscador">
            <input type="text" id="txt_busca" name="text" placeholder="Digite o código de barras aqui">
            <button class="btn_busca">Buscar</button>
        </div>
        <tr>
           <td></td>
        </tr>
    </header>
</template>

<script>

</script>

<style>
.buscador {
    display: flex;
    margin-top: 70px;
    justify-content: center;
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
    border-radius: .25rem;
}
</style>