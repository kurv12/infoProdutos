import axios from 'axios'

var codigo = document.getElementById('txt_busca')

export const http = axios.create({
    baseURL: "https://www.ipage.com.br/ws/v1/codebar/"+codigo+"/e3bdbb1e0aab11ebbe8c525400c9158a"
})

