const nome = document.querySelector('.nome')
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const resultado = document.querySelector('.result')
const inputCalcular = document.querySelector('.calc')
const inputReset = document.querySelector('.reset')

let total = 0
let pesoValor = 0
let alturaValor = 0

function addtexto(event) {
    event.preventDefault()
    pesoValor = parseFloat(peso.value)
    alturaValor = parseFloat(altura.value)

    calculaValor()
}


function calculaValor() {
    total = pesoValor / (alturaValor * alturaValor)
    verificaImc()
    resultado.classList.add('ativo')
}

function verificaImc() {
    switch(true) {
        case (total.toFixed(1) < 18.5):
            resultado.innerText = `${nome.value}, seu imc é ${total.toFixed(1)} (Magreza)`
        break
        case (total.toFixed(1) >= 18.5) && (total.toFixed(1) <= 24.9):
            resultado.innerText = `${nome.value}, seu imc é ${total.toFixed(1)} (Normal)`
        break
        case (total.toFixed(1) >= 25.0) && (total.toFixed(1) <= 29.9):
            resultado.innerText = `${nome.value}, seu imc é ${total.toFixed(1)} (Sobrepeso)`
        break
        case (total.toFixed(1) >= 30.0) && (total.toFixed(1) <= 39.9):
            resultado.innerText = `${nome.value}, seu imc é ${total.toFixed(1)} (Obesidade)`
        break
        case (total.toFixed(1) >= 40.0):
            resultado.innerText = `${nome.value}, seu imc é ${total.toFixed(1)} (Obesidade Grave)`
        break
        default:
            resultado.innerText = 'Erro!'
    }
}

function resetInputs(event) {
    event.preventDefault()
    nome.value = ''
    peso.value = ''
    altura.value = ''
    resultado.innerText = ''
    resultado.classList.remove('ativo')
}



inputCalcular.addEventListener('click', addtexto)

inputReset.addEventListener('click', resetInputs)
