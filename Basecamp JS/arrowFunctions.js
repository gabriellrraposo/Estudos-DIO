const helloWorld = () => "Hello World"
console.log(helloWorld())

const soma = (a, b) => a + b
console.log(soma(2, 1))

const parImpar = (num) => {
    num % 2 === 0 ? console.log("Número par") : console.log("Número ímpar")
}
parImpar(3)