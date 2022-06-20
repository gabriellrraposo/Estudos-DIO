// Função comum
function funcaoComum() {
    return "Eu sou uma função comum"
}

funcaoComum()

//Função Anônima
const soma = function (num1, num2) {
    return `A soma entre ${num1} e ${num2} é ${num1 + num2}`
}

soma(1, 3)

// Função Autoinvocável --precisa estar entre parenteses e ter parenteses no final para já invocá-la

(
    function(num1, num2) {
        let res = num1 * num2
        return res
    }
) (2, 5);
