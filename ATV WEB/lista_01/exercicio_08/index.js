let botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    let id = document.getElementById("id").value
const words = id.split(' ');

    document.getElementById('saudacao').innerText = words.length

}) 
