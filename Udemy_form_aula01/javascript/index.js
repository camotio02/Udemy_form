
class validaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const fieldsValid = this.isValid()
    }
    isValid() {
        let valid = true;
        for (let errors of this.formulario.querySelectorAll('.error')) {
            if (errors.lentgh) {
                errors.remove()
            }
        }
        for (let field of this.formulario.querySelectorAll('.validar')) {
            if (!field.value) {
                let previousTag = field.previousElementSibling.textContent
                this.createError(field, `O campo "${previousTag}" não pode estar em branco!`)
                valid = false
            }
            if (field.classList.contains('cpf')) {
                if (!this.validCPF(field)) valid = false
            }
        }
    }
    validCPF(field) {
        const cpf = new ValidaCPF(field.value)

        if (!cpf.valida()) {
            this.createError(field, 'CPF inválida.')
            return false
        }
        return true
    }
    createError(field, message) {
        const div = document.createElement('div')
        div.innerHTML = message
        div.classList.add('error')
        field.insertAdjacentElement('afterend', div)
    }
}
const valida = new validaFormulario()