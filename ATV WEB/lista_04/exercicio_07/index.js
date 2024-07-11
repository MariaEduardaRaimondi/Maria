let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let valor1 = document.getElementById('valor1').value

    fetch('elefante.php?valor1='+valor1).then(function(resultado){

        return resultado.text();
        }).then(function (texto) {

            let mensagem = document.getElementById('mensagem')
            mensagem.innerText = "A area do circulo foi" + texto

        }).catch(function (erro){
            console.error(erro)
        })
        
        })
       





