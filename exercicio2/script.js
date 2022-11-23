//A
function funcaoSoma(numero1, numero2){
    return numero1 + numero2
}
console.log(funcaoSoma(1, 2))

//B
function funcaoMaiorIgual(numero1, numero2){
    return numero1 >= numero2
}
console.log(funcaoMaiorIgual(1, 2))

//C
function funcaoPar(numero1){
    return console.log(`${numero1} é par? ${numero1 % 2 === 0}`)
}
funcaoPar(2)

//D
function descontoInss(salario){
    salario = salario -(salario * 0.1)
    return salario
}
console.log(descontoInss(1000))