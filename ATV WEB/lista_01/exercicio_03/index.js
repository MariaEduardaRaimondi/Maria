let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let nome = document.getElementById('nome').value
    document.getElementById('anodenascimento').innerText = 2024 - nome

}) 
