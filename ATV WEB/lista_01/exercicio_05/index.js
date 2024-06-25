let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')

botao1.addEventListener('click', function() {
    document.getElementById('saudacao').style.display=("block");

}) 
botao2.addEventListener('click', function() {
     document.getElementById('saudacao').style.display=("none");
})