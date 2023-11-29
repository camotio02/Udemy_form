const showVariable = (variable) =>
    console.log(variable)
try {
    console.log(variable)
} catch (e) {
    let variable = 'Variavel criada'
    showVariable(variable)
}
