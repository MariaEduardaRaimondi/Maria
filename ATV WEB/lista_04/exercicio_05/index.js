let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let AreaQuadrado = document.getElementById('valor1').value
    let BaseQuadrado = document.getElementById('valor2').value
    
    fetch('elefante.php?valor1='+AreaQuadrado+'&valor2='+BaseQuadrado).then(function(resultado){

        return resultado.text();
        }).then(function (texto) {

            let mensagem = document.getElementById('mensagem')
            mensagem.innerText = "A area do quadrado foi" + texto

        }).catch(function (erro){
            console.error(erro)
        })
        
        })
