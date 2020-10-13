import axios from "axios";

export default {
  buscar: (codigo) => {
    return axios.get(
      "https://www.ipage.com.br/ws/v1/codebar/" +
        codigo +
        "/e3bdbb1e0aab11ebbe8c525400c9158a"
    );
  },
};
