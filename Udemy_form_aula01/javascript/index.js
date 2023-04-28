
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
        const passworValid = this.IsPasswordsValid()
        console.log(fieldsValid, passworValid)
        if (fieldsValid && passworValid) {
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }
    IsPasswordsValid() {
        let valid = true

        const password = this.formulario.querySelector('input.senha')
        const passwordComfirn = this.formulario.querySelector('input.repetir-senha')
        if (password.value !== passwordComfirn.value) {
            valid = false
            this.createError(password, 'Campos senha e repetr senha precisam ser iguais.')
            this.createError(passwordComfirn, 'Campos repetir senha e senha precisam ser iguais.')
        }
        if (password.value.length < 6 || password.value.length > 12) {
            valid = false
            this.createError(password, 'Senha precisa estar entre 6 a 12 caracteres.')
        }
        return valid
    }
    isValid() {
        let valid = true;
        for (let errors of this.formulario.querySelectorAll('.error')) {
            errors.remove()
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
            if (field.classList.contains('usuario')) {
                if (!this.validUser(field)) valid = false
            }
        }
        return valid;
    }
    validUser(field) {
        let valid = false
        const user = field.value
        if (user.length < 3 || user.length > 12) {
            valid = false
            this.createError(field, 'O usuário precisa ter entre 3 a 12 caracteres.')
        }
        if (!user.match(/[a-zA-Z0-9]+/g)) {
            valid = false
            this.createError(field, 'O usuário deve conter apenas números e letras.')
        }
        return valid
    }
    validCPF(field) {
        let valid = false
        const cpf = new ValidaCPF(field.value)

        if (!cpf.valida()) {
            this.createError(field, 'CPF inválida.')
            valid = false
        }
        return valid
    } 
    createError(field, message) {
        const div = document.createElement('div')
        div.innerHTML = message
        div.classList.add('error')
        field.insertAdjacentElement('afterend', div)
    }
}
const valida = new validaFormulario()