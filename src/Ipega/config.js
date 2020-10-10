import axios from 'axios'

export const http = axios.create({
    baseURL: "https://www.ipage.com.br/ws/v1/codebar/4006381105255/e3bdbb1e0aab11ebbe8c525400c9158a"
})