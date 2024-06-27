function atualiazarhora(){
let data = new Date ()
let hora = data.getHours () 
let minutos = data.getMinutes ()
let segundos = data.getSeconds ()

document.getElementById('Horário').innerText = hora + ":" + minutos + ":" + segundos

}

atualiazarhora()
setInterval (atualiazarhora, 1000)


