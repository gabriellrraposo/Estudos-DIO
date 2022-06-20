// Função comum
function funcao() {
    return "Eu sou uma função comum"
}

//Função Anônima
const soma = function (num1, num2) {
    return `A soma entre ${num1} e ${num2} é ${num1 + num2}`
}

// Função Autoinvocável --precisa estar entre parenteses e ter parenteses no final para já invocá-la

(
    function() {
        let name = "Digital Innovation One"
        return name
    }
)()
