const { codePointAt } = require("core-js/fn/string");

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://ipage_cep.p.rapidapi.com/ws/produto/v1/application/views/codebar/?code=7899052589846&key=57a97589b6be11e9a80952540046af69",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ipage_cep.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY" // É necessario adquirir a chave de acesso
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


//como acessar a api
const event = document.querySelector("event")

cep.addEventListener("blur", (e) => {
	let search = cep.value.replace("")
	let chave = "e3bdbb1e0aab11ebbe8c525400c9158a"
	const options = {
		method:'GET',
		mode: 'cors',
		cache: 'default'
	}

	fetch(`https://www.ipage.com.br/ws/v1/codebar/${search}/${chave}`, options)
	.then(response =>{response.json()
		.then(data => console.log(response))
	})
	.catch(e => console.log('Deu erro: ' + e, message))
})

//pegando dados
const showData = (result) =>{
	for(const campo in result){
		if(document.querySelector("#"+campo)){
			console.log(campo)
		}
	}
}