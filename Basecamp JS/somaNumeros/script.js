// function soma(num1, num2) {
//     let resposta = ""
//     let resposta2 = ""
//     num1 === num2 ? resposta = "Os número são iguais" : resposta = "Os números são diferentes"
//     num1 + num2 > 10 || num1 + num2 < 20 ? resposta2 = "O resultado da soma está entre 10 e 20" : resposta2 = "O resultado da soma não está entre 10 e 20"

//     return resposta, resposta2
// }

// soma(1, 2)

function comparaNumeros(num1, num2) {
    if (!num1 || !num2) {
        return "Defina dois números!"
    }
    const frase1 = criaFrase1(num1, num2);
    const frase2 = criaFrase2(num1, num2);

    return `${frase1} ${frase2}`;
}

function criaFrase1(num1, num2) {
    let iguais = '';
    if(num1 !== num2) {
        iguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`;
}

function criaFrase2(num1, num2) {
    const soma = num1 + num2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    let frase10 = 'menor';
    let frase20 = 'menor';

    if (compara10) {
        frase10 = 'maior';
    }

    if (compara20) {
        frase20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${frase10} que 10 e ${frase20} que 20`;
}

console.log(comparaNumeros(20));