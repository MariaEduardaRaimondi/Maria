let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome =  document.getElementById("nome").value
    let email =  document.getElementById("email").value

   let meuJson = {
        nome: nome,
        email: email
   }

   console.log(meuJson)
})