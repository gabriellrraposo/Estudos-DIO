let array = ['valor1', 'valor2', 'valor3']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

for (let i in array) {
    console.log(i)
}

for (let i in object) {
    console.log(i)
}

for (i of array) {
    console.log(i)
}

let a = 0
while (a < array.length) {
    console.log(a)
    a++
}

a = 0

do {
    a++
    console.log(a)
} while (a < array.length)