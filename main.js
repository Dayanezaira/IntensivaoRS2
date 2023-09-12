
alert("Hello World!") 


let numberOne = prompt("Insira o primeiro número de sua escolha: ")
let numberTwo = prompt("Insira o segundo número de sua escolha: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let result = numberOne + numberTwo
 

alert(`A soma do número ${numberOne} com o número ${numberTwo}, é igual a: ${result}`)

let variable = prompt("Insira um número de sua preferência ou nome:")

if (!isNaN(variable)) {
    alert("É um número!")
} else {
    alert("Não é um número!")
}


if(isNaN(variable)) {
    console.log("É uma string!")
} else {
    console.log("Não é uma string.")
}


let bool = true

if (typeof bool === 'boolean') {
    console.log("É um booleano")
} else {
    console.log("Não é um booleano")
}


let nOne = prompt("Insira um número de sua escolha para realizar uma subtração: ")
let nTwo = prompt("Insira outro número de sua escolha: ")

nOne = Number(nOne)
nTwo = Number(nTwo)

let solution= nOne - nTwo
 
alert(`A subtração do número ${nOne} com o número ${nTwo}, é igual a: ${solution}`) 


let nOneMulti = prompt("Insira um número de sua escolha para realizar uma multiplicação: ")
let nTwoMulti = prompt("Insira outro número de sua escolha: ")

nOneMulti = Number(nOneMulti)
nTwoMulti = Number(nTwoMulti)

let resultMulti= nOneMulti * nTwoMulti
 
alert(`A multiplicação do número ${nOneMulti} com o número ${nTwoMulti}, é igual a: ${resultMulti}`)


let nOneDivi = prompt("Insira um número de sua escolha para realizar uma divisão: ")
let nTwoDivi = prompt("Insira outro número de sua escolha: ")

nOneDivi = Number(nOneDivi)
nTwoDivi = Number(nTwoDivi)

let solutionDivi= nOneDivi / nTwoDivi

alert(`A divisão do número ${nOneDivi} pelo número ${nTwoDivi}, é igual a: ${solutionDivi.toFixed(2)}`)


if(solutionDivi % 2 == 0) {
    alert(`A divisão dos números anteriores resultou em ${solutionDivi.toFixed(2)} que é um número par!`)
} else {
    alert(`A divisão dos números anteriores resultou em ${solutionDivi.toFixed(2)} que não é um número par!`)
}


if(solutionDivi % 2 != 0) {
    alert(`A divisão dos números anteriores resultou em ${solutionDivi.toFixed(2)} que é um número Ímpar!`)
} else {
    alert(`A divisão dos números anteriores resultou em ${solutionDivi.toFixed(2)} que não é um número Ímpar!`)
}