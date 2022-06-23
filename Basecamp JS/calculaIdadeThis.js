function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'Osvaldo',
    idade: 19
}

console.log(calculaIdade.call(pessoa, 5))