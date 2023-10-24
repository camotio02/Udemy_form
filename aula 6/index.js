const dada = document.querySelector('form')
const div = document.querySelectorAll('div')
const isDiv = div.item((d => d.accessKey.includes('menu')))
isDiv.className = 'linkActive'
const users = []
const add = () => {
    const user = {
        name: dada.name.value,
        surname: dada.surname.value,
        peso: dada.peso.value,
        altura: dada.altura.value
    }
    users.push(user)

    console.log(users)
}