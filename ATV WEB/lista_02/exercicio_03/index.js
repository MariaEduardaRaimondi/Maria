let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

     document.getElementById('célula').innerText = nome
      document.getElementById('célula2').innerText = email            
})