
function soma(numero1, numero2){ 
    return numero1 + numero2
}

function subtracao(numero1, numero2){
    return numero1 - numero2
}

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

function divisao(numero1, numero2){
    return numero1 / numero2
}

let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro número:"))

resultadoSoma = soma(numero1, numero2)
resultadoSubtracao = subtracao(numero1, numero2)
resultadoMultiplicacao = multiplicacao(numero1, numero2)
resultadoDivisao = divisao(numero1, numero2)

console.log(`soma: ${resultadoSoma} 
subtracao: ${resultadoSubtracao}
multiplicacao: ${resultadoMultiplicacao}
divisão: ${resultadoDivisao}`
)
