import base from "./base.js";

function insertNuns() {
    return {

        tempPassword: '',
        showPassword: document.querySelector('.show-password'),
        get start() {
            document.addEventListener('click', (e) => {
                const isTr_lock_child = e.target.classList.contains('tr-lock-child')

                if (isTr_lock_child) {
                    const allShowPasswordChild = document.querySelectorAll('.show-password-child')
                    const text = e.target.innerText
                    this.tempPassword += text;
                    allShowPasswordChild[this.tempPassword.length - 1].style.background = 'white';
                    if (this.tempPassword.length === 6) {
                        this.checkIfPasswordIsValid(this.tempPassword)
                    }
                }
            })
        },
        checkIfPasswordIsValid(tempPassword) {
            const newAllshowPassword = document.querySelectorAll('.show-password-child')
            if (tempPassword === '123456') {
                this.showPassword.innerHTML = 'Desploqueado!'
            } else {
                const lastValue = base;
                this.showPassword.classList.add('show-password-incorreto')
                newAllshowPassword.forEach((tag)=> {
                    tag.style.backgroundColor = 'red'
                })
                setTimeout(() => {
                    this.showPassword.innerHTML = lastValue;
                    this.tempPassword = '';
                    newAllshowPassword.forEach((tag)=> {
                        tag.style.backgroundColor = ''
                    })
                    this.showPassword.classList.remove('show-password-incorreto')
                }, 1000)
            }

        },
        listenTouchstart(){
            document.addEventListener('touchstart', function() {
                if(this.classList.contains('tr-lock-child')){
                alert(this)
                }
                alert(123)
            });
        }
    }
}
const insert = insertNuns()
insert.start
insert.listenTouchstart()