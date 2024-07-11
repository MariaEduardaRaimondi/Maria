let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let c = document.getElementById('c').value
    
    fetch('elefante.php?valor1='+a+'&valor2='+b+'&valor3='+c).then(function(resultado){

        return resultado.text();
        }).then(function (texto) {

            let mensagem = document.getElementById('mensagem')
            mensagem.innerText = "O maior valor informado foi" + texto

        }).catch(function (erro){
            console.error(erro)
        })
        
        })
