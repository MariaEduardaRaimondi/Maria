let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let nome = document.getElementById('nome').value
    document.getElementById('saudacao').innerText = "Olá "+ nome +", este é meu site"

}) 
