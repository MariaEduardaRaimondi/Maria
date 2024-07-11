
let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value

    fetch('elefante.php?valor1='+valor1+'&valor2='+valor2).then(function(resultado){
        return resultado.text();
    }).then(function (texto) {
        let mensagem = document.getElementById('mensagem')
        mensagem.innerText = "A soma de "+valor1+" e "+valor2+" é "+texto
    }).catch(function (erro) {
        console.error(erro)
    })

})