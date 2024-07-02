function adicinarlinha(){
    var Tabela = document.getElementById("Tabela");
    var Nlinha = Tabela.rows.length;
    var Linha = Tabela.insertRow(Nlinha);
   
    var email = document.getElementById("email").value;
    var nome= document.getElementById("nome").value;
   
    for(var i=0;i<4;i++){
        Linha.insertCell(i);
    }
       
    var button = document.createElement("button");
   
    // Adiciona texto ao botão
    button.innerHTML = "editar";
   
    // Define um ID para o botão (opcional)
    button.id = "editar"+Nlinha;
   
    // Adiciona um evento de clique ao botão
    button.addEventListener("click", function() {
        var Linha = this.parentNode.parentNode.rowIndex;
        (document.getElementById("email").value = document.getElementById('Tabela').rows[Linha].cells[2].innerHTML);
        (document.getElementById("nome").value = document.getElementById('Tabela').rows[Linha].cells[1].innerHTML);
        (document.getElementById("id").value = document.getElementById('Tabela').rows[Linha].cells[0].innerHTML);
    });
   
    Tabela.rows[Nlinha].cells[0].innerHTML=Nlinha
    Tabela.rows[Nlinha].cells[1].innerHTML=nome
    Tabela.rows[Nlinha].cells[2].innerHTML=email
    Tabela.rows[Nlinha].cells[3].appendChild(button);
}
   
function salvarlinha(){  
    var Tabela = document.getElementById("Tabela");
    let linha = Tabela.rows [document.getElementById("id").value]
    for(var c = 0;c < linha.cells.length;c++){
        c == 2 && (linha.cells[c].innerHTML = document.getElementById("email").value);
        c == 1 && ( linha.cells[c].innerHTML = document.getElementById("nome").value);
        c == 0 && (linha.cells[c].innerHTML = document.getElementById("id").value);
    }
}


let formulario = document.getElementById("formulario")


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
   
    if (document.getElementById("id").value){
        salvarlinha()
    }else{
        adicinarlinha()
    }
   
    document.getElementById("email").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("id").value = "";
})
