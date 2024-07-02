let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const table = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);

    nameCell.textContent = name;
    emailCell.textContent = email;
})