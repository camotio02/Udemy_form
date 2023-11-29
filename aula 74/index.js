// factory function
function creatPerson(name, lastName) {
    return {
        name, lastName,
        fala(assunto) {
            return `${name} fala ${assunto} com ${this.peso}`
        },
        peso: 90,
        altura: 1.65,
        // Getter fingir essa parte do código é uma variavel qualquer
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}
const p1 = creatPerson('Temotio', 'Luis');
console.log(p1.fala('Curso de JS'))
console.log(p1.imc)