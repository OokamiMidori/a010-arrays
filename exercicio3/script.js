const numeros = [1, 80, 42, 30]

const string = ["arroz", "feijão", "bife", "fritas"]

const aleatorio = [42, "verde", true]

const numerosCopia = numeros.slice()

const stringCopia = string.slice()

const aletorioCopia = aleatorio.slice()

numerosCopia.push(8)
console.log(numeros)
console.log(numerosCopia)

stringCopia.pop()
console.log(string)
console.log(stringCopia)

aletorioCopia.splice(1, 1)
console.log(aleatorio)
console.log(aletorioCopia)
