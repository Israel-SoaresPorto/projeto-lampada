//DOM

const lampada = document.querySelector('#lampada')
const btLigar = document.querySelector('#ligar')
const btApagar = document.querySelector('#apagar')

//Evento

btLigar.addEventListener('click', acender)
btApagar.addEventListener('click', apagar)
lampada.addEventListener('dblclick', quebrar)

//Função

function acender() {
    lampada.src = "images/acesa.gif"
}

function apagar() {
    lampada.src = "images/apagada.gif"
}

function quebrar() {
    lampada.src = "images/quebrada.jpg"
}

