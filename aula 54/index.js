const pessoa = {
    nome: 'Luis', 
    sobrenome: 'aG',
    idade: '11'
}
for (var i in pessoa) {
    console.log(pessoa[i]); // motra os valores das chaves
}
for (var i in pessoa) {
    console.log(i); // mostra as chaves do objecto
}

// Leitura de indeces ou chaves de objeto