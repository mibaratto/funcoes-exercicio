//A

function meuNome(nome){
    console.log(`Olá ${nome}`)
}
meuNome("Michelle")

function tabuada(numero){
    console.log(`Tabuada do ${numero}:
    ${numero} x 1 = ${numero * 1}
    ${numero} x 2 = ${numero * 2}
    ${numero} x 3 = ${numero * 3}
    ${numero} x 3 = ${numero * 4}
    ${numero} x 3 = ${numero * 5}
    ${numero} x 3 = ${numero * 6}
    ${numero} x 3 = ${numero * 7}
    ${numero} x 3 = ${numero * 8}
    ${numero} x 3 = ${numero * 9}
    ${numero} x 3 = ${numero * 10}`)
}
tabuada(3)



//C
const meuNomeArrow = (nome) => console.log(`Olá ${nome}`)
meuNomeArrow("Michelle")

const tabuadaArrow = (numero) => {
    console.log(`Tabuada do ${numero}:
    ${numero} x 1 = ${numero * 1}
    ${numero} x 2 = ${numero * 2}
    ${numero} x 3 = ${numero * 3}
    ${numero} x 3 = ${numero * 4}
    ${numero} x 3 = ${numero * 5}
    ${numero} x 3 = ${numero * 6}
    ${numero} x 3 = ${numero * 7}
    ${numero} x 3 = ${numero * 8}
    ${numero} x 3 = ${numero * 9}
    ${numero} x 3 = ${numero * 10}`)
}
tabuadaArrow(4)