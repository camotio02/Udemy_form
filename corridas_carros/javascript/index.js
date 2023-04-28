

class corrida {
    controllers = document.querySelector('div.controllers')
    div_defalult = document.createElement('div')
    constructor() {
        this.turn_on()
    }


    turn_on() {
        this.controllers.insertAdjacentElement('beforeend', this.div_defalult)
        this.div_defalult.classList.add('start')
        this.div_defalult.innerHTML = "Ligar o carro"
        this.div_defalult.addEventListener('click', () => {
            this.addMore_controllers()
        })
    }
    addMore_controllers() {
        const rotas = document.querySelectorAll('div.rota')
        this.div_defalult.classList.add('desligar')
        this.div_defalult.innerHTML = "desligar o carro"
        rotas.forEach((tag) => {
            tag.classList.add('loading')
        })
        let controller
        this.controllers.insertAdjacentElement('beforeend',
            controller = document.createElement('div')
        )
        controller.classList.add('start')
        controller.innerHTML = "Acelerar"
        document.querySelector('div.start').addEventListener('click', (e) => {
            e.preventDefault()
            location.reload()
        })
        controller.addEventListener('click', this.acelerar())
    }
    acelerar() {
        console.log(this.controllers)
        if(this.controllers.classList.contains('start')) {
            alert('Ok encontrado!')
        } else {
            alert('Não encontrado')
        }
    }
    // const control_ntrol_turn_on = document.querySelector('div.start').addEventListener('click', () => {
    //     const rotas = document.querySelectorAll('div.rota')
    //     rotas.forEach((tag) => {
    //         tag.classList.add('loading')
    //     })
    //     var control_turn_off = document.createElement('div')
    //     document.querySelectorAll('div.desligar').forEach((tag) => {

    //         tag.addEventListener('click', () => {
    //             console.log(tag.nextElementSibling.innerHTML = 'Sou o proximo elemnto')
    //         })
    //     })
    //     // const control_turn_off = `
    //     // <div class="desligar">Desligar o carro</div>
    //     // `
    //     document.querySelector('div.controllers').insertAdjacentElement('beforeend', control_turn_off)
    //     control_turn_off.classList.add('desligar')
    //     control_turn_off.innerHTML = 'Desligar o caro'
    // })

}
const corridas = new corrida()