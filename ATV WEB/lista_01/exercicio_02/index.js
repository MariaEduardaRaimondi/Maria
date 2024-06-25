let botao = document.getElementById('botao')
let contador = 0

botao.addEventListener('click', function() {
    contador++
    document.getElementById('saudacao').innerText 
   = contador
}) 
