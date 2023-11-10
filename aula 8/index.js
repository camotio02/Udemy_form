// Não podemos criar constantes com palavras reservadas;
// Constantes precisam ter nomes significativos;
// Uma constante não pode começar com um número;
// Não pode conter espaços ou traços;
// Utiizamos camelCase ex: TemorioLuis
// Case-sensitive
// Não podemos modificar o valor da constante;
// Não utiliza var, mas sim const;
// const nome = 'joão'
// console.log(nome);

// const firtsNumber = 5;
// const secondNumber = firtsNumber + 5;
// console.log(secondNumber)

const nome = 'Otávio Luiz';
const sobreNome = 'Miranda'
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura)
let data = (new Date().getFullYear()) - idade

let informacoesDoPaciente = (
    `${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de seu altura e seu IMC  é de ${imc}
    ${nome} nasceu em ${data}`
)
console.log(informacoesDoPaciente)