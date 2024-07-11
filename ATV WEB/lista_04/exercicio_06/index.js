let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let AreaRetangulo = document.getElementById('valor1').value
    let BaseRetangulo = document.getElementById('valor2').value
    
    fetch('elefante.php?valor1='+AreaRetangulo+'&valor2='+BaseRetangulo).then(function(resultado){

        return resultado.text();
        }).then(function (texto) {

            let mensagem = document.getElementById('mensagem')
            mensagem.innerText = "A area do retangulo foi" + texto

        }).catch(function (erro){
            console.error(erro)
        })
        
        })







