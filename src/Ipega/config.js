import axios from 'axios'

var codigo = document.getElementById('txt_busca')
console.log(codigo)

export const http = axios.create({
    baseURL: "https://www.ipage.com.br/ws/v1/codebar/"+codigo+"/c701fdb70c0411ebbe8c525400c9158a"
})

