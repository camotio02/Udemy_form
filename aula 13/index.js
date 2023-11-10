// let umaString = "UM OPASASA"
// console.log(umaString.toLocaleLowerCase().match(/[a-z]/g))
let message = prompt("Please enter")
const Editor = (message) => {
    const confirmation = confirm(`A sua memsagem: ${message}, não está correta?`)
    if(confirmation) {
        const lastValue = prompt('qual palavra será editada?')
        const newValue = prompt(`digite a sua nova palavra para subtituir ${lastValue.toLocaleUpperCase()}`)
        const newConfirmation = message.replace(lastValue, newValue)
        alert(newConfirmation)
    }
}
Editor(message)