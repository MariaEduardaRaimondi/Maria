let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let idade = document.getElementById('idade').value
    
    if (idade >= 18) {
        document.getElementById('anodenascimento').innerText=("Voce é maior de idade.\n");
    } else {
        document.getElementById('anodenascimento').innerText=("Voce é menor de idade.\n");
    }

}) 
