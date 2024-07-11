let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

let valor1 = document.getElementById('valor').value

fetch('elefante.php?valor='+ valor1).then(function(resultado){
return resultado.text();
}).then(function (texto) {
    let mensagem = document.getElementById('mensagem')
    mensagem.innerText = texto
}).catch(function (erro){
    console.error(erro)
})

})