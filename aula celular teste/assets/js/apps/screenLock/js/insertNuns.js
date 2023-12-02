function insertNuns() {
    return {
        allShowPasswordChild: document.querySelectorAll('.show-password-child'),
        tempPassword: '',
        showPassword: document.querySelector('.show-password'),
        get start() {
            document.addEventListener('click', (e) => {
                const isTr_lock_child = e.target.classList.contains('tr-lock-child')
                if (isTr_lock_child) {
                    const text = e.target.innerText
                    this.tempPassword += text;
                    console.log(this.allShowPasswordChild[5].style.background)
                    this.allShowPasswordChild[this.tempPassword.length - 1].style.background = 'white';
                    if (this.tempPassword.length === 6) {
                        this.checkIfPasswordIsValid(this.tempPassword)
                    }
                }
            })
        },
        checkIfPasswordIsValid(tempPassword) {
            if (tempPassword === '123456') {
                this.showPassword.innerHTML = 'Desploqueado!'
            } else {
                const lastValue = this.showPassword.innerHTML;
                this.showPassword.innerHTML = 'Senha incorreta'
                setTimeout(() => {
                    this.showPassword.innerHTML = lastValue;
                    this.tempPassword = '',
                    this.allShowPasswordChild.forEach((tag)=> {
                        tag.style.backgroundColor = 'red'
                    })
                }, 1000)
            }

        }
    }
}
const insert = insertNuns()
insert.start